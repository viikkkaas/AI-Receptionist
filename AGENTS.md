# CareReceptionist — Agent Instructions

Astro static marketing site for an AI receptionist product (care businesses: dental clinics, etc.), deployed on Vercel. Commands: `npm run dev`, `npm run build`.

## Claude SEO (installed)

- Skills: `.claude/skills/seo-*` (orchestrator is `seo`, plus ~23 sub-skills). Agents: `.opencode/agent/seo-*.md`. Runtime: `.claude-seo/`.
- **IMPORTANT:** Skills and agents say `claude-seo run <script.py> <args>`. This is a Claude Code plugin; on this Windows/opencode setup, invoke it as:
  - `python .claude-seo\scripts\runtime.py run <script.py> <args>`
  - or `& .\claude-seo.cmd run <script.py> <args>`
- The runtime resolves scripts from `.claude-seo\scripts\` and runs them in an isolated venv. It is NOT a real PATH command.
- First-time setup (only if `doctor` says not ready): `python .claude-seo\scripts\runtime.py setup` (installs deps + Playwright Chromium into `%LOCALAPPDATA%\claude-seo`; add `--skip-browser` to skip the ~120MB Chromium download).
- Health check: `python .claude-seo\scripts\runtime.py doctor`.
- Secrets/credentials (Google API, DataForSEO, Moz) live under `~/.config/claude-seo/` — never commit them.
- User can also run workflows via the `/seo` command (see opencode.json).
