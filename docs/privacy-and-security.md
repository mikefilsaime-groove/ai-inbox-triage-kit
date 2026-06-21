# Privacy And Security

## Do Not Commit

Never commit:

- OAuth tokens
- Gmail credentials
- Notion tokens
- Bot tokens
- Phone numbers
- Real inbox addresses
- Real rule databases
- Real family, employee, client, investor, or vendor names

## Local-Only Files

Keep these local:

- `.env`
- `generated/config.json`
- OAuth token folders
- notification bridge settings

## Agent Safety

The agent should be able to read and draft freely, but sending and deletion need stricter rules.

Recommended defaults:

- Archive clear noise automatically.
- Create drafts for delegation unless explicit send authority exists.
- Never send vague inferred replies.
- Never delete ambiguous messages.
- Never forward sensitive personal or financial content without a rule or instruction.

## Sanitized Examples

When teaching, use fictional people and organizations:

- Founder
- Finance Delegate
- Personal Admin
- Operations Lead
- Investor Contact
- Domain Registrar
- Cloud Platform

Do not use live names from a real implementation.

