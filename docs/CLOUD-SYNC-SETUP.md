# StudyHub cloud sync

StudyHub is preconfigured to use the owner's Supabase project. Students do not need to enter a Project URL or API key on any device.

## Student setup

1. Open the separate `login.html` page.
2. Choose **Create account** and enter an email address and a strong password (at least 8 characters).
3. If email confirmation is enabled, open the confirmation email and follow its link.
4. Return to StudyHub and sign in. Use the same account on every device for private cross-device sync.
5. Guest mode remains available for local-only learning on a single device.

## Account and security

Open **Account & Security** inside StudyHub to view account status, sync status, sync now or sign out. Password reset is available from the separate login page. General Preferences no longer contains account credentials.

The public project URL and publishable key are included in the browser app configuration. The publishable key is intended to be public; database Row Level Security (RLS) is the security boundary. Never put a `service_role`, secret, or private key in the app or repository.

## Owner / maintainer setup

The Supabase project must already have the `public.studyhub_user_data` table, RLS enabled, and per-user select/insert/update policies installed from `docs/SUPABASE-SETUP.sql`. The app is configured for the StudyHub production project. If the owner changes Supabase projects, update the two public configuration constants in `js/app.js` and `js/auth.js`, then redeploy. Do not use a service-role key.

## First sync and conflict choice

If cloud data already exists and this device has local records, StudyHub asks what to do:
- **OK** downloads the cloud record and replaces this device's local StudyHub state.
- **Cancel** keeps this device's local state and uploads it to the cloud.

This is whole-state sync, not a field-by-field merge. Export a JSON backup first if both devices contain different records you need. After setup, edits are saved locally first and automatically uploaded after a short pause when online. If a transfer fails, StudyHub retries. When the device reconnects, it attempts to upload pending local changes. While StudyHub is open, it checks for newer cloud data periodically and when the app returns to the foreground.

## Data and privacy

The synced state includes programme/settings, tasks, study sessions, flashcards, notes, questions, quiz history, exam records, chapter checklists, resource links, contribution drafts, private reflections, goals and review records. The database row is protected by Supabase Auth and RLS so one account cannot read another account's row through the normal client API.

The app does not upload local PDF files or the Diagram Lab canvas image. Those remain device-local. Cloud sync requires an internet connection for transfer; the local StudyHub app remains usable offline in guest mode. The Supabase project owner administers the database and should protect account access. Do not use shared/public devices without signing out.

## Limits

- This is personal-account sync, not a public student community backend.
- Sync uses last-upload-wins whole-state replacement; simultaneous edits on two devices are not merged.
- Email confirmation and password recovery depend on Supabase Auth settings and email delivery.
- Free-tier limits, pausing rules and terms may change. Check Supabase's current pricing and terms before inviting many students.
