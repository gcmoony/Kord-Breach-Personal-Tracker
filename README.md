# KORD Breach Personal Tracker

Track your reward and document progress for the Escape From Tarkov KORD Breach
event.

## Features

### Document Inventory

- Tracks 8 document types — Financial documents, PMC personnel files, Project
  documentation, Blueprints and technical documentation, Test documentation,
  User documentation, Medical documents, and Classified (universal) — each with
  its default map locations.
- Adjust how many of each document you own with +/- steppers. The total
  documents in your inventory is shown in the progress header.

### Required Documents

- Automatically calculates how many of each document you still need to unlock
  all remaining tracked rewards.
- Shows your current count vs. required count, a progress bar, and how many more
  are needed for each type.
- Ignores rewards you've already unlocked or marked as not tracking.

### Battle Pass Rewards

- Comes pre-loaded with all 54 Battle Pass rewards across 12 pages.
- Each reward card shows its page, what documents it costs, and whether you have
  enough (with color-coded requirement chips).
- **Claim** a reward when you have enough documents — this deducts the cost from
  your inventory and marks it as unlocked.
- **Mark unlocked** to flag a reward you already earned in-game without spending
  tracked documentos — and **Lock** it again to undo. If you claimed a reward
  and lock it, the documents are refunded.
- **Stop tracking / Track again** to hide rewards you don't care about — hidden
  rewards don't count toward required documents or overall progress.
- **Edit** any reward to change its name, page, or document costs.

### Overall Progress

- Header stamp and progress bar show the percentage and count of rewards you've
  unlocked out of the total tracked rewards.

### Reward Management

- **Add reward** button opens a form to create custom rewards with a name,
  optional page number, and any number of document requirements.
- Add or remove requirement rows as needed, then save. Cancel, click outside, or
  press Escape to close without saving.

### Filtering

- Filter rewards by **All, Locked, or Unlocked**.
- Toggle **Show not tracking** to reveal or hide rewards you've stopped
  tracking.

### Data Management

- **Export data** downloads a dated JSON backup of your entire ledger.
- **Import data** loads a previously exported JSON file after validating its
  format and confirming overwrite.
- **Reset all data** clears inventory and rewards back to defaults after
  confirmation.
- All data is stored privately in your browser's local storage and a warning is
  shown if saving is blocked (e.g., private/incognito mode).

## Getting Started

No build step — just open `index.html` in a browser, or serve the folder with
any static server:

```bash
npx serve .
# or
python -m http.server
```

Inventory starts at zero with all rewards locked and no document costs set —
edit rewards or add your own to match the Battle Pass costs. Previously,
defaults were based on
[this reddit breakdown](https://www.reddit.com/r/EscapefromTarkov/comments/1vj6gi0/discussion_a_breakdown_of_the_battle_pass/).

## Suggestions

Oh yeah, it's AI coded. Everyone else uses it in their workflows, so I might as
well learn how to use it too.

As always, I am open to suggestions on anything and everything. Just submit an
issue (or a pull request if you got something you've whipped up). Thanks!
