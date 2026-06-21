---
name: notion-inbox-responder
description: Process executive decisions from a Notion inbox. Use when the user asks to check Notion responses, process comments, close a triage item, archive handled items, create drafts, or act on a decision inbox status.
---

# Notion Inbox Responder

Use this skill for the lightweight response-processing loop. It does not perform a full Gmail triage scan unless the user asks.

## Required Context

Read `generated/config.json` when available. Use the configured Notion decision inbox and Gmail access.

If config is missing, ask for the Notion decision inbox database URL and source inbox details.

## Workflow

1. Fetch active Notion decision inbox items.
2. Fetch comments and relevant status fields.
3. Identify new user instructions.
4. Match each item to its Gmail thread using the stored internal ID or Gmail link.
5. Execute only clear instructions.
6. Create drafts when reply/delegation content is not fully authorized.
7. Archive Gmail threads when the user sets status to Archive or clearly asks to archive.
8. Mark completed Notion items done and set completed date.
9. Add a Notion comment or assistant note describing what happened.

## Status Interpretation

Use common status values this way:

- `Waiting`: no action yet.
- `Ready`: execute the clear comment/instruction.
- `Archive`: archive the Gmail thread and close the Notion item.
- `Handled`: the user handled it manually; close without sending.
- `Done`: no further action.
- `Snoozed`: do not act until the snooze date or user instruction.

## Comment Interpretation

Plain-language instructions are allowed:

- "Archive this."
- "Tell them yes and ask for Tuesday or Thursday."
- "Forward to finance and CC me."
- "Handled in Gmail."
- "Update the rules; this is noise."

If the user asks to update rules, update the Notion rules database and, when applicable, local starter templates. Do not overfit private examples into public package templates.

## Safety

Do not send outbound email unless the user instruction is explicit, recipients are clear, and content is clear.

If an instruction is directionally clear but the exact message is not, create a draft and report that it is ready for review.

Never delete ambiguous messages.

