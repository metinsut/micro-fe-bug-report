# Module Federation Vite Example Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimal Bun workspace with `apps/host` and `apps/remote` where the host renders a remote React component via `@module-federation/vite`.

**Architecture:** A root Bun workspace owns shared scripts. `apps/remote` exposes a single `HelloCard` React component through `remoteEntry.js`, and `apps/host` consumes it with `React.lazy` and `Suspense`. A smoke test asserts the expected workspace and federation wiring, and build commands verify the final setup.

**Tech Stack:** Bun, React, TypeScript, Vite, `@vitejs/plugin-react`, `@module-federation/vite`, Bun test

---

### Task 1: Write a failing smoke test

**Files:**
- Create: `tests/workspace.test.ts`

- [ ] **Step 1: Write the failing test**
- [ ] **Step 2: Run `bun test tests/workspace.test.ts` to verify it fails**

### Task 2: Scaffold the Bun workspace and both apps

**Files:**
- Create: `package.json`
- Create: `tsconfig.base.json`
- Create: `apps/host/*`
- Create: `apps/remote/*`

- [ ] **Step 1: Add the root workspace manifest and shared TypeScript config**
- [ ] **Step 2: Add the remote app with a single exposed component**
- [ ] **Step 3: Add the host app that lazily imports the remote component**

### Task 3: Verify the example

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Install dependencies with Bun**
- [ ] **Step 2: Run `bun test tests/workspace.test.ts`**
- [ ] **Step 3: Run the build commands for both apps**
- [ ] **Step 4: Document how to run the example from the root workspace**
