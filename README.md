# TwitchTheater.tv Styles (extension)

Features:

- 1920x1080 (16:9) & 1440x900 (16:10) styles for [twitchtheater.tv](https://twitchtheater.tv/)

## Firefox Developer Edition, Nightly, or ESR

- Set `xpinstall.signatures.required` to `false` in `about:config`.
<!-- - Rename `manifest_firefox.json` to `manifest.json` replacing the chrome version. -->
- [Package files into ZIP](https://extensionworkshop.com/documentation/publish/package-your-extension/) & `Install Add-on From File...` in `about:addons`.

## Chrome

- Toggle `Developer mode` in `chrome://extensions/` and `Load unpacked`.

# twitch-player.user.js (userscript) <!-- ttv-tools.user.js -->

- Viewing the [userscript](https://github.com/DarkChilliz/custom-styles-ext-twitchtheater.tv/raw/master/twitch-player.user.js) file should prompt the script to be added.

Features:

- Minimal latency (automatically reload or speed up the stream if you're too far behind)
- Reload on error (if the player errors, reload it)

Credit to [Nerixyz/ttv-tools](https://github.com/Nerixyz/ttv-tools)
