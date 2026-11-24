# Trial Log — Two Lines to Your Past Self

Competition: `u-suga-two-lines-to-your-past-self-f36c83ca` ("Two Lines to Your Past Self")
Gate: 1–280 characters, exactly 2 lines. Line 1 = warning to past self about one specific moment (1 sentence). Line 2 = 1 sentence: why the moment matters + what changed because of it.
Deadline: 26 Nov 2026 16:40 WITA. Prize: $2.

## Candidates

| # | Text (2 lines) | Chars | Dup-check | Verdict |
|---|---|---|---|---|
| 1 | Don't lend him your car on Friday. / He brings it back with an empty tank and a dent you only spot on Monday, and after that you never lend anyone anything again. | 160 | max 0.39 (vs "Don't sell Grandad's watch" — same "don't do X" shape, different moment + mechanism: borrow-damage vs sell-heirloom) — PASS | **SELECTED** |
| 2 | Don't wear the new shoes to the wedding. / You spend the whole reception limping, and in every photo the dress is perfect and your face is not. | 141 | — | Alternate, held in reserve |

Why candidate 1 won: concrete moment (Friday, the car) + real cause-and-effect (empty tank + dent spotted Monday → permanent behaviour change, "never lend anyone anything again"). Avoids saturated families: "don't send that 2 a.m. text/email" (~15), "don't delete voicemail" (~5), "don't say X at the kitchen table" (~5), "don't say yes to transfer/quit", "don't say 'I'm fine'". Zero-hit words checked: throw, lend, wear, buy, bet, bakery, concert, shoes, wedding, umbrella.

## Trials

| Trial | What was run | Result |
|---|---|---|
| T1 | `node main.ts` → writes entry to `/output/entry.txt` | Entry written, 160 chars, exactly 2 lines — PASS |
| T2 | Character count re-verified against the gate (1–280) | 160 — PASS |
| T3 | `makefun.mjs bundle` (v1) | See bundle notes below |
| T4 | `makefun.mjs check` on v1 bundle | See check notes below |

## Status

- Entry text: FINAL (160 chars, 2 lines, exact text as above).
- Repo: main.ts + README.md + LICENSE + trial-log.md + .makefun/owner.json.
- Bundle: `bundle-3-v1.tar.gz` — pending check result.
- Check: pending.
