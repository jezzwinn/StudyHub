# StudyHub 1.5.0 — Guided student start

## Student experience
- Added a clear three-step start guide to the dashboard: choose a subject, make a plan, and practise what was learned.
- Collapsed the detailed desktop navigation groups by default so first-time students are not confronted with the entire feature list.
- Renamed navigation group labels for simpler student language.
- The active destination automatically expands its navigation group, preserving discoverability when students open a feature.
- Kept the mobile bottom navigation and More drawer; all existing destinations remain available.

## Preserved functionality
- No existing StudyHub page, data model, account flow, Supabase sync, study material, or programme workspace was intentionally removed.
- The update is a presentation and navigation improvement; it does not change student records or database schema.

## Verification
- `node --check js/app.js` passes.
- `node tests/smoke-check.js` passes all existing checks.
