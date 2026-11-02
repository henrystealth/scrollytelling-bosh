# Agent notes

## Secrets

This app does not read environment secrets. It is a static Vite site: no `.env` files, no `import.meta.env` usage, and no CI secrets.

Cursor Cloud Agents receive one secret, `OP_SERVICE_ACCOUNT_TOKEN` (a 1Password service account). Do not copy other secrets into Cursor.

`bash .cursor/install.sh` must stay secret-free. It installs the 1Password CLI when `op` is missing, Node.js when the runtime is missing or too old for Vite 8, and dependencies with `npm ci`.

If a future command needs a secret:

- Put references in `scrollytelling-bosh-1password.env` as `NAME=op://<vault>/<item>/<field>`, plus public literals. Add a path only after the item is confirmed. Never invent a path, and never commit plaintext values.
- Run it as `op run --env-file=scrollytelling-bosh-1password.env -- <command>`.
- Never print, log, or commit resolved secret values.
- If `OP_SERVICE_ACCOUNT_TOKEN` is unset, keep going on work that does not need secrets.

There is no `dev:1p` script today, because `npm run dev` does not need injected secrets.
