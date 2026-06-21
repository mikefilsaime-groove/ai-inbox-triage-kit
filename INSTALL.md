# Install Guide

This package is designed to be installed locally by a founder, operator, or technical assistant.

## Prerequisites

- Node.js 18 or newer
- A Gmail or Google Workspace account
- A Notion workspace
- Codex or Claude Code
- Gmail and Notion access through MCP tools, plugins, or local API credentials

## Step 1: Run The Questionnaire

```bash
npm run wizard
```

The wizard asks for:

- Source inboxes
- Inbox prefixes
- Important people
- Delegates
- Noise categories
- Urgent notification preferences
- Notion database URLs

It writes sanitized local config files into `generated/`.

## Step 2: Create Notion Databases

Use:

- [templates/notion-rules-schema.md](templates/notion-rules-schema.md)
- [templates/notion-inbox-schema.md](templates/notion-inbox-schema.md)

You can create these manually, with a Notion MCP tool, or through a future installer command.

## Step 3: Import Starter Rules

Start from:

- [templates/starter-rules.json](templates/starter-rules.json)

Then edit the rules in Notion. The Notion database is intended to be the live source of truth.

## Step 4: Install Skills

For Codex, copy or link:

```text
skills/codex/founder-inbox
skills/codex/notion-inbox-responder
```

For Claude Code, copy or link:

```text
skills/claude/founder-inbox
skills/claude/notion-inbox-responder
```

## Step 5: First Run

Ask the agent:

```text
Run founder-inbox.
```

For the first run on an old inbox, use a limited lookback such as 14 days. Archive older visible inbox messages unless the user explicitly asks for historical triage.

## Step 6: Response Processing

Ask:

```text
Run notion-inbox-responder.
```

This checks the Notion decision inbox for comments or status changes and executes clear instructions.
