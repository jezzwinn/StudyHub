# Enable StudyHub cross-device sync

StudyHub keeps a local offline copy and can optionally sync a student's own records between devices using Supabase Auth + Postgres. The app does not need a paid AI API. Supabase free-tier quotas and availability are controlled by Supabase and can change; do not promise unlimited or permanently free hosting.

## 1. Create a Supabase project

1. Create a project at https://supabase.com/dashboard. Choose the Free plan if it is offered and suitable for your use.
2. Wait for the database to finish provisioning.
3. Open **SQL Editor → New query**.
4. Copy the complete contents of `docs/SUPABASE-SETUP.sql`, run it, and confirm it succeeds. The table has Row Level Security enabled and each signed-in user can read/write only their own row.
5. Open **Project Settings → API** (or **Data API / API Keys**, depending on dashboard version). Copy the Project URL and the **publishable** key. A legacy `anon` public key is also accepted.
6. Never use a `service_role`, secret, or private key in the browser. Never commit one to GitHub.

## 2. Configure StudyHub

1. Deploy the updated repository to Vercel.
2. Open the deployed site and go to **Settings → Cloud sync across devices**.
3. Paste the Project URL and publishable/anon public key, then tap **Save cloud settings**.
4. Enter an email and a strong password (at least 8 characters), then choose **Create account**.
5. If Supabase email confirmation is enabled, open the confirmation email, confirm the account, return to StudyHub and sign in.
6. Sign in with the same StudyHub account on every device.

## 3. First sync and conflict choice

If cloud data already exists and this device has local records, StudyHub asks what to do:
- **OK** downloads the cloud record and replaces this device's local StudyHub state.
- **Cancel** keeps this device's local state and uploads it to the cloud.

This is a whole-state sync, not a field-by-field merge. Choose carefully; export a JSON backup first if both devices contain different records you need. After initial setup, edits are saved locally first and automatically uploaded after a short pause when online. When the device reconnects, it attempts to upload pending local changes. While StudyHub is open, it checks for newer cloud data periodically and when the app returns to the foreground. Use **Sync now** to manually upload the current device's state.

## Data and privacy

The synced state includes programme/settings, tasks, study sessions, flashcards, notes, questions, quiz history, exam records, chapter checklists, resource links, contribution drafts, private reflections, goals and review records. The database row is protected by Supabase Auth and RLS so one account cannot read another account's row through the normal client API.

The app does not upload local PDF files or the Diagram Lab canvas image. Those remain device-local. Cloud sync requires an internet connection for transfer; the local StudyHub app remains usable offline. The Supabase project owner administers the database and should protect account access. Do not use shared/public devices without signing out.

## Limits

- This is personal-account sync, not a public student community backend.
- Sync uses last-upload-wins whole-state replacement; simultaneous edits on two devices are not merged.
- Email confirmation and password recovery depend on Supabase Auth settings and email delivery.
- The public Supabase publishable/anon key is designed for browser use only because RLS enforces data access. Never put a service-role/secret key in client code.
- Free-tier limits, pausing rules and terms may change. Check Supabase's current pricing and terms before inviting many students.
