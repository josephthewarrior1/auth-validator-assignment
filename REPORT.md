# REPORT — User Authentication Validator (Assignment)

Deadline: 14 November 2025, 20:59 Local Time

## What I included in the ZIP
- `main.js` — implementation of `validateMail(email)` and `validatePassword(password)`.
- `test.js` — Mocha tests:
  - For each function:
    - 2 valid cases (should pass)
    - 2 invalid cases (error handling)
    - 1 intentional failing test (to force CI failure)
- `package.json` — includes a test script (`mocha test.js`) and `mocha` as dev dependency.
- `ci-windows.yml` — GitHub Actions workflow for Windows that runs `npm ci` and `npm test`.
- This `REPORT.md` — this analysis and instructions.

## Short analysis
- `validateMail(email)` uses a straightforward, practical regex that rejects obviously malformed emails (no `@`, no domain dot) but is permissive enough for typical assignment needs.
- `validatePassword(password)` enforces:
  - Minimum length 8
  - At least one lowercase letter
  - At least one uppercase letter
  - At least one digit

These are standard, demonstrable rules for a "strong" password for testing purposes.

## How to reproduce CI runs and screenshots (what to include in your submitted report)
1. Push the repository with the tests **including** the intentional failing tests (as provided).
   - Expected result: GitHub Actions `ci-windows.yml` workflow will run and **fail**.
   - Take a screenshot of the failed workflow run page showing the failing job and failing tests (expand the job log to show the failing `it` assertions). Save this image and include it in your final report.

2. To produce the passing run:
   - Edit `test.js` and **remove or comment out** the intentional failing tests (the two `it('break: ...')` tests).
   - Commit and push again.
   - Expected result: Workflow will run and **pass**.
   - Take a screenshot of the passing workflow run page showing all green checks and the successful `npm test` output.

3. In your submitted report (PDF or Markdown), include:
   - A short explanation of why the tests failed in the failing run (point to the intentional fails).
   - Two screenshots:
     - One showing failing run (with test output lines and failing assertions).
     - One showing passing run (after commenting out intentional fails).
   - Mention which study case(s) you chose:
     - I used "User Authentication Validator" with the two functions `validateMail(email)` and `validatePassword(password)`.

## Notes and tips for grading
- The tests are deterministic and quick; GitHub Actions on Windows with Node.js will install `mocha` and run the tests.
- If the runner times out or encounters network issues during `npm ci`, retry the push (network issues are outside the test logic).
- If you want the CI to produce test artifacts (JUnit XML), you can add reporters and upload artifacts in the workflow — I left it minimal for clarity.

## File locations in the ZIP
- `main.js`
- `test.js`
- `package.json`
- `.github/workflows/ci-windows.yml`  (provided as `ci-windows.yml` in root; move into .github/workflows if you want it auto-detected)
