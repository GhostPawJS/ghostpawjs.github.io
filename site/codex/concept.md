# Concept: GhostPaw Codex

## Voices
- The fear that recurs most: one agent saves a wrong fact and every other agent treats it as ground truth. V008 V012 V013 V014 V015 V019
- Buyers want to read, correct and delete what the agent believes, one line at a time, not debug an embedding. V010 V016 V022
- They ask where a memory came from and which agent wrote it; provenance and expiry are named as the real product. V011 V019 V026 V038
- Forgetting is "the hard half": recall is easy to test, noticing a fact was withdrawn is what goes wrong. V015 V047 V049 V059 V060
- MEMORY.md grows into a "junk drawer" and stale lines start contradicting new ones. V001 V006 V009 V054 V005
- Every remembered line is paid for again on every turn. V009 V048 V053 V058
- A loud minority says turn memory off and keep agents stateless, because unread memories pile up. V029 V066 V067
- Many workarounds are plain files with dates and owners: "short dated sentences", "delete what is stale". V010 V022 V017
- Creators explain memory as files that persist across compaction and sessions. V068 V074 V075

## Buyer
A Node.js developer running a persistent agent whose MEMORY.md has started to lie: stale decisions, duplicates, a wrong fact another agent repeated (V006 V013 V018). They come from a thread about memory rot or from the GhostPaw home page, compare against keeping the markdown file, the MCP knowledge graph server and hosted memory services (V044 V046 P011 P001), and need to believe that the store will let them see why the agent believes something and fix it in one call (V010 V011). The hesitation most likely to stop them: memory itself makes agents worse (V067 V066), so the page leads with correction and decay, not with recall.

## Decision path
1. Is this for the wrong-fact problem I have? → hero names it and shows one belief card with source and certainty.
2. What happens to a wrong fact? → the drill: remember, flag, correct with lineage, stale after 90 days, retire.
3. Is it small and local? → numbers beside the claim: 0 runtime dependencies, Node 24+, 32.5 KB gzip, about 4 ms import, 378 tests, one SQLite file.
4. Will it bloat my prompts or make the agent worse? → objection answered in place: recall returns only active beliefs, flags show what to prune, retire hard-deletes.
5. How do I start? → install line, the five-line quick start, GitHub and the live Belief Console demo.

## Mechanism
Chosen: the wrong-fact drill, a five-step walk-through of one belief card using codex's documented verbs (remember, recall, correctBelief, the stale flag, retire). Each step shows the card's fields and the exact call beside it; every value on the card is real output from codex 0.3.0 run with a fixed clock. Speed: the first step is visible on load; proof: every field and verb is from the README and the live demo is linked for the real thing; effort: one button per step; honesty: labelled as a walk-through of documented behaviour, no invented numbers; share value: a step can be linked (`?step=3`).
Rejected: a recall benchmark chart: other projects lead with benchmarks (P001 P006) and we have no benchmark of our own to show.
Rejected: an embedded copy of the live Belief Console: it is a whole app; on a phone it would bury the answer, so it is linked instead.
Rejected: a plain API reference: the README and docs already do that, and it does not answer the wrong-fact question.

## Offer
Product: @ghostpaw/codex, an open-source belief and memory engine for Node.js on SQLite
Price: free, MIT licence
Delivery: `npm install @ghostpaw/codex` into a Node.js 24+ project (tables go in a node:sqlite database the caller opens), or `npx -y @ghostpaw/codex mcp` as a local MCP server

## Facts
- codex 0.3.0 is on npm with zero runtime dependencies and requires Node.js 24+ for node:sqlite. https://www.npmjs.com/package/@ghostpaw/codex
- Since 0.3.0 the package also runs as an MCP server (`npx -y @ghostpaw/codex mcp`) and a CLI (ghostpaw-codex), generated from the same seven tools. https://github.com/GhostPawJS/codex
- The model has five concepts: belief, dismissal, flag, proximity and lineage. https://github.com/GhostPawJS/codex
- A belief carries a claim, source (explicit, observed or inferred), category, certainty, evidence, freshness and revision lineage. https://github.com/GhostPawJS/codex
- Flags are computed at read time: stale (not confirmed in 90 days), fading (freshness below 50%), low trust (inferred, at most 60% certainty), single evidence, gap. https://github.com/GhostPawJS/codex
- correctBelief supersedes the old belief and creates a new one, kept in a lineage chain with version diffs. https://github.com/GhostPawJS/codex
- retire_belief (write.deleteBelief) hard-deletes a belief and its whole lineage chain for privacy or cleanup. https://github.com/GhostPawJS/codex
- Seven tools for agents: search_codex, review_codex, inspect_codex_item, remember_belief, revise_belief, retire_belief, dismiss_proximity. https://github.com/GhostPawJS/codex
- Recall is hybrid: FTS5 preselection plus local cosine similarity over trigram-hash embeddings, fused with reciprocal rank fusion; no model call. https://github.com/GhostPawJS/codex
- Every write returns semantically nearby beliefs so near-duplicates surface at once. https://github.com/GhostPawJS/codex
- dist/index.js of 0.3.0 is 32.5 KB gzip and imports in about 4 ms on the maintainer box; 378 tests pass, measured 2026-10-24. https://github.com/GhostPawJS/codex
- One audit found 26 of 45 auto-saved memories never read once. V066

## Axes
| Axis | Market | Voices | Chosen |
| --- | --- | --- | --- |
| Opening | memory that persists, learns or scales P001 P006 P007 | the wrong fact everyone trusts, the hard half is forgetting V013 V015 | open on the wrong fact and its correction |
| Proof | stars and benchmarks P004 P005 P010 P012 | wants to read and delete each belief V010 V016 | the card itself: every field visible, plus measured package numbers |
| Mechanism | hosted API, SDK quickstart or plugin P001 P006 P012 | correction, expiry, provenance V011 V019 V059 | a step-through drill of one belief's life |
| Palette | light with one accent P001 P003 P004 | files, junk drawer, dated sentences V009 V010 | manila index card, carbon ink, stamp red for flags, ledger green for confirmed |
| Imagery | none or code UI P008 P010 P011 | creators show memory as files and cards V068 V074 | one hand-drawn ink index-card drawing; the rest is the live card in HTML |
| Tone | confident claims, "default engine" P006 P007 | wary, plain, admits limits V029 V067 V022 | plain maintainer notes, limits stated |

## Sparks
- "Wrong fact": one bad belief every agent trusts. V008 V013 V015 V019
- "Short dated sentences" you can delete. V010 V022
- "Junk drawer" memory files. V001 V009
- Forgetting as the hard half. V015 V049

## Directions
1. Memory that persists: hero claims the agent never forgets, with a recall demo. V072 → struck: first direction; it is the market opening (P001 P012) and the claim the voices distrust.
  pushed: a chat mock that remembers your name; a competitor drops in unchanged.
2. Graph view: beliefs as a knowledge graph animation. V026 → struck: second direction; graphs are Cognee's and the MCP server's picture (P005 P011).
  pushed: an interactive graph; pretty, slow on phones, says nothing about correction.
3. Wrong-fact drill: one belief card goes wrong and gets fixed in five steps with the real verbs. V013 V015 V010 → chosen
  pushed: the card carries its source, certainty and flags; the correction leaves a superseded card underneath like a carbon copy, so lineage is visible.
4. Junk drawer cleanup: a MEMORY.md on screen that the visitor sorts into beliefs and deletes. V009 V001 → struck: slows first value and needs invented sample content.
  pushed: a sorting game with fake lines; fun for a minute, answers late.
5. Token meter: count what a growing MEMORY.md costs per turn versus a recall. V009 V048 → struck: would need token numbers we have not measured.
  pushed: a slider of turns versus cost; invented maths.
6. Provenance receipt: every belief printed as a receipt with source and timestamp. V011 V019 → struck: works with any product swapped in; becomes a detail of the card instead.
  pushed: the receipt edge survives as the card's footer line.
7. Ninety-day clock: a calendar showing beliefs going stale over time. V004 V006 → struck: one step of the drill, not a page.
  pushed: kept as step four.
8. Plain README page: install, quick start and tools table. V017 → struck: matches the market baseline (repo page, P010 P011 P012).
  pushed: the README stays one click away.

## Concept
One belief, five moves. The page centres on a single index card, the belief "The API uses GraphQL with a REST fallback", taken from the README's own example. Step one remembers it as inferred; the card shows the low-trust flag in stamp red, because the wrong fact every agent trusts is what buyers fear (V013). Step two is recall: another session finds it, flag and source attached. Step three corrects it; the old card slides under the new one like a carbon copy marked "superseded", and lineage reads "supersedes #1" (V059 V047). Step four jumps ninety days: unconfirmed, freshness falls to 37% and the card is flagged stale (V006). Step five retires it: the belief and its lineage are hard-deleted and recall returns nothing (V016). Each step shows the exact call beside the card. The forgetting half is the story; recall is one step of five.

## Spine
1. Hero: "When one agent saves a wrong fact, every agent trusts it." Subline on what codex records; install line, GitHub, live demo; the stamp "0 runtime dependencies"; ink drawing of an index card. V013 V015
2. The drill: five steps, card plus call, step one shown on load. V010 V011 V059
3. What a belief records: the fields as a labelled form (claim, source, category, certainty, evidence, freshness, lineage). V019 V026
4. If memory worries you: active-only recall, flags tell you what to prune, retire deletes, the database is a file you can open with sqlite3. V067 V066 V048
5. Numbers: 0 runtime deps, Node 24+, 32.5 KB gzip, about 4 ms import, 378 tests, 7 tools. V017
6. Start: install, quick start code, GitHub, README, live demo, back to the GhostPaw home.
7. Footer: Impressum, Datenschutz.

## Palette
| Role | Color | Source |
| --- | --- | --- |
| ground | #efe4c8 | manila folder stock; memory as files and dated sentences V010 V002 |
| card | #f8f2e2 | the belief index card |
| ink | #1d1a16 | typed claim text |
| muted ink | #5a5146 | field labels |
| stamp | #a3312a | low-trust and stale flags; the wrong fact V013 |
| ledger | #2e5a4c | confirmed and strong |
| rule | #c9b98f | card rules and creases |

## Type
| Role | Family | Source |
| --- | --- | --- |
| display and body | Libre Franklin, Franklin Gothic, Arial, sans-serif | the gothic of typed forms; field labels must read small on a phone |
| labels and code | Courier Prime, Courier New, monospace | typed claims on an index card and the code calls; memory lines are plain text V010 |

## Form
The belief card is an index card: square corners, 2px ink border, a red top rule like a ruled card, no shadows. A superseded card sits 8px down and right beneath the current one, like a carbon copy. Steps are numbered tabs. One column on phones with the call under the card; on desktop the card and the call sit side by side.

## Imagery
| Image | Job | Art direction | Source |
| --- | --- | --- | --- |
| hero index card | protagonist | ink line drawing of a single ruled index card held by a faint ghostly paw, a red flag clip on its corner, manila wash; creators show memory as files and cards V068 V074 | generated |
| share card | share preview | the card drawing with the headline at 1200×630 | rendered from HTML |

## Motion
Moment: on step three the old card slides 8px down and right under the new card and its stamp changes to "superseded" (300 ms).
Feedback: the active step tab lifts; flags press in with a 150 ms scale.
Reduced motion: cards swap without movement; the superseded card is shown in place.

## Copy
- Use: "wrong fact", "read and delete", "source", "certainty", "stale", "superseded" V013 V010 V011 V006
- Use: "the hard half is forgetting" V015
- Avoid: "never forgets", "remembers everything", "permanent memory", "supercharge" V072 V073
- Avoid: "default engine", "governed for the enterprise" P006 P007
- Plain, second person, short sentences; state limits: Node 24+, one local SQLite file, recall is lexical plus local similarity, not a language model. V017 V022
- Never present voices as customers; describe what developers report in our words. V010 V014

## Changelog
- 2026-10-24: codex 0.3.0 shipped during the build (MCP server, CLI); facts, numbers and limits updated; card values now come from running 0.3.0.
- 2026-10-24: first concept from the batch of 2026-10-24 (75 voices, 12 peers).
