# Notion Decision Inbox Schema

Create a Notion database named `Executive Decision Inbox`.

## Properties

| Property | Type | Purpose |
| --- | --- | --- |
| Thread / Decision | Title | Human-readable decision title with triage ID at the end |
| 00 Triage ID | Text | Stable ID such as `CEO@COMPANY-ALPHA` |
| 00 Source Prefix | Select | Inbox prefix |
| 00 Item Code | Text | Five uppercase letters |
| 00 Send / Status | Select | Waiting, Ready, Archive, Handled, Done, Snoozed |
| 00 Gmail Thread Link | URL | Direct link to original email |
| 01 Subject | Text | Original email subject |
| 02 Last Message Date | Date | Latest relevant message timestamp |
| 03 Last Message From | Text | Sender name and email |
| 04 All Parties | Text | Important people and emails |
| 05 Priority | Select | Urgent, High, Normal, Low |
| 06 Exact Ask | Text | What decision is needed |
| 07 Suggested Reply / Action | Text | Proposed action |
| 08 Executive Action | Select | Respond, Delegate, Archive, Schedule, Need More Info |
| 09 Summary | Text | Short context |
| 10 Why It Matters | Text | Why this was surfaced |
| 12 Source Inbox | Text | Source account |
| 13 Rule Category | Relation/Text | Matched rule |
| 15 Assistant Notes | Text | Rule confidence and processing notes |
| 16 Completed Date | Date | Completion timestamp |
| 17 Internal ID | Text | Stable source thread ID |

## Page Body Order

Use page body content for fast reading:

1. Last Message Date
2. People
3. Decision Brief
4. Suggested Reply / Action
5. Context
6. Why It Matters

Use Notion comments for the executive's instructions.

