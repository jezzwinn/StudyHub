# StudyHub 2027 — release notes

## Today-first workflow
Dashboard → Smart Planner → add a small mission → Focus Room → record learning in Notebook → create flashcards → review.

Suggested first session:
- 25 minutes: study one small concept from today's class.
- 5 minutes: break.
- 10 minutes: write a short summary in the notebook.
- 5 minutes: create 2–3 recall cards.

The schedule is a suggestion, not a fixed prescription. Adjust around school, rest and other responsibilities.

## Important implementation boundaries
Academic source data must be reviewed before seeding chapter lists. Plus Two subject combinations must be modelled by stream. Official score aggregation must follow the current scheme, not a guessed 1200 calculator.

Public student contributions and discussions require moderation, abuse reporting, privacy controls, age-appropriate safeguards, and hosting-policy review. They are not simulated by this offline build.

AI answer evaluation must be advisory and rubric-grounded; never represent it as official marking. Local AI must disclose model size, compatibility, limitations and any downloads.


## Phase 4 — Expanded Notes Library
- Added a visible built-in learning library inside Digital Notebook.
- Added subject, chapter and keyword filters.
- Expanded the bundled library to 54 original supplementary note packs.
- Added Malayalam as a separate subject in Plus One, SSLC and Plus Two workspaces.
- Malayalam packs include prose reading, poetry appreciation, grammar/language use and composition frameworks.
- Notes can be saved to the private notebook or converted into revision flashcards.
- Updated service-worker cache version to v3.
- Curriculum caution: concept groupings are not verified official chapter numbering or complete 2026–27 syllabus coverage.


## Mobile navigation hotfix (v5)
- Added a dedicated Notebook item to the mobile bottom navigation.
- Kept the More item for Settings.
- Made mobile navigation items flex evenly so all six items fit on narrow phone screens.
- This fixes notebook discoverability in the supplied static package; it does not verify the live host deployment or certify unrelated features.

## v6 — Exam preparation timetable, chapter maps and reminders
- Added a full-day weekday routine based on the existing 7:30 AM–6:00 PM school-day assumption, with an 8-hour sleep window, recovery time and an optional school free-period revision block.
- Added a six-day subject rotation for Plus One: Physics, Chemistry, Mathematics, Botany, Zoology, English, Hindi and Malayalam, with Hard / Medium / Light learning layers.
- Added a Sunday timetable with six focused study hours separated by meals and rest.
- Added a button to convert today's timetable study blocks into planner missions.
- Added chapter mind-map cards from available chapter notes and fill-in templates for every chapter added to the user's checklist. Templates do not invent syllabus facts; verify content with the current SCERT textbook.
- Added opt-in browser notifications five minutes before study blocks. These reminders can fire only while the StudyHub page is open; the static InfinityFree version has no push server to guarantee background notifications after the browser is closed.
- Added a daily 5:25 AM StudyHub start reminder through ChatGPT separately; this is not an app push notification.

## v8 · Optional cross-device cloud sync
- Added optional Supabase email/password accounts in Settings.
- Added local-first cloud upload, device restore, reconnect sync, and periodic foreground refresh.
- Added per-user RLS SQL and setup instructions in `docs/CLOUD-SYNC-SETUP.md` and `docs/SUPABASE-SETUP.sql`.
- The owner configures the Supabase project once in the app source; students do not enter project credentials.


## v9 · Preconfigured cloud sync
- Removed the per-device Project URL and publishable-key fields and the Save cloud settings button.
- Initialises the configured Supabase client automatically when StudyHub loads.
- Leaves only student email/password account controls in Settings.
- Clarified cloud data privacy and updated the service-worker cache version.
