# Supabase Setup

This project now supports:
- email/password sign in
- Google OAuth
- GitHub OAuth
- synced profiles
- recently played
- private/public playlists
- shared profile and playlist links

## 1. Create a Supabase project

Create a free project at [https://supabase.com/](https://supabase.com/).

## 2. Run the schema

In Supabase SQL Editor, run:
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\supabase\schema.sql`

## 3. Enable providers

In Supabase Auth > Providers:
- enable Email
- enable Google
- enable GitHub

Use your GitHub Pages URL as the redirect URL, for example:
- `https://galaxydevvv.github.io/puresound/`

## 4. Fill config.js

Edit:
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\config.js`

Set:
- `supabase.url`
- `supabase.anonKey`
- `supabase.redirectTo`

## 5. Upload updated site files

Upload these to GitHub:
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\index.html`
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\styles.css`
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\app.js`
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\accounts.js`
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\config.js`
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\library.json`
- `C:\Users\Colin\OneDrive\Documents\Projects------------------------------✰✰✰\drive-music-player\sw.js`

## Notes

- Supabase anon keys are meant to be public in the browser.
- Security comes from Row Level Security policies in `schema.sql`.
- Local tracks are not synced to cloud playlists or recent-played history.

