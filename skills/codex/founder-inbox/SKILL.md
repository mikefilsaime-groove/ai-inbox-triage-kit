---
name: founder-inbox
description: Run a Gmail-to-Notion executive inbox triage workflow. Use when the user asks to triage inboxes, run founder-inbox, process Gmail into a Notion decision inbox, archive noise, apply inbox rules, or update executive inbox triage state.
---

# Founder Inbox

Use this skill to operate the AI Inbox Triage Kit.

## Required Context

Before acting, locate the kit root. Prefer the current repo root. Read these files when available:

- `generated/config.json`
- `templates/starter-rules.json`
- `templates/notion-rules-schema.md`
- `templates/notion-inbox-schema.md`
- `docs/architecture.md`

If `generated/config.json` is missing, ask the user to run `node installer/install-wizard.js` or provide the missing inbox and Notion database details.

## Core Objective

Keep the executive's email inbox clean while preserving true decisions in Notion.

The inbox constitution is:

> Eliminate noise by default. Surface only real decisions, high-value relationships, delegated work, or genuine risk.

## Workflow

1. Read the live Notion rules database.
2. Scan configured Gmail source inboxes.
3. Use visible Inbox plus an All Mail safety sweep.
4. Classify each thread against active rules.
5. Archive clear noise.
6. Create or update Notion decision items for true signal.
7. Draft or delegate only when a rule or user instruction is clear.
8. Send notifications only when the matched rule requests them and the connector is configured.
9. Summarize what changed.

## First Run Safety

For old inboxes, do not triage all history by default.

Use a bootstrap lookback of 14 days unless the user explicitly asks otherwise. Archive visible inbox messages older than the bootstrap window by removing the Inbox label; do not delete them.

## Decision Item Requirements

Every Notion decision item should include:

- Stable triage ID
- Source inbox prefix
- Original email link when available
- Last message date
- People involved
- Exact ask
- Suggested action
- Summary
- Why it matters
- Rule match and confidence

Put the human-readable brief in the page body in this order:

1. Last Message Date
2. People
3. Decision Brief
4. Suggested Reply / Action
5. Context
6. Why It Matters

Use page comments for user instructions.

## Safety

Allowed without extra confirmation:

- Read email
- Summarize threads
- Archive clear noise
- Create Notion items
- Create Gmail drafts
- Apply labels

Be careful with:

- Sending outbound email
- Forwarding sensitive content
- Deleting messages
- Acting on ambiguous finance, legal, health, or security items

Prefer draft-first for external sends unless the rule and user instruction clearly authorize sending.

## Summary Format

End each run with:

- Scope searched
- Threads reviewed
- Noise archived
- Notion items created or updated
- Drafts created
- Sends performed, if any
- Notifications attempted
- Ambiguous items needing the user

