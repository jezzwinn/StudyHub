# StudyHub feature status — baseline audit

This document describes the supplied v6 codebase; it is not a claim that every
planned feature is complete.

## Present in the supplied baseline
- Dashboard and programme selector
- Subject-centre and starter-note interface
- Smart planner
- Focus timer
- Revision cards
- Digital notebook interface
- Diagram drawing interface
- Practice arena and exam simulator
- Answer self-review tools
- Voice study interface
- Local PDF reader interface
- Exam/marks, analytics and reports interfaces
- Resource, community and values interfaces
- Local backup/restore interface
- PWA manifest and service worker

## Known limitations to address in future releases
- Starter notes are not a verified, complete official chapter-by-chapter syllabus.
- Chapter mind maps need verified textbook-aligned content.
- A page being present in HTML does not prove all its controls work at runtime.
- Browser notifications and background reminders vary by browser and installation state.
- Local browser storage is not cloud sync and can be lost if site data is cleared.
- Static hosting alone does not provide shared accounts, live community chat, or server-side uploads; optional personal sync now uses an external Supabase project.
- Generative AI, cloud AI evaluation and external API-dependent features are not included.
- Rule-based study suggestions and prompt templates are not generative AI.

## Release gate
Before calling a feature complete, test its main user flow, empty state, save/reload
behaviour, mobile layout, keyboard/accessibility basics, offline behaviour where
applicable, and backup/restore behaviour.


## Optional cloud sync addition (v8)
- Added Supabase email/password authentication and per-user cloud backup/sync UI in Settings.
- Added SQL setup with Row Level Security and per-user ownership policies.
- Local-first operation remains available when cloud is not configured or the device is offline.
- Cloud sync is not active until the owner creates a Supabase project, runs the SQL setup, and configures the project URL/public key in StudyHub.
- Whole-state sync is last-upload-wins; there is no automatic multi-device merge. PDFs and diagram canvas images remain local.
