# StudyHub 2027 — Phase 2 implementation notes

This milestone adds four local-first capabilities to the launch candidate:

1. **Answer Lab** — a manual self-assessment rubric (0–4 each for accuracy, key points, terminology, structure). Saves reviews locally. It is not an AI evaluator and does not estimate official marks.
2. **Voice Study Mode** — uses browser SpeechSynthesis for read-aloud and SpeechRecognition/webkitSpeechRecognition when available. Availability and language quality vary by browser/device. User should check browser permission/privacy settings.
3. **PDF Reader** — a selected local PDF is opened through a temporary object URL in an iframe or new tab. It is not uploaded or retained after refresh; browser PDF support varies.
4. **Progress Reports** — printable summary of recorded focus minutes, completed tasks, chapter checklist and mock-exam average. Private values journal and contribution drafts are excluded.

## Still not implemented
Production accounts, cloud sync, public contributions, moderation queue, community rooms, private messaging, push notifications, remote AI inference, on-device model manager, AI answer grading, PDF annotation/highlighting, and server-side admin/reporting remain future milestones. These must not be advertised as live.

## Verification performed for this milestone
- `node --check js/app.js`
- ZIP integrity via `unzip -t`
- Static source review of the added HTML IDs and event handlers

Not performed: full browser automation, Safari/iOS device tests, speech recognition permissions, local PDF rendering across browsers, print layout verification, or InfinityFree deployment test.
