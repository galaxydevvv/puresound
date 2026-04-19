```                                                                                    
  /$$$$$$  /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$  /$$   /$$ /$$$$$$$   /$$$$$$$
 /$$__  $$| $$  | $$ /$$__  $$ /$$__  $$ /$$_____/ /$$__  $$| $$  | $$| $$__  $$ /$$__  $$
| $$  \ $$| $$  | $$| $$  \__/| $$$$$$$$|  $$$$$$ | $$  \ $$| $$  | $$| $$  \ $$| $$  | $$
| $$  | $$| $$  | $$| $$      | $$_____/ \____  $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$
| $$$$$$$/|  $$$$$$/| $$      |  $$$$$$$ /$$$$$$$/|  $$$$$$/|  $$$$$$/| $$  | $$|  $$$$$$$
| $$____/  \______/ |__/       \_______/|_______/  \______/  \______/ |__/  |__/ \_______/
| $$                                                                                      
| $$                                                                                      
|__/                                                                                      
```

the puresound library is a huge library of high quality music

[https://galaxydevvv.github.io/puresound/](https://galaxydevvv.github.io/puresound/)
build: v6.0.0

**CREDITS**

**GalaxyDev** - Site Creation and Scripter

**Kudub** - File management and storage

*All individual tracks and albums featured are the property of their respective creators.*

-------------------------------------------------------------------------------------------

Copyright 2026 Puresound

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## GitHub Pages

This project runs best on GitHub Pages with a checked-in `library.json` manifest.

1. Edit `config.js`
2. Set your Google Drive browser API key in `directBrowser.apiKey`
3. In Google Cloud, restrict that key to your GitHub Pages origin
4. Rebuild `library.json` after Drive changes:
   `powershell -ExecutionPolicy Bypass -File .\tools\build-library-manifest.ps1`
5. Push `index.html`, `styles.css`, `app.js`, `config.js`, `library.json`, `sw.js`, and `tools/build-library-manifest.ps1`

Example origin restriction:
- `https://YOURNAME.github.io/*`
- `https://YOURNAME.github.io/REPO/*`

## Accounts and Playlists

Account, profile, recently played, and synced playlist setup is documented in:
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\SUPABASE_SETUP.md`

Database schema:
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\supabase\schema.sql`


