# StudyHub 1.6.0 — Automatic exam planner

## Added
- Separate school-day and holiday planning based on the student's selected school days.
- Student-controlled school start/end, wake-up, bedtime, recreation start/duration and study-hour limits.
- Automatic scheduling of every entered, unfinished chapter into three phases: learn/understand, active recall/exercises, and revision/PYQ practice.
- Chapter scheduling priority uses recorded difficulty, confidence, subject priority and available mock-test performance.
- Generated tasks have dates and start/end times; completion of all three generated phases marks the chapter complete.
- Re-generation preserves completed generated sessions and rebuilds remaining unfinished generated work.
- Recreation and bedtime are treated as protected scheduling boundaries.

## Verification and limitations
- Run `npm run check` for JavaScript syntax and repository smoke checks.
- The app schedules only chapters entered/confirmed by the student. Official syllabus data, exact exam weightage and question-paper contents must be checked against current SCERT/DHSE publications before being represented as complete.
- The existing community feature is a private contribution draft, not a live public upload/moderation service.
- The existing cloud sync stores a per-user JSON state and is not a conflict-free real-time merge system.
- This release is a stronger deployable project baseline, not a certification of production readiness or a substitute for security, accessibility, load, and real-device acceptance testing.
