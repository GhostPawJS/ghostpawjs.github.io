# Concept: GhostPaw

## Diagnosis
The owner reviewed the live paper page on 2026-10-24 and rejected the visual direction: manila, ink and rubber stamps read as an office archive, not as GhostPaw. What stays strong: the file-to-package index, the measured numbers, the plain maintainer copy and the honesty notes. What changes: palette, type, form, imagery and motion move to a dark spectral identity built on the name itself, a ghost wolf. The visitor still comes to find which package replaces which file, so the index stays the mechanism.

Portal review on 2026-10-24, after every library moved to its own subdomain (codex.ghostpaw.dev and the rest). The tabbed index answered "which package replaces my file" but showed one package at a time, so six of seven stayed hidden behind tabs, and nothing said how the seven work together or what they give an agent that runs without anyone watching (V030 V073). What stays: the dark scope, the wolf, the file names as the way in, the measured table, the plain notes. What changes: all seven are visible at once as rows with one install line each; a new section shows one afternoon of an unsupervised agent passing data through all seven, plus the shape they share; the objection section widens from memory to an agent working alone.

## Voices
- Persistent agents keep their state in a handful of named markdown files, and people list them by name like rooms in a house: SOUL.md, USER.md, MEMORY.md, AGENTS.md, TOOLS.md. V001 V002 V089 V035
- The memory file grows every session and turns into a "junk drawer"; nobody prunes it, so stale lines keep steering the agent. V001 V006 V009 V086 V005
- The fear that names the problem best: one agent saves a wrong fact and every other agent trusts it. V008 V013 V014 V015 V018
- What buyers ask for is the ability to read, correct and delete what the agent believes, and to know where a belief came from. V010 V011 V016 V034
- Forgetting and correcting are called the hard half; recall is the easy part. V015 V076 V078 V091 V094
- Tasks fail in a different way: the agent says it is done when it is not, and people build hooks and second reviewers to catch it. V022 V023 V025 V045 V069 V116 V117
- The usual task store is a TODO.md with Todo, Doing and Done headings, or PROGRESS.md handoffs between sessions. V044 V050 V051 V052 V084
- Two agents pick the same task because claiming is not atomic, and scheduled heartbeats report success without the work. V027 V071 V072 V073 V075
- A strong minority distrusts memory altogether: turn it off, keep agents stateless, write documentation instead. V037 V042 V106 V107
- Size and sprawl are an objection of their own: an issue tracker for agents at 240,000 lines draws scorn. V053 V054
- Every line of memory costs tokens on every turn, so small and selective beats big and complete. V009 V077 V082 V090

## Buyer
A Node.js developer who runs one or more persistent agents (a coding agent, a bot on a box, a harness they wrote) and keeps the agent's state in markdown files today. They arrive from a link in a thread about MEMORY.md rot or an agent that claimed it was done (V006 V023 V045), already compare against plain files, Beads and the MCP memory server (V055 V120 V064), and want something they can open and read. To try it they must believe it is small, local and inspectable: no service, no account, no framework (V010 V016 V053). The hesitation most likely to stop them is that memory itself makes agents worse (V107 V106), so the page shows correction, decay and deletion before recall. This page serves the whole org: it routes each file the visitor keeps to the package that replaces it.

## Decision path
1. Is this about the files my agent keeps? → first screen names those files and says what GhostPaw turns them into.
2. Which package replaces which file? → the file index: pick a file, see the package, what one row records, and the install line.
3. Is it small and honest? → measured numbers beside each package: runtime dependencies, Node floor, tests, gzip size.
4. Will memory make my agent worse? → the objection answered where the visitor decides: beliefs decay, get flagged stale and get corrected with lineage; tasks need an explicit finish.
5. How do they work together? → one illustrated run through all seven, and the shape every package shares (node:sqlite, MCP server, CLI, Agent Skill).
6. What do I do now? → one npm install line per package, its page and its source, no signup.

## Mechanism
Chosen: a file index, all seven rows visible at once (until 2026-10-24 it was a tab strip). The visitor finds the markdown file their agent outgrows (MEMORY.md, TODO.md, USER.md, SOUL.md, procedures, inbox) and sees the package that holds that state, the shape of one record, the measured numbers and a copyable install command. Speed to first value is one tap and the default state already shows MEMORY.md; proof is the repo numbers; effort is low; honesty risk is low because every row comes from the package READMEs and npm; share value is a link to a chosen file (`?file=todo`).
Rejected: a live in-browser demo of a library: the packages need Node 24's node:sqlite, which a browser does not have, so it would be a mock.
Rejected: a comparison table against mem0, Beads and the MCP server: the market already argues in tables (P001 P002), and it would rest on claims about other projects rather than our own measured facts.
Rejected: a plain package list: it answers "what exists" but not "which one replaces the file I keep", which is the question the voices ask (V001 V002).

## Offer
Product: seven open-source npm packages under @ghostpaw that give an agent durable local state (memory, tasks, contacts, identity, procedures, email, Telegram)
Price: free, MIT licence
Delivery: `npm install @ghostpaw/<package>` into any Node.js 24+ project, immediately; the database is a SQLite file the caller opens

## Facts
- Seven libraries are maintained under @ghostpaw: affinity, codex, email, grimoire, questlog, souls, telegram (website is being archived; lfm replaces it). https://www.npmjs.com/org/ghostpaw
- All seven declare zero runtime dependencies on npm (telegram dropped grammy and marked in 0.5.0). https://www.npmjs.com/package/@ghostpaw/telegram
- Every package requires Node.js 24 or newer and uses the built-in node:sqlite module. https://github.com/GhostPawJS/codex
- codex 0.3.2 ships 31.5 KB gzip and imports in about 4 ms on the maintainer box (measured 2026-10-24). https://github.com/GhostPawJS/codex
- questlog 0.6.1 has 352 passing tests and 96.0% line coverage (measured 2026-10-24 from the v0.6.1 tag; 0.6.2 changes only the version string and homepage). https://github.com/GhostPawJS/questlog
- Test counts measured 2026-10-24: grimoire 848, telegram 860, souls 510, email 528, affinity 436, codex 378, questlog 326. https://github.com/GhostPawJS
- codex models five things: belief, dismissal, flag, proximity and lineage; flags are stale, fading, low-trust, single-evidence or gap, computed at read time. https://github.com/GhostPawJS/codex
- questlog models rumor, questline, quest, repeatable quest, unlock, reward and tag; a deadline is a quest with dueAt and a calendar event a quest with a start and end. https://github.com/GhostPawJS/questlog
- All seven READMEs document a local MCP server started with `npx -y @ghostpaw/<name> mcp`; codex and email also ship command-line binaries. https://github.com/GhostPawJS
- The files an agent's home directory holds, as one user listed them: SOUL.md, IDENTITY.md, USER.md, MEMORY.md, AGENTS.md and TOOLS.md. V089
- One audit found 26 of 45 auto-saved memories never read once. V106
- OpenClaw's MEMORY.md writer works against a 10,000-character budget. V059

## Axes
| Axis | Market | Voices | Chosen |
| --- | --- | --- | --- |
| Opening | names a framework or platform category P006 P007 P008 | names the files they keep and the wrong fact that spreads V001 V089 V013 | open on the files: "Your agent keeps its state in markdown files" |
| Proof | stars, downloads or benchmarks P001 P002 P004 | wants to read and delete what is stored, distrusts size V010 V016 V053 | measured package facts beside each claim: 0 runtime deps, Node 24+, tests, KB gzip |
| Palette | white or stone with one accent P001 P006 P008 P009 | lives in terminals and dark editors; talks about ghost vectors and stale context V107 V120 V033 | near-black void with spectral cyan, a violet afterglow and an alarm rose used only for flags |
| Imagery | none or code UI P002 P004 P008 P011 | films terminals and dependency graphs in the terminal V107 V120 | generated spectral line art of a ghost wolf and its paw trail; no UI screenshots |
| Mechanism | install docs or hosted SDK P001 P008 | asks which tool replaces which file V035 V050 V051 | a file index that maps each file to a package |
| Tone | confident product claims P001 P006 P009 | plain, wary of hype, likes boring choices V017 V021 V107 | plain maintainer notes that state limits |

## Sparks
- The agent's home directory named file by file: MEMORY.md, USER.md, SOUL.md, TODO.md. V001 V002 V089 V050
- "Junk drawer": the memory file that only grows. V001 V009
- The wrong fact every agent trusts. V008 V013 V015
- "Said it was done": the task that was never finished. V023 V025 V045

## Directions
1. Memory layer: a dark hero that calls GhostPaw the memory layer for agents with an architecture diagram. V036 → struck: first direction, and it matches the market baseline opening (P001 P006).
  pushed: an animated graph of agents writing to one store; still a framework page with a different name.
2. Benchmarks first: open on recall speed numbers against other stores. V031 → struck: second direction, and benchmark proof is what P001 already does.
  pushed: a live leaderboard; it would rest on other projects' numbers we cannot keep current.
3. Filing cabinet: the agent's home directory drawn as a drawer of manila folders, one tab per file, each tab opening onto the package that replaces it. V001 V089 V002 → struck: built and shipped, then rejected on owner review on 2026-10-24; paper and stamps say archive, not GhostPaw.
  pushed: the visitor pulls the folder for the file they keep; inside are the record shape, the numbers and the install line, typed like a form.
4. Junk drawer audit: a messy MEMORY.md on screen that the visitor sorts line by line into beliefs, tasks and contacts. V009 V006 → struck: slows first value; sorting a fake file takes a minute before any answer.
  pushed: a drag-and-drop sort game; charming, but the answer arrives late and needs invented sample lines.
5. Wrong fact relay: a strip showing one wrong fact passed between three agents, then caught by a flag. V013 V015 V008 → struck: only fits codex; the org page must route to seven packages.
  pushed: kept as the codex page's own territory.
6. Stamp desk: every claim on the page gets a rubber stamp, VERIFIED or DONE?, from the repo numbers. V117 V045 → struck: the stamp alone works with any product swapped in; it is a theme, not a mechanism.
  pushed: the stamp survives as the single motion moment of the chosen direction.
7. Ghost tour: a ghost walks through an empty house, each room a package. V089 → struck: merely playful where the voices are tired and practical (V107 V017).
  pushed: an illustrated map; pretty, but it hides the install line behind a story.
8. Plain ledger: a single typed table of seven packages with numbers. V010 → struck: matches the market baseline (neutral docs, P004 P011) and loses the file-to-package question.
  pushed: becomes the numbers strip inside the chosen direction.
9. Ghost on the scope: the file index from direction 3 on a dark terminal scope where the GhostPaw wolf appears in cyan light; each file tab opens a pane. V107 V120 V001 → struck: shipped, then the portal review on 2026-10-24 found the tabs hid six of seven packages and never showed how they combine.
  pushed: the wolf resolves under one scan line on load; its paw trail leads into the list of all seven packages; flags and refusals glow alarm rose only where the library itself would raise them.
10. Ghost on the scope, opened up: the same scope and wolf, but the index is seven rows on one screen, each with the file, what it gives an agent working alone and one install line; below, one afternoon of an unsupervised agent walks through all seven in order. V001 V089 V030 V073 V010 → chosen
  pushed: each run step is tagged with the package that writes it, so the visitor sees which file a step would have been in before.

## Concept
The agent's home directory, haunted. GhostPaw is the ghost that keeps an agent's state between runs, so the page is a dark scope where that ghost shows up: a spectral wolf drawn in cold cyan light resolves on the hero while a scan line passes, the way a terminal draws a new screen (V107 V120). Below it the index keeps the job the voices gave it: one row per file a persistent agent keeps (MEMORY.md, TODO.md, USER.md, SOUL.md, skills, inbox, chat log), named the way buyers name them (V001 V089), all seven on one screen. Each row names the package that keeps that state in SQLite, what it gives an agent nobody is watching (V030 V073), the record shape and one install line. Then the ghost walks: one afternoon of an agent running a renewal desk alone passes through all seven in order, each step tagged with the package that writes it, so the visitor sees how they fit without any package importing another. The paw-print trail returns where the page lists all seven packages: a ghost leaves tracks you can follow, which is the point of state you can read and delete (V010). Correction and the honest finish (V015 V023) are still said first in the memory and task panes. The "0 runtime dependencies" claim no peer makes sits on the hero as a HUD readout.

## Spine
1. Hero: names the files (MEMORY.md, TODO.md, USER.md, SOUL.md) and says GhostPaw files that state as SQLite records you can read, correct and delete; codex install line; links to the libraries and to how they fit; the zero-dependency readout; the spectral wolf. V001 V089 V002
2. Libraries: seven rows, one per file, each with package and version, what it gives an agent that runs alone, what one record holds, one install line, and links to its page, its docs and its source. V035 V050 V010 V030
3. How they fit: one afternoon of an agent running a renewal desk on its own, step by step through telegram, affinity, codex, questlog, email, grimoire and souls; marked as an illustration; then the shape all seven share. V073 V032 V017
4. If an agent working alone worries you: what each package refuses or keeps as history; every row readable with sqlite3. V107 V106 V016 V065
5. All seven side by side: the paw trail above the measured table. V053 V010
6. Footer: the seven libraries, GitHub org, npm org, Impressum, Datenschutz.

## Palette
| Role | Color | Source |
| --- | --- | --- |
| void | #04070b | the night behind the ghost; the owner asked for a deep near-black ground, and every peer page is white or stone P002 P004 P006 |
| panel | #0a1119 | a terminal pane one step above the void; creators film agents in terminals V107 V120 |
| rule | #1d2c3c | pane borders and the faint HUD grid |
| ghost | #e3edf5 | spectral white for body text, cold not cream |
| haze | #93a5b9 | secondary text, the glow a ghost leaves |
| spectral | #62e6f2 | the ghost's cold cyan: primary actions, available, measured values |
| wraith | #b39dff | the afterglow: in progress, superseded, structure lines |
| alarm | #ff7aa6 | flags, refusals, blocked and overdue |
| ward | #7af0b4 | confirmed and done |

## Type
| Role | Family | Source |
| --- | --- | --- |
| display | Tektur, Bahnschrift, Arial Narrow, sans-serif | a squared, width-variable display face that reads like HUD lettering and stretches from condensed tabs to wide headlines; one family carries the GhostPaw name |
| body | system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif | the reader's own interface sans, which stays readable in long paragraphs on a dark ground and costs no download, so the two loaded faces carry the identity |
| code and file names | Martian Mono, Cascadia Mono, Consolas, monospace | crisp, slightly narrow mono for install lines, calls and file names like MEMORY.md V001 V002 |

## Form
Panes, not cards: one terminal-like pane per open file with a 1px rule border, square corners and a 12px chamfer cut from the top right corner like a HUD frame; no drop shadows, glow only on the spectral accent and only where something is active. The page ground is plain void with one faint cyan glow at the top right. Tabs are file names in mono sitting on one baseline; the chosen tab gets a cyan underline with a soft glow. Layout stays: one column on phones with tabs wrapping into a grid; on desktop the hero splits copy and art, the index is one wide pane under its tabs. Numbers sit in rows with tabular figures in spectral cyan.

## Imagery
| Image | Job | Art direction | Source |
| --- | --- | --- | --- |
| hero ghost wolf | protagonist | a wolf head in profile drawn in fine cyan light filaments with a violet afterglow dissolving into particles, on pure black so it blends into the void; no people, no logos; creators show terminals and graphs on dark screens V107 V120 | generated |
| paw trail | atmosphere | four glowing paw prints walking up and to the right, the oldest fading violet, the newest bright cyan, on pure black V033 | generated |
| share card | share preview | the wolf art on the right with the headline set in the display face at 1200×630 | generated art, rendered from HTML |

## Motion
Moment: on first load a single cyan scan line sweeps down over the hero art once (900 ms) and the art resolves from 0 to full opacity behind it, like a ghost appearing on a scope.
Feedback: the chosen tab gets a glowing underline; copy buttons read "Copied" for two seconds; focus rings are cyan.
Reduced motion: the art is shown at once, no sweep; everything else changes in place.

## Copy
- Use: "MEMORY.md", "junk drawer", "wrong fact", "said it was done", "zero runtime dependencies" V001 V009 V013 V045
- Use: "read and delete" V010
- Avoid: "memory layer", "seamless", "supercharge", "revolutionize", "never forgets" V036 V111
- Avoid: "AI-powered", "enterprise-grade", "Built for production." P001 P007
- Plain, second person, short sentences; state limits next to claims (Node 24+, zero runtime dependencies, no CLI in five). V017 V021
- Never quote voices as customers; say what developers commonly report in our words, the way they describe their own setups. V050 V051

## Changelog
- 2026-10-24: portal chrome pass. Version badges and footer row shared with the seven library pages; the ruled grid on the page ground was replaced by one radial glow (lfm 0.1.9 rejects ruled ground textures).
- 2026-10-24: versions and numbers moved to npm latest (codex 0.3.2, questlog 0.6.2, affinity 0.3.0, souls 0.3.0, grimoire 0.3.0, email 0.4.0, telegram 0.6.0); each pane links its new landing page (/agent-contacts/, /agent-identity/, /agent-skills/, /agent-email/, /agent-telegram/); the telegram pane no longer says files are stored on receipt, because DEFAULTS.autoDownload is false in 0.6.0.
- 2026-10-24: visual rebuild after owner review: the paper and stamp identity is replaced by a dark spectral one (void, spectral cyan, wraith violet, alarm rose; Tektur, system sans, Martian Mono; generated ghost-wolf art). Content, mechanism, numbers and copy rules kept; direction 3 struck and direction 9 chosen.
- 2026-10-24: website is being archived (lfm replaces it); the page now covers seven libraries, all with zero runtime dependencies.
- 2026-10-24: codex 0.3.0 and telegram 0.5.0 were published during the build; numbers, dependency count (seven of eight) and CLI facts updated from npm and the scorecard.
- 2026-10-24: first concept from the batch of 2026-10-24 (120 voices, 12 peers).
- 2026-10-24: "TODO.md" moved out of the Use list; it stays on the page as a code file name, because the compiler reads the bare word TODO in prose as placeholder text.
- 2026-10-24: portal review: the tab drawer became seven visible rows with one install line each, a "how they fit" section walks one unsupervised run through all seven, the worry section covers an agent working alone, and every package links its own subdomain; direction 9 struck, direction 10 chosen; email 0.4.1 and telegram 0.6.2 numbers.
