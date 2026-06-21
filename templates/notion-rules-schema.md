# Notion Rules Schema

Create a Notion database named `Inbox Triage Rules`.

## Properties

| Property | Type | Purpose |
| --- | --- | --- |
| Category | Title | Rule name |
| Active | Checkbox | Whether the rule is active |
| When To Use | Text | Matching guidance |
| Default Handling | Text | What the agent should do |
| Inbox Outcome | Select | Archive, Delete, Log, Delegate, Needs Executive, Review |
| Executive Visibility | Select | Immediate, Decision Queue, Digest, None |
| Notify Method | Multi-select | Notion Inbox, Chat, Text, WhatsApp, Email, None |
| Delegate Name(s) | Text | Human delegate names or roles |
| Delegate Email(s) | Text | Delegate email addresses |
| Examples / Notes | Text | Edge cases and examples |

## Suggested Select Options

Inbox Outcome:

- Archive
- Delete
- Log then Archive
- Delegate then Archive
- Delegate + CC Executive then Archive
- Needs Executive - Keep Active
- No Action / Review

Executive Visibility:

- Immediate notification
- Decision queue
- Digest unless urgent
- Review queue
- No notification

Notify Method:

- Notion Inbox
- Chat
- Text
- WhatsApp
- Email
- None
- Not Applicable

