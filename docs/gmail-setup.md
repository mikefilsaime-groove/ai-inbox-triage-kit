# Gmail Setup

## Source Accounts

Each connected inbox should have:

- Human label
- Source prefix
- Email address
- Auth status
- Lookback policy

Example:

```json
{
  "prefix": "CEO@COMPANY",
  "email": "founder@example.com",
  "label": "Founder Company Inbox",
  "enabled": true
}
```

## First Run Lookback

For old inboxes, do not attempt to triage years of history.

Recommended bootstrap:

- Inspect last 14 days.
- Archive visible inbox messages older than 14 days.
- Do not delete older messages.

## Search Scope

Use both:

- Visible inbox
- All Mail safety sweep

The All Mail sweep catches important messages hidden by Gmail filters.

