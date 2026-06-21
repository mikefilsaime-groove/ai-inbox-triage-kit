# AI Inbox Triage Kit

A local-first AI inbox operating system for founders, executives, and small teams who want Gmail cleaned up without losing the messages that actually need human judgment.

This is a signal-to-noise ratio tuner for the inbox. It treats email as a stream of other people's agendas, archives the static, and surfaces only the personal, business, operational, and opportunity signals that deserve attention.

This kit teaches and packages a pattern:

- Gmail is the input stream.
- Notion is the editable control plane.
- Codex or Claude Code is the operating agent.
- Rules decide what gets archived, delegated, escalated, or placed in a decision inbox.
- The human only sees signal.

No private rules, names, companies, or real account details are included in this repo.

## What This Creates

- A Notion **Rules** database that acts like a live policy table.
- A Notion **Decision Inbox** database for items that need the executive.
- Starter rule templates for noise suppression, VIP contacts, finance routing, legal/compliance, domain renewals, and opportunities.
- Portable Codex and Claude Code skill folders.
- A questionnaire-driven installer scaffold that generates a local config from the user's answers.

## Recommended Stack

Recommended:

- Codex desktop or Codex CLI
- Gmail MCP/plugin or Google Workspace Gmail API
- Notion MCP/plugin
- Optional Telegram or iMessage notification bridge

Also supported conceptually:

- Claude Code with equivalent Gmail and Notion access

## Quick Start

1. Read [WHITEPAPER.md](WHITEPAPER.md).
2. Review [INSTALL.md](INSTALL.md).
3. Run the local questionnaire:

```bash
npm run wizard
```

4. Review the generated files in `generated/`.
5. Create or connect the Notion databases described in [docs/notion-setup.md](docs/notion-setup.md).
6. Install the relevant skill folder into your agent environment.

## Repo Map

```text
docs/          Implementation notes and setup guides
templates/     Notion schemas and starter rules
skills/        Portable Codex and Claude Code skill folders
installer/     Questionnaire and config generator
examples/      Sanitized examples for teaching and demos
```

## Important Reality Check

There is no honest "one click" setup for Gmail and Notion because users must authorize their own accounts. The goal is a guided install that makes the secure parts obvious and the repetitive parts automatic.

## Demo Mode

To preview generated output with fake `example.com` data:

```bash
npm run demo
```

## Privacy Promise

The system should never ship with real founder names, live rules, OAuth tokens, inbox addresses, phone numbers, family members, employees, clients, or vendors. Treat those as local-only configuration gathered during install.
