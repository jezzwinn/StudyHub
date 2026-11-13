# StudyHub
**Learn. Share. Care. Grow Together.**

A free-first, mobile-friendly learning workspace for Kerala students, with a separate login page and Account & Security area, an adaptive timetable and curated question-paper library. This repository
starts from the supplied StudyHub v6 project and is a development baseline, not a
claim that the entire long-term ecosystem is complete.

## Run locally
Open `login.html` to sign in or continue as a guest; the app then opens at `index.html`. For service-worker/PWA testing, serve this
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
- Personal learning records are stored locally first; private cross-device sync is available through the preconfigured Supabase account connection.
- No compulsory account for local learning.
- Do not commit secrets, student personal information, or private backups.
- Do not describe local-only screens as cloud accounts, live chat, or synced storage.

## Project status
See [`docs/RELEASE-NOTES-1.4.0.md`] for the latest account, navigation, planner and PYQ upgrade. See [`docs/FEATURE-STATUS.md`](docs/FEATURE-STATUS.md) for the honest baseline audit
and known limitations. See [`docs/RELEASE-NOTES.md`](docs/RELEASE-NOTES.md) for
the inherited release history.

## Optional cross-device sync
See [`docs/CLOUD-SYNC-SETUP.md`](docs/CLOUD-SYNC-SETUP.md) for student sign-up and account-sync instructions. The owner must maintain the configured Supabase project and its Row Level Security policies.
