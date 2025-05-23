# theater-tools.user.js <!-- https://www.markdownguide.org/cheat-sheet/ -->

#### Userscript

- Viewing the [theater-tools.user.js](https://github.com/DarkChilliz/theater-tools/raw/main/theater-tools.user.js) userscript should prompt the script to be added. (tested in Violentmonkey).

#### Features

- Detect stalled players and attempt to fix them.

- kick.com support with 'k=' prefix.

- 1920x1080 (16:9) & 1440x900 (16:10) styles for [twitchtheater.tv](https://twitchtheater.tv/).

    ![preview](https://github.com/DarkChilliz/theater-tools/blob/main/img/preview/preview.png?raw=true)

- Add Buttons

    <img src="https://github.com/DarkChilliz/theater-tools/blob/main/img/playerstyle.png?raw=true" alt="playerstyle" title="run functions"/><img src="https://github.com/DarkChilliz/theater-tools/blob/main/img/functionsmenu.png?raw=true" alt="functionsmenu" title="function menu"/>

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

- Viewing the [ttv-playerlowlatency.user.js](https://github.com/DarkChilliz/theater-tools/raw/main/ttv-playerlowlatency.user.js) userscript should prompt the script to be added. (tested in Violentmonkey).

#### Features

- Works on twitch.tv and embeded players. (Tested on [twitchtheater.tv](https://twitchtheater.tv/) and [twitch.tv](https://twitch.tv/forsen)).
- Minimal latency (automatically reload or speed up the stream if you're too far behind)
    <!-- ``` -->
    <!-- | Options                    | Defaults | -->
    <!-- | -------------------------- | -------- | -->
    <!-- | Option.MinLatencySpeedup = |   2.25   | -->
    <!-- | Option.MinLatencyReload  = |   4.5    | -->
    <!-- | Option.KeepBuffer        = |   1.5    | -->
    <!-- | Option.OverridePlayer    = |   false  | -->
    <!-- ``` -->
<!-- - Reload on error (if the player errors, reload it) -->

#### Credit to [Nerixyz/ttv-tools](https://github.com/Nerixyz/ttv-tools)

# ttv-autoreload.user.js

#### Userscript

- Viewing the [ttv-autoreload.user.js](https://github.com/DarkChilliz/theater-tools/raw/main/ttv-autoreload.user.js) userscript should prompt the script to be added. (tested in Violentmonkey).

#### Features

- Works on twitch.tv and embeded players. (Tested on [twitchtheater.tv](https://twitchtheater.tv/) and [twitch.tv](https://twitch.tv/forsen)).
- Auto Reload on (Error #2000).

    <img src="https://github.com/DarkChilliz/theater-tools/blob/main/img/preview/error.png?raw=true" alt="error" width="350"/> <!-- https://stackoverflow.com/a/14747656 -->

    <!-- ![error](https://github.com/DarkChilliz/theater-tools/blob/main/img/preview/error.png?raw=true) -->

#### Credit to [Twitch, Auto reload when *k error](https://greasyfork.org/en/scripts/472868-twitch-auto-reload-when-k-error/code)
