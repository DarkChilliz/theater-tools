# theater-tools.user.js <!-- https://www.markdownguide.org/cheat-sheet/ -->

#### Userscript

- Viewing the [theater-tools.user.js](https://github.com/DarkChilliz/theater-tools/raw/main/theater-tools.user.js) userscript should prompt the script to be added. (tested in Violentmonkey).

#### Features

- If `fixStalledPlayers` is enabled, detect **stalled** players and attempt to fix them.

- **kick.com** support with `k=` prefix. **e.g.** `k=xqc k=trainwreckstv`

- `addLiveFromTwitch` uses Twitch.tv API to check if a user's followed channels are live. Then adds them as inactive chats, click `addStreams` or add them manually using the interface.

    - The Twitch API now requires that the client ID is associated with the OAuth access token.
        You can generate these [here](https://twitchtokengenerator.com/) for example. This script requires adding ```user:read:follows``` to the scope.

    - You will also need your user ID. This can be found [here](https://www.streamweasels.com/tools/convert-twitch-username-to-user-id/).

    - **Credit to [begs/livestreamers](https://github.com/begs/livestreamers)**

- `1920x1080 (16:9)` & `1440x900 (16:10)` **styles** for [twitchtheater.tv](https://twitchtheater.tv/).

    ![preview](https://github.com/DarkChilliz/theater-tools/blob/main/img/preview/preview.png?raw=true)

- Menu Buttons `runFunctions` & `functionsMenu`.

    <img src="https://github.com/DarkChilliz/theater-tools/blob/main/img/playerstyle.png?raw=true" alt="playerstyle" title="run functions"/><img src="https://github.com/DarkChilliz/theater-tools/blob/main/img/functionsmenu.png?raw=true" alt="functionsmenu" title="function menu"/>

    - Click the `runFunctions` menu to:

        - Change player **quality** of the first video using `gameMode` and `maxQualityMode` setting.
        - Uses `Default video quality:` in **TwitchTheater.tv** settings to set video quality of the others.
        - If `useGoFullScreen` is **enabled** make the browser **fullscreen**.
        - Change player styles.

    - Hold `Control` when clicking the `runFunctions` button to also:

        - Close the `functionsMenu`.
        - If `useVolumeOnRun` is **enabled**, set the volume of all players to **100%**.
        - **Unpause** all streams.

    - `functionsMenu` Each button includes a tooltip that describes **its primary function** & what happens when used with `Shift` and/or `Control`.

    <img src="https://github.com/DarkChilliz/theater-tools/blob/main/img/preview/mov.png?raw=true" alt="mov" title="Move position up"/>

    - `Shift` clicking this button moves the **streams position** to the very **top**.

<!-- #### ~~Firefox, Firefox Developer Edition, Firefox Nightly, Firefox ESR~~

- ~~Download repository as ZIP & Extract All.~~
- ~~Set `xpinstall.signatures.required` to `false` in `about:config`.~~
- ~~In the manifest folder rename `manifest_firefox.json` to `manifest.json` replacing the version in the root directory.~~
- ~~[Package files into ZIP](https://extensionworkshop.com/documentation/publish/package-your-extension/) & `Install Add-on From File...` in `about:addons`.~~

#### ~~Google Chrome, Chromium~~

- ~~Download repository as ZIP & Extract All.~~
- ~~Toggle `Developer mode` in `chrome://extensions/` and `Load unpacked`.~~ -->

# ttv-playerlowlatency.user.js

#### Userscript

- Viewing the [ttv-playerlowlatency.user.js](https://github.com/DarkChilliz/theater-tools/raw/main/ttv-playerlowlatency.user.js) userscript should prompt the script to be added. (tested in Tampermonkey).

#### Features

- Reduce the latency of the broadcast by speeding up the playback rate when you have more then 3 seconds of latency.
- Works on twitch.tv and embeded players. (Tested on [twitchtheater.tv](https://twitchtheater.tv/) and [twitch.tv](https://twitch.tv/forsen)).
    <!-- ``` -->
    <!-- | Options                    | Defaults | -->
    <!-- | -------------------------- | -------- | -->
    <!-- | Option.MinLatencySpeedup = |   2.25   | -->
    <!-- | Option.MinLatencyReload  = |   4.5    | -->
    <!-- | Option.KeepBuffer        = |   1.5    | -->
    <!-- | Option.OverridePlayer    = |   false  | -->
    <!-- ``` -->
<!-- - Reload on error (if the player errors, reload it) -->

# ttv-autoreload.user.js

#### Userscript

- Viewing the [ttv-autoreload.user.js](https://github.com/DarkChilliz/theater-tools/raw/main/ttv-autoreload.user.js) userscript should prompt the script to be added. (tested in Violentmonkey).

#### Features

- Works on twitch.tv and embeded players. (Tested on [twitchtheater.tv](https://twitchtheater.tv/) and [twitch.tv](https://twitch.tv/forsen)).
- Auto Reload on (Error #2000).

    <img src="https://github.com/DarkChilliz/theater-tools/blob/main/img/preview/error.png?raw=true" alt="error" width="350"/> <!-- https://stackoverflow.com/a/14747656 -->

    <!-- ![error](https://github.com/DarkChilliz/theater-tools/blob/main/img/preview/error.png?raw=true) -->

#### Credit to [Twitch, Auto reload when *k error](https://greasyfork.org/en/scripts/472868-twitch-auto-reload-when-k-error/code)
