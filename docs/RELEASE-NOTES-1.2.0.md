# StudyHub 1.2.0 — Account, navigation and sync upgrade

## What changed
- Added a dedicated account landing page with sign-in, free account creation, password-reset request and guest/local mode.
- Moved account access out of the Settings form; Settings now focuses on account status and sync controls.
- Reorganised the desktop sidebar into collapsible groups: Learning, Plan & Improve, Track Progress, Community & Wellbeing, and Account & Data.
- Added a mobile More drawer so every existing section remains reachable on small screens.
- Kept existing learning tools and pages rather than replacing them with mock pages.
- Cloud autosync now schedules an upload 650 ms after each saved state change, shows pending/sync/error states, and retries a failed upload after five seconds. Local-first persistence remains in place.
- Added a new service-worker cache name so deployed clients fetch the new UI.
- Removed the year from visible product branding.

## Important behaviour and limitations
- Guest mode stores data on the current device only. Sign in to use cross-device sync.
- Existing Supabase Auth, `studyhub_user_data` table and row-level security policies are retained. Do not reset or delete the Supabase project/table.
- The current sync model is debounced whole-state last-upload-wins, not simultaneous field-level merging. Keep regular JSON backups.
- Local PDFs and diagram canvas image data remain local-only.
- Email confirmation/password reset delivery depends on Supabase email configuration and provider limits.
- This upgrade does not add a generative AI API or paid service. Rule-based Study Support remains as-is.

## Deployment
Replace the project files from this package in the GitHub repository, preserving paths. Commit to `main` and wait for Vercel deployment to become Ready. Test sign-in, guest mode, password reset, mobile More navigation, and sync on a second device.
