# StudyHub feature status

This file distinguishes the current baseline from long-term roadmap ideas.

## Included in this build
- Responsive dashboard and programme workspaces for Kerala DHSE Plus One, SSLC Class 10 and Plus Two.
- Separate `login.html` account entry with sign-in, free account creation, guest mode, show/hide password and password recovery.
- Separate Account & Security section and Preferences section.
- Grouped desktop navigation and mobile More drawer.
- Subject centres, chapter checklist and supplementary note library.
- Automatic school-day and holiday planner using student availability, school hours, wake/sleep, protected recreation and study-hour limits.
- Chapter-level scheduling into learn, active-recall/practice and revision/PYQ phases; ranking uses chapter difficulty/confidence, subject priorities and recorded mock marks.
- Adaptive smart timetable using student focus ratings, chapter progress, recorded mock marks and next exam date.
- Focus timer, revision cards, notebook, diagram lab, practice quiz, exam simulator, answer self-review, voice study and local PDF reader.
- PYQ & Question Papers library for Plus One, SSLC and Plus Two, with official and independent sources labelled separately.
- Curated SCERT, KITE Mukulam/Samagra, DIKSHA, Khan Academy India, PhET and NCERT resource links.
- Exam records, analytics, reports, private community contribution drafts, values/reflections, backup and restore.
- PWA manifest/service worker and local-first storage.
- Preconfigured Supabase Auth and private per-user JSONB row with RLS, automatic debounced cloud sync and retry.

## Important limitations
- Official chapter lists, portions and marking schemes must be verified against current SCERT/DHSE documents; supplementary notes are not a replacement for prescribed textbooks.
- Third-party PYQ archives are not official and their links/content may change. Verify year, subject, medium and syllabus.
- Static hosting does not provide a shared public upload/moderation backend or live community chat; community contributions are local private drafts in this build.
- Generative AI tutor, AI answer evaluation and paid API-dependent features are excluded. Study Support is rule-based.
- Browser notifications and speech features vary by device/browser.
- Cloud sync is whole-state last-upload-wins, not field-level multi-device merge.
- Device-selected PDFs and diagram canvas images remain local-only.
- Email confirmation and password-reset delivery depend on Supabase Auth email configuration and provider limits.
