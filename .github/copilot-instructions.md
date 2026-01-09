<!-- Copilot instructions tailored for the Profesia.ge Playwright test suite -->
# Profesia.ge — Copilot instructions

Purpose: Help AI code agents be immediately productive editing and extending the Playwright TypeScript test suite.

- **Project type:** Playwright test suite in TypeScript. Key files: [package.json](package.json), [playwright.config.ts](playwright.config.ts), tests under [tests/](tests/).

- **How tests run locally:** This repository has no npm `test` script. Use Playwright CLI:

  - Install dev deps then run tests:

    npm install
    npx playwright test

  - Open the last HTML report after a run:

    npx playwright show-report

- **Configuration highlights:** See [playwright.config.ts](playwright.config.ts)
  - `testDir` is `./tests`.
  - Reporter: `html` (openable with `npx playwright show-report`).
  - `trace: 'on-first-retry'` — traces are collected only when a test is retried.
  - `forbidOnly` and `workers` behavior depend on `process.env.CI` — respect CI gating.
  - `baseURL` is commented out; tests currently navigate to the full site URL (e.g., `http://profesia.ge/ka`) in code.

- **Test patterns & conventions (examples):** Tests are small, single-case files using Playwright's `test` and the `page` fixture.

  - Typical file: [tests/contact.spec.ts](tests/contact.spec.ts)
    - Navigates to the site: `await page.goto('http://profesia.ge/ka')`
    - Uses role-based selectors: `page.getByRole('link', { name: 'კონტაქტი' }).click()`
    - Asserts page content with `expect(page.locator('body')).toContainText(...)`.

  - Accessibility/role-first selectors are the dominant style — prefer `getByRole`, `getByLabel`, `getByText` over brittle CSS selectors.

- **Localization:** Text and role labels are Georgian. When editing or authoring tests, use the exact Georgian strings already in tests (examples live in `tests/*.spec.ts`). Avoid translating strings unless the test is explicitly for localization.

- **When changing base URL or environment:** Update `playwright.config.ts` (uncomment and set `baseURL`) and prefer `page.goto('')` with a relative path. If you must edit tests that hardcode `http://profesia.ge/ka`, update them consistently.

- **Where to add helpers/fixtures:** There is currently no `tests/helpers` or `test-fixtures` file. If adding shared helpers, follow Playwright conventions and export fixtures from `tests/utils` or a top-level `tests/test-helpers.ts` and import them in test files.

- **CI hints (discoverable):** `forbidOnly: !!process.env.CI` already prevents `test.only` on CI. If adding CI, set `CI=true` in the CI environment to match local behavior.

- **Dependencies & versions:** Dev deps are in [package.json](package.json) — `@playwright/test: ^1.57.0`. Use Playwright CLI via `npx` for consistent local runs.

- **What not to change without confirmation:**
  - The reporter setting (`html`) and `trace` behavior — these are intentionally set for investigation on failures.
  - Georgian strings used in assertions and role names — changing them requires domain knowledge or translation verification.

- **Examples to reference when generating or editing tests:**
  - [tests/about.spec.ts](tests/about.spec.ts)
  - [tests/professionspage.spec.ts](tests/professionspage.spec.ts)
  - [tests/quiz.spec.ts](tests/quiz.spec.ts)

If anything is missing or I misread usage (for example, an intended `npm` script or CI config), tell me which files or workflows to look at and I will update these instructions.
