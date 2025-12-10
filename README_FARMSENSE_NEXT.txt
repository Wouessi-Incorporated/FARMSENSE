# FARMSENSE™ – Next.js Bilingual Site

This folder is a ready-to-deploy Next.js project for Cloudways or any Node host.

## Quick start

1. Upload this folder to your Cloudways instance.
2. Run `npm install` (or `yarn` / `pnpm`) in the `farmsense_next` directory.
3. Copy `.env.example` to `.env` and adjust values.
4. Run `npm run build` then `npm start` (or configure via Cloudways UI).

Routes:
- `/`  : auto-detects browser language and redirects to `/en` or `/fr`
- `/en`: English marketing page
- `/fr`: French marketing page

Contact form posts to `/api/contact` (placeholder, logs to server console).