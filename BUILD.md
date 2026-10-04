# BUILD.md — SilentDiff Build Guide

**For:** Codex / AI coding agents
**Mode:** Sequential, test-driven, one step at a time
**Rule:** Do NOT skip ahead. Complete a step, test it, confirm it works, THEN move to the next.

---

## How to Use This File

1. Start at **Step 0**.
2. Complete the step.
3. Run the step's **Test** command(s).
4. Confirm the **Expected Result**.
5. Only then proceed to the next step.
6. If a test fails, fix it before moving on. Do not accumulate broken state.

At the end of every step, update `BUILD.md` by checking the box `[x]` for that step.

---

## [x] Step 0 — Initialize the Repository

**Goal:** Empty repo with Node, npm, Git, and the folder skeleton.

### Commands

```bash
mkdir silentdiff && cd silentdiff
git init
npm init -y
mkdir -p src/{background,content,devtools,popup,sidebar,core,shared}
mkdir -p src/core/{diff,contract,a11y,reporters}
mkdir -p src/sidebar/components
mkdir -p public/icons
mkdir -p docs examples tests/{unit,e2e} scripts
touch .gitignore .nvmrc
