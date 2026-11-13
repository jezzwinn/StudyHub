# StudyHub 1.3.0 — account, adaptive planning and question-paper library

## What changed
- Dedicated full-screen account entry with separate Sign in and Create account modes, guest entry, password reset and password recovery.
- Account & Security is now its own navigation section; cloud sync, sign-in status and account actions are no longer mixed into general Preferences.
- Added PYQ & Question Papers section with programme-aware filters for Plus One, SSLC and Plus Two. Includes official SCERT links and clearly labelled independent paper archives.
- Added official KITE Mukulam/Samagra, SCERT curriculum, DIKSHA and PhET learning-resource gateways.
- Smart routine now ranks subjects using student-selected focus priority, chapter checklist progress, recorded mock-exam performance and the next exam date.
- Mobile navigation, touch targets and account controls receive additional responsive styling.
- Cloud sync retains local-first saves, 650 ms debounced uploads, pending/synced/error status, and retry after temporary failures.
- Existing Supabase project, authentication table and row-level security policies are retained. No database reset is required.

## Accuracy and scope
- Official SCERT/KITE sources are preferred. Third-party PYQ collections are labelled independent and must be checked against the current syllabus, medium and exam year.
- StudyHub links to source websites; it does not scrape, mirror or redistribute copyrighted question papers or textbooks.
- The smart routine is a transparent rule-based prioritiser, not an AI system. Its ranking depends on the student's focus ratings, recorded progress and mock marks.
- Whole-state sync remains last-upload-wins, not simultaneous field-level merge. Keep JSON backups.
- PDFs selected from the device and diagram canvas images remain local-only.

## Deploy
Replace the repository contents with this package, preserving file paths, commit to `main`, then wait for Vercel to report Ready. Test the sign-in and account creation flows, guest mode, password reset, PYQ filters, timetable priorities, and sync on a second device.
