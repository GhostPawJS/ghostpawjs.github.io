# Concept: GhostPaw Questlog

## Voices
- The complaint that defines the category: the agent said it was done, and it was not. V002 V006 V019 V034 V036 V037
- People build second reviewers, hooks and runnable specs just to check a "done". V001 V019 V036 V045 V060 V061
- The common task store is a TODO.md with three headings, Todo, Doing and Done, or a DONE.md and HANDOFF.md beside it. V017 V025 V026 V044
- Work gets forgotten in place: the same lead tops the list four nights running, backlog work prompted on Saturday is still untouched on Monday. V008 V012 V013
- Dependencies are not enforced: a teammate claimed a task whose blocker was still open; claiming is not atomic. V038 V039 V010
- Heartbeats and scheduled jobs report success without doing the work in HEARTBEAT.md. V040 V042 V009
- Sessions lose track of which task they are on. V035 V041 V046
- Agent issue trackers draw scorn for size: Beads at 240,000 lines; the measured context saving was small. V028 V029 V062
- Todo lists outgrow files and move to real trackers. V050 V049 V053
- Creators explain the shift from to-do lists to task lists with dependencies. V063 V066 V067 V065

## Buyer
A Node.js developer whose agent keeps its work in TODO.md, PROGRESS.md or HEARTBEAT.md and who has been burned by a "done" that was not (V025 V006 V040). They come from a thread about agents grading their own homework or from the GhostPaw home page, compare against the markdown file, Beads, Backlog.md and Claude Code's own task list (V030 V059 P001 P003), and need to believe the store will refuse a hollow finish and keep blocked work blocked (V019 V038). The hesitation most likely to stop them: agent task trackers become huge (V028 V029), so size and dependencies sit next to the claim.

## Decision path
1. Is this the "said it was done" problem? → hero names it and shows a quest that cannot finish without a written outcome.
2. How is it different from TODO.md? → the board: the same three headings become quests whose state is derived, and finishing one unlocks the next.
3. What about deadlines and recurring work? → due soon, overdue and repeatable quests on the same board (RRULE).
4. Is it small? → 0 runtime dependencies, Node 24+, 326 tests, 42.6 KB gzip, about 4.4 ms import.
5. How do I start? → install line, quick start code, GitHub and the live demo.

## Mechanism
Chosen: a quest board with four quests from the README example (Vendor Renewal). The visitor starts and finishes quests; the Finish button needs an outcome line and refuses an empty one with questlog's own message ("Quest outcome must not be empty."); finishing "Collect redlines" unlocks the blocked quest; a "+7 days" switch shows due soon and overdue. Speed: the board is visible on load with markers already set; proof: every rule mirrors the library source and the exact call shows under each move; effort: two taps; honesty: labelled as a browser walk-through of the documented rules, the live demo linked for the real library; share value: low, so the share card carries the headline.
Rejected: a kanban drag board: it is the visual every peer already has (P005 P011) and drag-to-Done is exactly the hollow finish voices complain about.
Rejected: a comparison table against Beads and Backlog.md: claims about other projects, and size is better shown as our own number.
Rejected: a scheduled-run demo: needs a server and a clock; only text would remain.

## Offer
Product: @ghostpaw/questlog, an open-source task and calendar engine for Node.js on SQLite
Price: free, MIT licence
Delivery: `npm install @ghostpaw/questlog` into a Node.js 24+ project; tables are created in a node:sqlite database the caller opens

## Facts
- questlog 0.5.1 is on npm with zero runtime dependencies and requires Node.js 24+ for node:sqlite. https://www.npmjs.com/package/@ghostpaw/questlog
- Seven concepts: rumor, questline, quest, repeatable quest, unlock, reward, tag. https://github.com/GhostPawJS/questlog
- finishQuest takes an outcome string and throws "Quest outcome must not be empty." on a blank one. https://github.com/GhostPawJS/questlog/blob/main/src/assert_non_empty.ts
- A resolved quest cannot be resolved again or restarted. https://github.com/GhostPawJS/questlog/blob/main/src/quests/resolve_quest.ts
- An unlock keeps quest B out of listAvailableQuests and in listBlockedQuests until quest A resolves with success; startQuest itself does not check unlocks, so blocking is a read-side view. https://github.com/GhostPawJS/questlog
- Markers are plain symbols from the markers namespace: "!" available, "?" incomplete (in progress or blocked), "?" turn-in pending; a done quest without a reward has no marker. https://github.com/GhostPawJS/questlog
- The board on the page replays a real run of questlog 0.5.1 on 2026-10-24 with a fixed clock: the empty-outcome error, the unlock, due soon and overdue at +7 days. https://github.com/GhostPawJS/questlog#quick-start
- Availability, blocking, deferral and overdue are derived at read time, never stored as flags. https://github.com/GhostPawJS/questlog
- A deadline is a quest with dueAt; a calendar event is a quest with a scheduled start and end; repeatable quests use RRULE. https://github.com/GhostPawJS/questlog
- Twelve tools for agents, among them review_questlog, capture_rumor, shape_work, run_quest and reward_work. https://github.com/GhostPawJS/questlog
- 326 tests with 96.0% line, 89.4% branch and 96.1% function coverage, measured 2026-10-24. https://github.com/GhostPawJS/questlog
- dist is 42.6 KB gzip and imports in about 4.4 ms on the maintainer box, measured 2026-10-24. https://github.com/GhostPawJS/questlog
- A TODO.md with three headings, Todo, Doing and Done, is a common agent task store. V025

## Axes
| Axis | Market | Voices | Chosen |
| --- | --- | --- | --- |
| Opening | "team of agents", "structure for AI", "really does things" P002 P004 P012 | "said it was done", "grade its own homework" V002 V006 V019 | open on the hollow done and the outcome line that stops it |
| Proof | stars, waitlists, app screenshots P001 P004 P011 | wants evidence and enforced blockers V019 V038 | the board refuses what the library refuses; measured numbers |
| Mechanism | MCP server, CLI or hosted app P006 P007 P008 | keeps TODO.md and HEARTBEAT.md files V025 V040 | a quest board with outcome-gated finish and unlocks |
| Palette | white or black with one accent P002 P004 P006 | paper lists, three headings, handoff notes V025 V044 | manila stock, carbon ink, stamp red for blocked and overdue, ledger green for done |
| Imagery | screenshots or none P001 P003 P008 | creators film checklists and boards V063 V064 | one hand-drawn ink drawing of a quest card; the rest is the live board in HTML |
| Tone | bold claims P004 P012 | tired of agents claiming success V034 V037 | plain, states what it refuses |

## Sparks
- "Said it was done": the finish nobody checked. V002 V006 V019 V034
- TODO.md with Todo, Doing, Done. V025 V026 V017
- The blocker that was still open. V038 V039
- The same item on top of the list, night after night. V008 V013

## Directions
1. Agent team: hero says your agents become a team that ships while you sleep. V007 → struck: first direction; it is the market opening (P004 P011).
  pushed: a dashboard of busy agents; any peer drops in.
2. Kanban board: drag cards from Todo to Done. V025 → struck: second direction; peers already show boards (P005), and drag-to-Done is the hollow finish.
  pushed: animated lanes; same picture, nicer.
3. Outcome-gated board: quests finish only with a written outcome and blocked quests stay blocked until their prerequisite succeeds. V019 V038 V006 → chosen
  pushed: the Finish button holds an outcome field; finishing one quest lifts the stamp off the next; time jumps a week to show overdue.
4. TODO.md converter: paste a TODO.md and see it become quests. V025 V026 → struck: needs parsing guesses and a real library call the browser cannot make.
  pushed: kept as the board's starting text, three headings mapped to states.
5. Heartbeat log: a cron log where one run claims success and questlog shows it unfinished. V040 V042 → struck: depends on a scheduler questlog does not ship.
  pushed: mentioned as a use in the plain notes.
6. Receipt printer: each finished quest prints a receipt with its outcome. V045 → struck: a theme any task tool could wear.
  pushed: the outcome line keeps a receipt edge.
7. Quest log game screen: full RPG styling with gold and XP. V063 → struck: merely playful; the voices are tired, not looking for a game.
  pushed: only the plain marker symbols "!" and "?" remain, as the markers namespace prints them.
8. Plain README page. V017 → struck: matches the market baseline (repo pages P001 P003 P008).
  pushed: the README stays one click away.

## Concept
Done needs an outcome. The page centres on a small quest board taken from the README's Vendor Renewal example. Each quest is a card with questlog's markers: "!" available, "?" incomplete while in progress or blocked. Pressing Finish opens an outcome line; leave it blank and the card stamps back the library's own refusal, "Quest outcome must not be empty." (V019 V006). Write one and the card is filed as done with its outcome, and the quest that waited on it loses its red "blocked" stamp and joins the available list (V038). A switch jumps seven days: a due date turns overdue in stamp red (V008 V013). Under every move the exact call appears. The TODO.md with three headings (V025) is the before, shown as typed text beside the board.

## Spine
1. Hero: "Your agent said it was done. Was it?" Subline: questlog will not finish a quest without a written outcome and keeps blocked work blocked; install line, GitHub, live demo; the stamp "0 runtime dependencies"; ink drawing of a quest card. V002 V006 V019
2. The board: four quests, Finish with outcome, unlock, +7 days; the call under each move. V038 V008
3. From TODO.md: the three headings mapped to derived states, plus rumors for work not yet shaped. V025 V026 V044
4. Deadlines and repeats: dueAt, scheduled windows, RRULE repeatable quests. V009 V040
5. Numbers: 0 runtime deps, Node 24+, 326 tests, 96.0% lines, 42.6 KB gzip, about 4.4 ms import, 12 tools. V028 V029
6. Start: install, quick start, GitHub, README, live demo, back to GhostPaw home.
7. Footer: Impressum, Datenschutz.

## Palette
| Role | Color | Source |
| --- | --- | --- |
| ground | #efe4c8 | manila folder stock; task lists kept as paper-like files V025 V044 |
| card | #f8f2e2 | the quest card |
| ink | #1d1a16 | typed titles |
| muted ink | #5a5146 | objectives and labels |
| stamp | #a3312a | blocked, overdue and refused stamps; the hollow done V006 |
| ledger | #2e5a4c | finished with outcome |
| rule | #c9b98f | card rules and board lines |

## Type
| Role | Family | Source |
| --- | --- | --- |
| display and body | Libre Franklin, Franklin Gothic, Arial, sans-serif | typed-form gothic; card titles must read small on a phone |
| labels and code | Courier Prime, Courier New, monospace | typed TODO.md text and code calls; agents keep tasks as plain text files V025 |

## Form
Quest cards are paper cards with square corners, a 2px ink border and no shadows, laid on a ruled board. Stamps are rotated 3 degrees, outlined in stamp red. One column on phones with the call below each card; on desktop a two-column board with the TODO.md text beside it.

## Imagery
| Image | Job | Art direction | Source |
| --- | --- | --- | --- |
| hero quest card | protagonist | ink line drawing of a paper task card with a big exclamation mark and an empty outcome line, a faint ghostly paw resting on a rubber stamp beside it, manila wash; creators film checklists V063 V064 | generated |
| share card | share preview | the card drawing with the headline at 1200×630 | rendered from HTML |

## Motion
Moment: when a quest finishes, the "blocked" stamp on the next quest lifts and fades (300 ms).
Feedback: a blank outcome shakes the field 4px once and shows the refusal; the Finish button reads "Filed" afterwards.
Reduced motion: no shake or lift; text and stamp states change in place.

## Copy
- Use: "said it was done", "outcome", "blocked", "overdue" V002 V006 V038
- Show TODO.md as a file name in code, never as a bare word, so it does not read as a placeholder. V025
- Use: "grade its own homework" V002
- Avoid: "team of agents", "really does things", "sanity for you" P002 P004 P012
- Avoid: "autonomous", "set it and forget it", "ships while you sleep" V066
- Plain, second person, short sentences; state limits: Node 24+, no scheduler or MCP server in the package, an outcome line is text and not a test; blocked means left out of the available list, not a refused call. V019 V045
- Never present voices as customers; describe what developers report in our words. V034 V036

## Changelog
- 2026-10-24: TODO.md moved from the Use phrases to a code-only rule; the bare word reads as a placeholder.
- 2026-10-24: page moved to /agent-tasks/; numbers from EXCELLENCE.md (96.0% lines, 4.4 ms import); markers as plain "!" and "?"; blocked described as a read-side view after a real run showed startQuest does not check unlocks.
- 2026-10-24: first concept from the batch of 2026-10-24 (67 voices, 12 peers).
