# StudyHub 2027
**Learn. Share. Care. Grow Together.**

A free-first, mobile-friendly study workspace for Kerala students. This repository
starts from the supplied StudyHub v6 project and is a development baseline, not a
claim that the entire long-term ecosystem is complete.

## Run locally
Open `index.html` in a modern browser. For service-worker/PWA testing, serve this
folder over localhost or HTTPS rather than opening the file directly.

## Deploy
See [`docs/REPOSITORY-SETUP.md`](docs/REPOSITORY-SETUP.md) for GitHub upload and
Vercel static deployment settings, including the Vercel Hobby eligibility warning.

## Academic programme priorities
1. Kerala DHSE Plus One
2. Kerala SSLC Class 10
3. Kerala DHSE Plus Two

Biology is represented as separate Botany and Zoology subjects where applicable.

## Principles
- No paid API key is required for the included core tools.
- Personal learning records are browser-local by default; optional private cloud sync is available after Supabase setup.
- No compulsory account for local learning.
- Do not commit secrets, student personal information, or private backups.
- Do not describe local-only screens as cloud accounts, live chat, or synced storage.

## Project status
See [`docs/FEATURE-STATUS.md`](docs/FEATURE-STATUS.md) for the honest baseline audit
and known limitations. See [`docs/RELEASE-NOTES.md`](docs/RELEASE-NOTES.md) for
the inherited release history.

## Optional cross-device sync
See [`docs/CLOUD-SYNC-SETUP.md`](docs/CLOUD-SYNC-SETUP.md) and run [`docs/SUPABASE-SETUP.sql`](docs/SUPABASE-SETUP.sql) to enable private account sync. Until configured, StudyHub remains local-only.
