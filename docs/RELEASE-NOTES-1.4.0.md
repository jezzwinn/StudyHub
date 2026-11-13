# StudyHub 1.4.0 — separate account page and adaptive learning workspace

## What changed
- Added a real, separate `login.html` route instead of an account overlay inside the main app.
- Sign-in and account creation are separate modes; the page supports email/password, Enter-key submission, show/hide password, guest mode and password reset/recovery.
- Main app checks for an existing Supabase session or an explicit guest-mode choice before opening. Existing accounts and the existing Supabase database are retained.
- Account & Security is its own section, separate from Preferences. It contains account status, cloud sync, sign-in, password-reset navigation and backup access.
- Added a dedicated PYQ & Question Papers section with programme-aware filters for Plus One, SSLC and Plus Two. Official SCERT sources and independent archives are clearly distinguished.
- Added links to KITE Mukulam/Samagra, SCERT curriculum updates, DIKSHA and PhET resources.
- Smart timetable prioritises subjects using student-selected focus ratings, chapter checklist completion, recorded mock-exam performance and upcoming exam subject/date.
- Existing local-first data saving and automatic Supabase sync are retained: changes queue for upload after 650 ms when signed in and online, with automatic retry after a temporary failure.
- Updated service-worker cache and release checks.

## Important accuracy and privacy notes
- Official SCERT/KITE resources are prioritised. Independent PYQ archives are labelled as third-party sources; check paper year, medium, stream and current portions.
- StudyHub links to source websites; it does not scrape, mirror or redistribute copyrighted textbooks or papers.
- The timetable uses transparent rule-based scoring, not generative AI. It is a planning aid and remains editable.
- Cloud sync is whole-state last-upload-wins, not simultaneous field-level merging. Keep JSON backups. Device-selected PDFs and diagram canvas images remain local-only.
- The public Supabase publishable key is intended for browser use; database Row Level Security remains the access boundary. Never add a service-role or secret key to client code.

## Deploy
Upload/replace the complete project files while preserving folders and paths, commit to `main`, then wait for Vercel to report Ready. Verify the login route, existing account sign-in, guest mode, password reset, mobile navigation, timetable priority changes and cross-device sync.
