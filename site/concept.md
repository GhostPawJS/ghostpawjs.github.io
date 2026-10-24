# Concept: GhostPaw

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
5. What do I do now? → one npm install line per package and the GitHub repo, no signup.

## Mechanism
Chosen: a file index. The visitor picks the markdown file their agent outgrows (MEMORY.md, TODO.md, USER.md, SOUL.md, procedures, inbox) and sees the package that holds that state, the shape of one record, the measured numbers and a copyable install command. Speed to first value is one tap and the default state already shows MEMORY.md; proof is the repo numbers; effort is low; honesty risk is low because every row comes from the package READMEs and npm; share value is a link to a chosen file (`?file=todo`).
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
- codex 0.3.0 ships 32.5 KB gzip and imports in about 4 ms on the maintainer box (measured 2026-10-24). https://github.com/GhostPawJS/codex
- questlog 0.5.1 has 326 passing tests and 95.8% line coverage (measured 2026-10-24). https://github.com/GhostPawJS/questlog
- Test counts measured 2026-10-24: grimoire 848, telegram 860, souls 510, email 528, affinity 436, codex 378, questlog 326. https://github.com/GhostPawJS
- codex models five things: belief, dismissal, flag, proximity and lineage; flags are stale, fading, low-trust, single-evidence or gap, computed at read time. https://github.com/GhostPawJS/codex
- questlog models rumor, questline, quest, repeatable quest, unlock, reward and tag; a deadline is a quest with dueAt and a calendar event a quest with a start and end. https://github.com/GhostPawJS/questlog
- codex and email ship command-line binaries; codex 0.3.0 also exports an MCP server. The other five are libraries only. https://www.npmjs.com/package/@ghostpaw/codex
- The files an agent's home directory holds, as one user listed them: SOUL.md, IDENTITY.md, USER.md, MEMORY.md, AGENTS.md and TOOLS.md. V089
- One audit found 26 of 45 auto-saved memories never read once. V106
- OpenClaw's MEMORY.md writer works against a 10,000-character budget. V059

## Axes
| Axis | Market | Voices | Chosen |
| --- | --- | --- | --- |
| Opening | names a framework or platform category P006 P007 P008 | names the files they keep and the wrong fact that spreads V001 V089 V013 | open on the files: "Your agent keeps its state in markdown files" |
| Proof | stars, downloads or benchmarks P001 P002 P004 | wants to read and delete what is stored, distrusts size V010 V016 V053 | measured package facts beside each claim: 0 runtime deps, Node 24+, tests, KB gzip |
| Palette | white or black with one accent P001 P006 P008 P009 | talks about files, drawers and paper records V002 V009 V001 | manila folder paper, carbon ink, stamp red and ledger green |
| Imagery | none or code UI P002 P004 P008 P011 | creators film files and checklists, cards labelled "PERSISTS" V113 V115 | hand-drawn ink illustrations, one per package |
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
3. Filing cabinet: the agent's home directory drawn as a drawer of manila folders, one tab per file, each tab opening onto the package that replaces it. V001 V089 V002 → chosen
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

## Concept
The agent's home directory, filed. The page is a drawer of manila folders. Each tab carries the name of a file a persistent agent keeps (MEMORY.md, TODO.md, USER.md, SOUL.md, skills, inbox) because buyers name those files themselves (V001 V089). Pull a tab and the folder shows the package that keeps that state in SQLite: the record shape typed like a form, the measured numbers as a ledger line, an ink drawing of what the package holds, and the install line ready to copy. The junk drawer (V009) is the before; the labelled folder is the after. Correction and the honest finish are the two answers the voices want (V015 V023), so the memory and task folders say them first. A stamp lands once on the hero: "0 runtime dependencies", the claim no peer makes.

## Spine
1. Hero: names the files (MEMORY.md, TODO.md, USER.md) and says GhostPaw turns them into SQLite tables a Node process opens directly; install line and GitHub link; the stamp; ink drawing of a filing drawer. V001 V089 V002
2. File index: the folder tabs; MEMORY.md open by default; each folder shows package, record shape, numbers and install. V035 V050 V010
3. Why not just markdown: three short notes in the voices' terms: the junk drawer, the wrong fact everyone trusts, the task said done; each answered by a package behaviour. V009 V013 V023
4. If memory worries you: decay, stale flags, correction with lineage, explicit finish; nothing is recalled you cannot read or delete. V107 V106 V016
5. All seven packages: ledger table with version, runtime deps, tests, gzip, links to repo and live demo. V053 V010
6. Footer: GitHub org, npm org, Impressum, Datenschutz.

## Palette
| Role | Color | Source |
| --- | --- | --- |
| ground | #efe4c8 | manila folder stock; the voices call memory files and drawers V002 V009 |
| card | #f8f2e2 | index card inside the folder |
| ink | #1d1a16 | carbon typewriter ink on the forms |
| muted ink | #5a5146 | pencil notes on the card |
| stamp | #a3312a | rubber stamp red for the zero-dependency stamp and "said it was done" V045 V117 |
| ledger | #2e5a4c | ledger green for measured numbers |
| rule | #c9b98f | folder crease and table rules |

## Type
| Role | Family | Source |
| --- | --- | --- |
| display and body | Libre Franklin, Franklin Gothic, Arial, sans-serif | the gothic of typed office forms and folder labels; must stay legible small on a phone and bold on a tab |
| labels and code | Courier Prime, Courier New, monospace | typewriter labels on folder tabs; file names like MEMORY.md are plain text files V002 |

## Form
Folders with a tab on the top edge, square corners, 2px ink borders, no shadows; a folder sits 6px above the drawer line when open. Cards inside are flat paper with a thin rule. Layout: one column on phones with tabs as a horizontal scroller that wraps to two rows; on desktop a wide drawer with tabs across the top and the open folder below. Numbers sit in a ledger line with tabular figures.

## Imagery
| Image | Job | Art direction | Source |
| --- | --- | --- | --- |
| hero drawer | protagonist | ink line drawing of an open filing drawer of manila folders with a faint ghostly paw print on the front tab, flat wash of manila, no people; creators show files and checklists as cards V113 V115 | generated |
| package spots | explanation | seven small ink drawings, one per package, each of the paper object that package replaces: index card of beliefs, checklist, address card, mirror, recipe card, envelope, paper plane, printed page V001 V089 | generated |
| share card | share preview | drawer drawing with the headline and stamp at 1200×630 | rendered from HTML |

## Motion
Moment: on first load the red "0 runtime dependencies" stamp presses onto the hero once (scale from 1.15 to 1 with a 2 degree settle, 400 ms).
Feedback: a tab lifts 6px when chosen; the copy button changes its label to "Copied" for two seconds.
Reduced motion: the stamp is already in place and tabs switch without movement.

## Copy
- Use: "MEMORY.md", "junk drawer", "wrong fact", "said it was done", "zero runtime dependencies" V001 V009 V013 V045
- Use: "read and delete" V010
- Avoid: "memory layer", "seamless", "supercharge", "revolutionize", "never forgets" V036 V111
- Avoid: "AI-powered", "enterprise-grade", "Built for production." P001 P007
- Plain, second person, short sentences; state limits next to claims (Node 24+, zero runtime dependencies, no CLI in five). V017 V021
- Never quote voices as customers; say what developers commonly report in our words, the way they describe their own setups. V050 V051

## Changelog
- 2026-10-24: website is being archived (lfm replaces it); the page now covers seven libraries, all with zero runtime dependencies.
- 2026-10-24: codex 0.3.0 and telegram 0.5.0 were published during the build; numbers, dependency count (seven of eight) and CLI facts updated from npm and the scorecard.
- 2026-10-24: first concept from the batch of 2026-10-24 (120 voices, 12 peers).
- 2026-10-24: "TODO.md" moved out of the Use list; it stays on the page as a code file name, because the compiler reads the bare word TODO in prose as placeholder text.
