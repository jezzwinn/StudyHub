# StudyHub repository setup

## Repository
- Suggested repository: `StudyHub`
- Visibility: Private during development
- Default branch: `main`

## Upload from iPhone
1. Extract this ZIP in the Files app.
2. Open the `StudyHub-2027-Full` folder.
3. Upload the *contents* of that folder to the root of the GitHub `StudyHub` repository.
4. Commit the files to `main`.

Do not upload the outer ZIP as a single file. Do not upload `.env` files, passwords,
API keys, student personal data, or private backups.

## Vercel
This is a static HTML/CSS/JavaScript application. Import the GitHub repository
into Vercel and use:
- Framework preset: Other
- Build command: leave empty
- Output directory: leave empty / project root
- Install command: leave empty

Create a Preview deployment first. Do not switch the existing public domain until
the preview has been checked on mobile and desktop.

**Plan eligibility warning:** Vercel Hobby is restricted to personal, non-commercial
use under its terms. Confirm that the intended StudyHub use qualifies before using
Hobby for the public production service. Do not enter payment details or start a
paid plan without deciding that separately.

## Hosting and data boundaries
The current app is client-side and stores personal learning data in the browser.
A static deployment does not create accounts, shared database storage, live chat,
background jobs, or public student file uploads. Those require a separately
reviewed backend and privacy/security design.
