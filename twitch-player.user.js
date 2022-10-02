// ==UserScript==
// @name         twitch-player.user.js
// @namespace    https://github.com/DarkChilliz
// @match        *://*.twitch.tv/*
// @run-at       document-start
// @grant        none
// @version      1.0.10
// @updateURL
// @downloadURL    http://192.168.1.200:8080/custom-styles-ext-twitchtheater.tv/twitch-player.user.js
// @author         darkchilliz | credit to https://github.com/Nerixyz/ttv-tools
// @description    29/04/2021, 1:54:21 am | twitch-player.user.js
// ==/UserScript==

// 'beaverjs' ##### import { ContextEventHandler } from 'beaverjs';
// import { ContextEventHandler } from 'beaverjs';

// 'src/options.ts'
var Option;
(function (Option) {                  // Defaults //
    Option.MinLatencySpeedup =  2.25; //   2.25;  //
    Option.MinLatencyReload  = 44.5;  //   4.5;   //
    Option.KeepBuffer        =  1.5;  //   1.5;   //
    Option.OverridePlayer    = false; //   false  //
})(Option || (Option = {}));
function makeGetOption(key) {
    return () => (key);
}
const MinLatencySpeedup = makeGetOption(Option.MinLatencySpeedup);
const MinLatencyReload = makeGetOption(Option.MinLatencyReload);
const KeepBuffer = makeGetOption(Option.KeepBuffer);
const OverridePlayer = makeGetOption(Option.OverridePlayer);

// 'src/context/twitch-player.ts' || from 'dist/build/context-script.js'
function getPlayer(connector) {
    return connector().find('twitch-player', node => node.setPlayerActive && node.props?.mediaPlayerInstance);
}
function getPlayerState(connector) {
    return connector().find('twitch-player-state', node => node.setSrc && node.setInitialPlaybackSettings);
}
function resetPlayer(connector) {
    const player = getPlayer(connector)?.props?.mediaPlayerInstance;
    const playerState = getPlayerState(connector);
    if (!player)
        throw new Error('Could not find player');
    if (!playerState)
        throw new Error('Could not find player state');
    const sink = player.mediaSinkManager || player.core?.mediaSinkManager;
    if (sink?.video?._ffz_compressor) {
        const video = sink.video;
        const volume = video.volume ?? player.getVolume();
        const muted = player.isMuted();
        const newVideo = document.createElement('video');
        newVideo.volume = muted ? 0 : volume;
        newVideo.playsInline = true;
        video.replaceWith(newVideo);
        player.attachHTMLVideoElement(video);
        setImmediate(() => {
            player.setVolume(volume);
            player.setMuted(muted);
        });
    }
    playerState.setSrc({ isNewMediaPlayerInstance: true });
}
function initWorkerHandler(connector) {
    const player = getPlayer(connector);
    const worker = player?.props?.mediaPlayerInstance?.core?.worker;
    if (!worker || !player)
        throw new Error('No worker/player');
    if (Reflect.get(worker, 'ad:known'))
        return;
    Reflect.set(worker, 'ad:known', true);
    console.log('Listening on worker messages.');
    worker.addEventListener('message', ({ data }) => {
        if (typeof data !== 'object' || location.pathname.includes('videos/'))
            return;
        if (data.type === 'PlayerAnalyticsEvent') {
            const args = { properties: { ...data.arg.properties } };
            if (args.properties.sink_buffer_size)
                args.properties.sink_buffer_size *= 1000;
            if (args.properties.sink_buffer_size && args.properties.sink_buffer_size > MinLatencySpeedup() * 1000) {
                if (args.properties.sink_buffer_size > MinLatencyReload() * 1000)
                    resetPlayer(connector);
                else {
                    const latencyToSkip = args.properties.sink_buffer_size - (KeepBuffer() * 1000);
                    const video = document.querySelector('video');
                    speedupPlayer(player, 2);
                    video.playbackRate = 2;
                    // this is dank but whatever... the worker will always try to get us to playbackRate=1
                    const skippa = () => {
                        if (video.playbackRate !== 2)
                            video.playbackRate = 2;
                    };
                    video.addEventListener('ratechange', skippa);
                    setTimeout(() => {
                        resetPlayerSpeed(player, 1);
                        video.removeEventListener('ratechange', skippa);
                        video.playbackRate = 1;
                    }, latencyToSkip);
                }
            }
        }
        else if (data.type === 'PlayerError') {
            resetPlayer(connector);
        }
    });
}
let skipPlaybackRateChange = false;
function speedupPlayer(player, rate) {
    expectMonitor(player)?.setPlaybackRate?.(rate);
    skipPlaybackRateChange = true;
}
function resetPlayerSpeed(player, rate) {
    skipPlaybackRateChange = false;
    expectMonitor(player)?.setPlaybackRate?.(rate);
}
function expectMonitor(player) {
    const monitor = player.props?.mediaPlayerInstance?.core?.mediaSinkManager?.getCurrentSink?.().playbackMonitor;
    if (!monitor)
        return;
    overwriteMonitor(monitor);
    return monitor;
}
function overwriteMonitor(monitor) {
    if (!monitor.setPlaybackRate || monitor.setPlaybackRate.known)
        return;
    const base = monitor.setPlaybackRate;
    monitor.setPlaybackRate = function (...args) {
        if (skipPlaybackRateChange)
            return;
        base.apply(this, args);
    };
    monitor.setPlaybackRate.known = true;
}

// 'src/utilities.ts' || from 'dist/build/context-script.js'
function lazy(fn) {
    let value = undefined;
    return () => {
        if (value === undefined)
            return (value = fn());
        return value;
    };
}

// './react-connector' || from 'dist/build/context-script.js' || credit to ffz devs
class ReactConnector {
    constructor() {
        this.known = new Map();
        this.reactRoot = lazy(() => document.querySelector('#root')?._reactRootContainer?._internalRoot?.current);
    }
    find(id, constraint, bypassCache = false) {
        if (!bypassCache && this.known.has(id))
            return this.known.get(id);
        const found = this.findNode(this.reactRoot(), constraint);
        if (!bypassCache && found)
            this.known.set(id, found);
        return found;
    }
    findNode(root, constraint) {
        if (!root)
            return null;
        if (root.stateNode && constraint(root.stateNode))
            return root.stateNode;
        let node = root.child;
        while (node) {
            const result = this.findNode(node, constraint);
            if (result)
                return result;
            node = node.sibling;
        }
        return null;
    }
}

// 'dist/build/context-script.js'

const lazyConnector = lazy(() => new ReactConnector());
// const eventHandler = new ContextEventHandler();
window.addEventListener('playing', () => initWorkerHandler(lazyConnector), true);
// eventHandler.on('updateUrl', ({ url, stream }) => {
//     const core = getPlayer(lazyConnector)?.props?.mediaPlayerInstance?.core;
//     if (!core)
//         return;
//     const path = core.getPath();
//     if (url === path)
//         return; // same url
//     const user = path.match(/\/channel\/hls\/([^.]+).m3u8/)?.[1];
//     if (!user) {
//         console.warn('Attempted to reload but got a bad path:', path);
//         return;
//     }
//     if (user !== stream)
//         return; // other stream -- invalid
//     core.load(url, '');
//     signalPlayer('blue');
// });
// eventHandler.on('adSkipped', () => signalPlayer('red'));
function signalPlayer(color) {
    const player = document.querySelector('.video-player__overlay');
    if (!player)
        return;
    player.animate({
        composite: 'replace',
        easing: 'ease-in',
        boxShadow: [`inset 0 0 30px ${color}`, 'inset 0 0 30px transparent'],
    }, 1000);
}
(() => {
    const baseFetch = window.fetch;
    window.fetch = (url, init, ...args) => {
        try {
            if (typeof url === 'string' && OverridePlayer()) {
                if (url.includes('/access_token')) {
                    url = url.replace('player_type=site', 'player_type=embed');
                }
                else if (url.includes('/gql') &&
                    typeof init?.body === 'string' &&
                    init.body.includes('PlaybackAccessToken')) {
                    const newBody = JSON.parse(init.body);
                    newBody.variables.playerType = 'embed';
                    init.body = JSON.stringify(newBody);
                }
            }
        }
        catch { }
        return baseFetch(url, init, ...args);
    };
})();
// window.addEventListener('DOMContentLoaded', () => {
//     eventHandler.emitContent('clientId', window.commonOptions.headers['Client-ID']);
// });

//# "context-script.js"
