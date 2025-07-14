// ==UserScript==
// @name            ttv-playerlowlatency.user.js
// @namespace       https://github.com/DarkChilliz
// @homepage        https://github.com/DarkChilliz/twitchtheatertv-tools
// @match           *://*.twitch.tv/*
// @run-at          document-idle
// @grant           none
// @version         2.0.0
// @updateURL
// @downloadURL     https://github.com/DarkChilliz/twitchtheatertv-tools/raw/main/ttv-playerlowlatency.user.js
// @description     29/04/2021, 1:54:21 am
// @icon
// ==/UserScript==

(function () {
    'use strict';

    const SPEEDUP_THRESHOLD = 3.0; // seconds of latency before we try to speed up
    const SPEEDUP_RATE = 2.0;      // how fast to playback when speeding up
    const KEEP_BUFFER = 1.0;       // desired buffer size after correction

    let speedupActive = false;

    function monitorVideo(video) {
        if (!video) return;

        const maintainPlaybackRate = () => {
            if (speedupActive && video.playbackRate !== SPEEDUP_RATE) {
                video.playbackRate = SPEEDUP_RATE;
            }
        };

        const resetSpeedup = () => {
            speedupActive = false;
            video.playbackRate = 1.0;
        };

        const checkLatency = () => {
            if (video.readyState < 2) return;

            try {
                const current = video.currentTime;
                const buffered = video.buffered;
                if (buffered.length === 0) return;

                const end = buffered.end(buffered.length - 1);
                const latency = end - current;

                if (latency > SPEEDUP_THRESHOLD) {
                    speedupActive = true;
                    video.playbackRate = SPEEDUP_RATE;
                    video.addEventListener('ratechange', maintainPlaybackRate);

                    const correctionTime = (latency - KEEP_BUFFER) * 1000;
                    setTimeout(() => {
                        video.removeEventListener('ratechange', maintainPlaybackRate);
                        resetSpeedup();
                    }, correctionTime);
                }
            } catch (e) {
                console.warn('Latency check failed:', e);
            }
        };

        setInterval(checkLatency, 3000);
    }

    // Wait for video element to appear using MutationObserver
    const observer = new MutationObserver(() => {
        const video = document.querySelector('video');
        if (video) {
            observer.disconnect();
            console.log('[TTV-LowLatency] Video found. Monitoring latency...');
            monitorVideo(video);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
