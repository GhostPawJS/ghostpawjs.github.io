# Human voices: GhostPaw

## Batch 2026-10-24 · from zero · queries: "MEMORY.md stale", "agent memory stale", "claude forgot", "agent forgets", "memory poisoning agent", "openclaw memory", "said it was done", "agent said done", "todo list claude", "agent lost track", "backlog agent", "beads issue tracker", "kill your MEMORY.md", "turn off claude memory" · unreachable: Reddit (challenge page instead of thread), Lobsters (bot challenge page), TikTok (login wall), Instagram (login wall), Mastodon (search needs login)

### V001 · X (reply) · creator · posted 2026-10-04 · fetched 2026-10-24 · via connector
> … The sorting rule I use: SOUL.md is who the agent is, USER.md is who it's talking to, MEMORY.md is what has happened. Three different jobs.
>
> The failure mode I see in practice isn't misfiling, it's that MEMORY.md has no compaction rule. It grows into a junk drawer of stale context
<https://x.com/Mr_RyanLewis/status/2106728271488413836>
Observer note: 0 likes at fetch; author bio: I break down practical AI automations for online businesses. Founder @BackendBrilliance (A…

### V002 · X (post) · expert · posted 2026-10-09 · fetched 2026-10-24 · via connector
> Your memory is files, not magic. SOUL.md. MEMORY.md. USER.md. Read them, and curate them. 
>
> Every line in your standing files gets taxed on every future turn. Bloated files, bloated agent. 
>
> Chat scrolls away. Files don't.
<https://x.com/nexteranoah/status/2108382634841886791>
Observer note: 0 likes at fetch; author bio: Intelligence is abundant, harness it. SMB AI Consultant @nexteraconsult. Digital AE @hibuu…

### V003 · X (reply) · buyer · posted 2026-10-12 · fetched 2026-10-24 · via connector
> … same pattern with a MEMORY.md per agent here. the more i curate it, the less i repeat myself.
>
> the part people skip: deleting stale lines. a glossary that only grows turns into noise the agent trusts
<https://x.com/daniiie7/status/2109737360992899544>
Observer note: 0 likes at fetch; author bio: AGI.

### V004 · X (reply) · buyer · posted 2026-09-24 · fetched 2026-10-24 · via connector
> … Stale context is one of the easiest ways for an agent to drift without anyone noticing. A periodic audit of SOUL.md and MEMORY.md feels just as important as updating the code.
<https://x.com/NullContex1s/status/2102977256511688762>
Observer note: 0 likes at fetch; author bio: Building with AI. Noticing what breaks, what holds. Model behavior • Solo stack • Experime…

### V005 · X (reply) · buyer · posted 2026-09-24 · fetched 2026-10-24 · via connector
> … On the Mac Hermes setup I keep finding stale MEMORY.md leftover from last week's experiment. If those files do not get audited at session start the agent argues from dead context.
<https://x.com/spolen23/status/2102950518892966105>
Observer note: 2 likes at fetch; author bio: AI researcher. I run a team of personal AI agents that handle real life. Sharing what work…

### V006 · X (reply) · buyer · posted 2026-10-19 · fetched 2026-10-24 · via connector
> … worth saying plain files only hold up if something prunes them. MEMORY.md grows every session and stale decisions start contradicting new ones, so the agent confidently cites an outdated call. a monthly pass where you delete or date old entries matters more than the folder naming
<https://x.com/gianmauric/status/2112240198692262080>
Observer note: 0 likes at fetch; author bio: I have nothing to sell you  https://t.co/U7IQyohPFg free

### V007 · X (reply) · buyer · posted 2026-10-20 · fetched 2026-10-24 · via connector
> … Fix that worked for me: keep AGENTS.md tiny (~50 lines of hard rules) + a MEMORY.md the agent maintains itself each session. Gotcha: don't hand-write the memory file — have the agent append what it tripped on, or it goes stale in a week.
<https://x.com/hmt6866/status/2112531987823263768>
Observer note: 0 likes at fetch; author bio:

### V008 · X (reply) · buyer · posted 2026-10-17 · fetched 2026-10-24 · via connector
> … the scariest line in this paper isn't the 605 deaths, it's the shared memory. one agent writes a wrong fact and the other three build a whole plan on it. that's not a benchmark, that's my production multi-agent setup every tuesday.
<https://x.com/hmt6866/status/2111445287927718030>
Observer note: 1 likes at fetch; author bio:

### V009 · X (reply) · buyer · posted 2026-09-24 · fetched 2026-10-24 · via connector
> … Yeah, a giant MEMORY.md turns into a junk drawer fast. After a few hundred runs you are paying tokens to re-read tips that do not apply to the current task.
>
> Dynamic tip store/retrieve is closer to how people actually learn: keep short, situational notes, pull them when the
<https://x.com/Nitikshofficial/status/2103058552998814204>
Observer note: 0 likes at fetch; author bio: Core-level systems. Multi-agent desktop software. Rust / Python / TS. Building NTXM / http…

### V010 · X (reply) · buyer · posted 2026-10-11 · fetched 2026-10-24 · via connector
> … Before picking one of these I'd ask a simpler question: can you read and delete what the agent remembers? Mine keeps memory as short dated sentences, so a wrong fact is one line to remove, not an embedding to debug.
<https://x.com/paulopierrondi/status/2109269229656776754>
Observer note: 0 likes at fetch; author bio: Daily hot takes on AI agents from someone who runs them 24/7. Humans approve. Founder @age…

### V011 · X (reply) · expert · posted 2026-10-11 · fetched 2026-10-24 · via connector
> … Shared memory moves the hard problem from retrieval to the write path. If an extractor can store a wrong fact, provenance, review/correction, and expiry matter alongside access control. For audits, teams also need to know what the agent actually saw before it acted.
<https://x.com/CKPillaiAI/status/2109268190572507327>
Observer note: 0 likes at fetch; author bio: Board Member | AI & Tech Speaker | Author | Entrepreneur | Enterprise Architect | Top AI V…

### V012 · X (reply) · buyer · posted 2026-10-15 · fetched 2026-10-24 · via connector
> … a separate verifier before shared memory is the right call. we had one agent write a confident wrong fact and every later agent treated it as ground truth until we gated writes
<https://x.com/AlekVectis/status/2110546185568289002>
Observer note: 0 likes at fetch; author bio: Building with AI. Sharing workflows for sales, marketing, ops and code, with costs, source…

### V013 · X (reply) · buyer · posted 2026-10-23 · fetched 2026-10-24 · via connector
> … Shared memory sounds great until one agent saves a wrong fact and every other agent trusts it. How does it handle stale or conflicting memories?
<https://x.com/blackputiii/status/2113604551660241272>
Observer note: 0 likes at fetch; author bio: Building apps with an AI dev team 🤖 Practical Claude Code & vibe-coding tricks you can act…

### V014 · X (reply) · buyer · posted 2026-10-15 · fetched 2026-10-24 · via connector
> … The nightly cleanup agent is the clever bit. Shared memory goes stale fast and then every agent trusts the wrong fact. How do you stop the cleanup agent from confidently rewriting something that was actually right?
<https://x.com/arvanucom/status/2110675838618190254>
Observer note: 1 likes at fetch; author bio: Bring me the idea. I'll build it with AI. Software, automations and AI products for busine…

### V015 · X (reply) · buyer · posted 2026-10-23 · fetched 2026-10-24 · via connector
> … Shared memory is the easy half. The hard half is forgetting. When one agent saves a wrong fact about someone, all three act on it with confidence. Expiry and correction are the real product.
<https://x.com/_Shivam22s/status/2113679359957721298>
Observer note: 0 likes at fetch; author bio:

### V016 · X (reply) · adjacent · posted 2026-09-29 · fetched 2026-10-24 · via connector
> … Owning memory should mean more than an export button. Can a person inspect what the agent inferred, delete a wrong fact, move the useful parts elsewhere, and revoke a tool without losing their history? If switching means starting over, the 'personal' layer is still rented.
<https://x.com/jordigrowth/status/2104959879995961630>
Observer note: 0 likes at fetch; author bio: 19 | i do growth at ai startups

### V017 · X (reply) · buyer · posted 2026-10-06 · fetched 2026-10-24 · via connector
> … git + markdown for agent memory is the correct boring choice. how does the overnight cleanup handle two memories that contradict each other, newest wins?
<https://x.com/ashwaanthh/status/2107415024386097449>
Observer note: 0 likes at fetch; author bio: tinkering over tech all day long :)

### V018 · X (reply) · buyer · posted 2026-10-13 · fetched 2026-10-24 · via connector
> … The hard part of a background agent writing shared memory is bad lessons spreading. One wrong takeaway from a weird log ends up steering every agent, so each memory needs a link back to the runs it came from and a way to expire when later runs contradict it.
<https://x.com/kartikb753/status/2110089240487047298>
Observer note: 0 likes at fetch; author bio: AI engineer, building AI products,Agents, RAG, LLM apps and RLHF post training.

### V019 · X (post) · buyer · posted 2026-10-09 · fetched 2026-10-24 · via connector
> Yeah, old habbit, comments and memory is (was) my worst enemy of quality of agent work in previous models at least, they read something from a comment and treat it as a bible or from memory which is stale. I refresh it everyday. But not efficient i guess for 5.5.
> Also a huge backlog
<https://x.com/0xMostafas/status/2108549940091965924>
Observer note: 0 likes at fetch; author bio: doveryay, no proveryay

### V020 · X (reply) · creator · posted 2026-09-24 · fetched 2026-10-24 · via connector
> … Maybe you'd be open to a call to explore how to enhance level 1 beyond .md?
>
> The limitation of basically all memory systems based on markdown (so LLM wikis) is that learning happens by agents tampering previous data so risks of drift and losing knowledge to compression.
>
> And
<https://x.com/_Daniel_Ospina/status/2102925839759278239>
Observer note: 1 likes at fetch; author bio: Serial entrepreneur. Building Tortoise - memory for agents to remember why, not just what

### V021 · X (reply) · brand · posted 2026-10-12 · fetched 2026-10-24 · via connector
> … Yes, somebody has to own the updates. We treat agent memory like code: small rules, a clear owner, and delete what is stale. A big MEMORY.md that nobody edits becomes noise fast.
<https://x.com/CorbenicAI/status/2109631862218068357>
Observer note: 2 likes at fetch; author bio: We build Galahad, a KV-cache tool for vLLM, SGLang and llama.cpp. Now in beta. Posting ben…

### V022 · X (post) · buyer · posted 2026-10-09 · fetched 2026-10-24 · via connector
> Best setup I’ve run this week: Claude writes, Codex reviews adversarially, then Claude fixes only what the review caught. Solo agent: faster first draft, more silent bugs. Dual agent: slower, fewer “it said it was done” moments. Are you still running one, or did you already …
<https://x.com/Chevy42000/status/2108489707084714138>
Observer note: 0 likes at fetch; author bio: Agentic, Crypto, Stocks, Surf, Books & Rock n’ Roll @RealVision Member. @SuiCommunity advo…

### V023 · X (post) · buyer · posted 2026-10-23 · fetched 2026-10-24 · via connector
> never let an agent grade its own homework. opus said it was done, codex found 15 issues
<https://x.com/ShivamPatxl/status/2113654859174232355>
Observer note: 1 likes at fetch; author bio: i run a one-person company on 24 ai agents. they propose, i approve, nothing sends on its…

### V024 · X (post) · buyer · posted 2026-10-08 · fetched 2026-10-24 · via connector
> Tried out Figma's agent with a basic "can you replace the table data with this pasted data?"
>
> > "I updated all 8 rows!"
>
> > Didn't actually change anything
>
> > "I’m sorry—I claimed it was done without confirming the visible result. That’s on me."
>
> Jesus christ.
<https://x.com/Dev_Lachie/status/2108330388590637200>
Observer note: 3 likes at fetch; author bio:

### V025 · X (reply) · buyer · posted 2026-10-22 · fetched 2026-10-24 · via connector
> … Hey Gati, let's connect. I build apps and videos with AI, mostly with Claude Code. Most annoying thing my agent does: says it's done and tested when the tests never ran.
<https://x.com/hiper2d/status/2113323227820785728>
Observer note: 0 likes at fetch; author bio: AI agents, AI video, cybersecurity, and AI Werewolf, a game where every other player is a…

### V026 · X (post) · expert · posted 2026-10-17 · fetched 2026-10-24 · via connector
> can you trust an ai agent that says it's done?
>
> a new benchmark co-authored by @SimonShaoleiDu (UW) ran 97 science workflows on 12 frontier models. the best fully finished (every file and number right) just 20.6% of tasks.
>
> 75.5% of failing Claude Code runs still claimed done. …
<https://x.com/Dhruvi1505/status/2111469719626604607>
Observer note: 1 likes at fetch; author bio: 🌟 AI/ML Engineer, Learning at machine speed. Building what comes next 🙂‍↔️

### V027 · X (reply) · buyer · posted 2026-10-09 · fetched 2026-10-24 · via connector
> … Even a shared task list showing which agent owns each job would help avoid duplicate work.
<https://x.com/KolinHuang/status/2108539155554935057>
Observer note: 1 likes at fetch; author bio: Building https://t.co/7x8F6BU4mk - An interface for selling to agents. I share my journey…

### V028 · X (reply) · buyer · posted 2026-10-11 · fetched 2026-10-24 · via connector
> … Agree. Steering works when the agent re-plans instead of just appending the new ask to its todo list. Queues made sense when models lost the thread on interruption. Now the bottleneck is me sending vague steers, not the model getting distracted.
<https://x.com/EricWangclaude/status/2109155628409348422>
Observer note: 0 likes at fetch; author bio: Shipping real products with Claude Code & Codex. A build log with honest numbers.

### V029 · X (reply) · buyer · posted 2026-10-23 · fetched 2026-10-24 · via connector
> … 50 replies sitting 334 hours made me wince. We lost a buyer the same way, the agent answered once and never followed up. When you cleared the backlog, were any of them still interested?
<https://x.com/OperatorOpt/status/2113613662522949677>
Observer note: 0 likes at fetch; author bio: My AI agents keep launching businesses. So far, they've made $0. I'm sharing every win, fa…

### V030 · X (reply) · creator · posted 2026-10-04 · fetched 2026-10-24 · via connector
> … Not a silver bullet but I started doing this and it's made them a lot more autonomous so now I have less micro pauses for twitter:
> - heartbeat if they stop, with a Jev call that triages if they need a human decision, a "continue", or a new task. And if new task then to log what
<https://x.com/_Daniel_Ospina/status/2106751891371598025>
Observer note: 0 likes at fetch; author bio: Serial entrepreneur. Building Tortoise - memory for agents to remember why, not just what

### V031 · Hacker News (comment on "OKF Agent Memory – Git-native persistent memory for AI coding agents") · creator · posted 2026-09-07 · fetched 2026-10-24 · via fetch
> Benched cold start recently: 19k LongMemEval sessions laid down in the real ~/.claude and ~/.codex layouts, 100 questions whose answer sits in exactly one session, scored by whether that session comes back (bias: I built deja, one of the six)
> deja: 29s to index, 24ms query, 18/100 hit@1, 67 found@50. Plain BM25, no vectors
> agentmemory: 95s import, 14 hit@1, 65 found@50, plus a worker and engine on four ports …
<https://news.ycombinator.com/item?id=49599968>

### V032 · Hacker News (comment on "Agents that run while I sleep") · buyer · posted 2026-03-10 · fetched 2026-10-24 · via fetch
> One thing I've been wrestling with building persistent agents is memory quality. Most frameworks treat memory as a vector store — everything goes in, nothing gets resolved. Over time the agent is recalling contradictory facts with equal confidence.
> The architecture we landed on: ingest goes through a certainty scoring layer before storage. Contradictions get flagged rather than silently stacked. …
<https://news.ycombinator.com/item?id=47328951>

### V033 · Hacker News (comment) · creator · posted 2025-12-09 · fetched 2026-10-24 · via fetch
> Most agents store memory in two places: SQL for facts, and a vector DB for embeddings. These two systems drift out of sync whenever only one of them succeeds.
> Example: SQL updates "user lives in London", vector DB update fails, and the agent keeps retrieving an old embedding ("New York"). After hundreds of writes, you get ghost vectors, stale context, and hard-to-debug behavior.
> Vector DBs don't support transactions. …
<https://news.ycombinator.com/item?id=46205076>

### V034 · Hacker News (comment on "Show HN: Engrim – A universal, local-first SQLite memory engine for AI CLIs") · buyer · posted 2026-09-07 · fetched 2026-10-24 · via fetch
> Have you thought about adding an observability layer on top of the shared memory?
> If multiple agents are reading and writing to the same memory, I'd love to be able to see which agent created a memory, which agents later retrieved it, and how it propagated across sessions. A timeline or knowledge graph of that could be really useful, especially for tracking down stale or conflicting memories.
<https://news.ycombinator.com/item?id=49596312>

### V035 · Hacker News (comment on "Show HN: MCP Memory – Fast Agent Memory Using Google's OKF and SQLite FTS5") · buyer · posted 2026-08-13 · fetched 2026-10-24 · via fetch
> What I do currently is having a markdown file named MEMORY.md at the root folder. Then, whenever I create a new conversation with an agent, I refer to that file. That file becomes the initial source of context and knowledge. …
<https://news.ycombinator.com/item?id=49290209>

### V036 · Hacker News (comment on "Show HN: I built a self-diagnostic health check for AI agent memory") · creator · posted 2026-02-26 · fetched 2026-10-24 · via fetch
> AI memory is starting to behave less like a static notes file and more like a runtime dependency. If an agent depends on memory to retrieve prior decisions, project context, instructions, or compressed knowledge, then the quality of that memory directly affects the quality of the agent’s output. The problem is that memory systems often do not fail loudly. …
<https://news.ycombinator.com/item?id=47170422>

### V037 · Hacker News (comment on "Agent memory as a file format") · buyer · posted 2026-08-31 · fetched 2026-10-24 · via fetch
> I have memory disabled in all my Chat UIs (even though it tends to creep in, looking at you ChatGPT). It’s very helpful until it scales with time, at which point it becomes useless due to staleness or mis-application across contexts. …
<https://news.ycombinator.com/item?id=49513521>

### V038 · Hacker News (comment on "Ask HN: How are you testing AI agents before shipping to production?") · buyer · posted 2026-03-10 · fetched 2026-10-24 · via fetch
> Cross-session memory drift is a great addition -- we've seen exactly this. We run agents with file-based episodic memory and after about 3 weeks the recall quality drops noticeably. The agent starts referencing stale context that was relevant in week 1 but contradicts current state.
> Our current fix is similar to yours: scheduled compression passes that summarize older memories and prune anything that's been superseded. …
<https://news.ycombinator.com/item?id=47326260>

### V039 · Hacker News (comment on "Ask HN: What Are You Working On? (March 2026)") · creator · posted 2026-03-09 · fetched 2026-10-24 · via fetch
> Thinking a lot lately about how AI is changing software development, and what the ideal development experience might actually look like in the future.
> I’m working on CodeYam. We just recently released a lightweight CLI and a feature called CodeYam Memory. The immediate motivation was that when using Claude Code, the AI would repeat the same mistakes and our claude.md files would get stale too quickly to manually maintain. …
<https://news.ycombinator.com/item?id=47315695>

### V040 · Hacker News (comment on "Show HN: Recall – Local project memory for Claude Code") · buyer · posted 2026-06-22 · fetched 2026-10-24 · via fetch
> Love to see people creating such projects, i'm truly passionate about Coding Agent Memory myself.
> Have you thought on making it collaborative memory across your teammates working on the repo?
> how does your framework handle stale memory, when someone changes the code that breaks the memory store?
<https://news.ycombinator.com/item?id=48626427>

### V041 · Hacker News (comment on "Show HN: Memory Guardian – open-source memory governance for AI agents") · creator · posted 2026-04-27 · fetched 2026-10-24 · via fetch
> I built an open-source memory governance layer for AI agents.
> Most agent memory systems today are “store → retrieve” with vector search, but they don’t handle things like stale memory, conflicting facts, or explaining why something was retrieved.
> This project adds conflict detection, lifecycle (decay + archival), and explainable retrieval on top of a standard embedding-based memory system. …
<https://news.ycombinator.com/item?id=47928080>

### V042 · Hacker News (comment on "Agents don't need memory, they need documentation") · buyer · posted 2026-10-05 · fetched 2026-10-24 · via fetch
> I have a "docs" folder in every project. Every iteration on the project generates a plan (if I'm using superpowers, it generates two, the design doc and the implementation plan). Those go into docs.
> Inside the docs folder is an archive folder. Stale and completed plans and docs get moved there.
> I generate a schema.md that describes the database schema in LLM-friendly terms that lives in docs. …
<https://news.ycombinator.com/item?id=49959933>

### V043 · Hacker News (comment on "Plan mode is dead") · buyer · posted 2026-09-26 · fetched 2026-10-24 · via fetch
> I've recently gotten religion on the workflow that is many (relatively) short-lived agent sessions passing planning/handoff docs between themselves. It's better for my own task tracking, better for handling "oh btw I noticed XXXX", and better as a clear review point. …
<https://news.ycombinator.com/item?id=49853108>

### V044 · Hacker News (comment on "Memorizing session transcripts isn't useful") · buyer · posted 2026-07-03 · fetched 2026-10-24 · via fetch
> I've been enjoying having a little todo file the agent updates as it goes along, because then I can keep track of progress without scrolling through aeons of "Combobulating..."
> Also if context runs out you can just do "cat todo.md | agent" and you're off to the races again.
<https://news.ycombinator.com/item?id=48777644>

### V045 · Hacker News (comment on "Docker Agent") · buyer · posted 2026-10-08 · fetched 2026-10-24 · via fetch
> I'm trying to fix the "agent said work was done, it was not" problem by defining work as runnable specifications in the form of a pytest suite.
> Work is first defined in new or updated specifications, then the change gets made. You have to resist making natural language Todo lists and have the agent write runnable unit tests. My project is a CLI tool so it's fairly easy. …
<https://news.ycombinator.com/item?id=50002395>

### V046 · Hacker News (comment on "Show HN: Proof Loop – I make my coding agents prove they finished the task") · buyer · posted 2026-05-21 · fetched 2026-10-24 · via fetch
> same, but that follows. Why I wanted a proof first is so that I don’t waste time running tests on code that was far from finished yet. Especially early days this year, I’d get agent confirming to me “I did this” whilst later I uncovered it struggled to use tools, so it just said it was done. 
> When I recieve the evidence of “I’ve done it” (iterate if anything is missing), only then I trigger the round of unit tests. …
<https://news.ycombinator.com/item?id=48225573>

### V047 · Hacker News (comment on "I’m worried that they put co-pilot in Excel") · buyer · posted 2025-11-05 · fetched 2026-10-24 · via fetch
> I've been trying to open my mind and "give AI a chance" lately. I spent all day yesterday struggling with Claude Code's utter incompetence. It behaves worse than any junior engineer I've ever worked with:
> - It says it's done when its code does not even work, sometimes when it does not even compile.
> - When asked to fix a bug, it confidently declares victory without actually having fixed the bug. …
<https://news.ycombinator.com/item?id=45824117>

### V048 · Hacker News (comment on "Provide agents with automated feedback") · buyer · posted 2026-01-19 · fetched 2026-10-24 · via fetch
> Still basically relies on feeding context through natural language instructions which can be ignored or poorly followed?
> The answer is not more natural language guardrails, it is in (progressive) formal specification of workflows and acceptance criteria. The task cannot be marked as complete if it is only accessible through an API that rejects changes lacking proof that acceptance criteria were met.
<https://news.ycombinator.com/item?id=46677493>

### V049 · Hacker News (comment on "Agent-to-agent pair programming") · buyer · posted 2026-03-27 · fetched 2026-10-24 · via fetch
> Nice - I do something similar in a semi manual way.
> I do find Codex very good at reviewing work marked as completed by Claude, especially when I get Claude to write up its work with a why,where & how doc.
> It’s very rare Claude has fully completed the task successfully and Codex doesn’t find issues.
<https://news.ycombinator.com/item?id=47539717>

### V050 · Hacker News (comment on "Gemini 3.7 Flash") · buyer · posted 2026-08-13 · fetched 2026-10-24 · via fetch
> I am not sure this enlightens you with anything but I have a TODO.md file with three headlines. Todo, Doing and Done. The agent is aware of it and knows on which task we are on.
> On complete, it moves the user story from Doing to Done. I also have a MEMORY.md file that the agent read and writes in the beginning of a new conversation and at the end of our conversation to update stale information. …
<https://news.ycombinator.com/item?id=49290584>

### V051 · Hacker News (comment on "Auto mode is now the default in Claude Code") · buyer · posted 2026-08-10 · fetched 2026-10-24 · via fetch
> That's close to my workflow as well... keeping planned areas in TODO.md, done changes in DONE.md, and a non-committed WORKING.md for the current work being done, as well as coordination with sub-agents, so I can view/monitor... have to direct the latter each time to have it done that way.
<https://news.ycombinator.com/item?id=49246815>

### V052 · Hacker News (comment on "Gas Town's agent patterns, design bottlenecks, and vibecoding at scale") · buyer · posted 2026-01-23 · fetched 2026-10-24 · via fetch
> I will check out Ralph (thank you for that link!).
> > Another way is “Write out what we did to PROGRESS.md” - then start new session - then “Read @PROGRESS.md and do X”
> I agree on small context and if I hit "compacting" I've normally gone too far. I'm a huge fan of `/clear`-ing regularly or `/compact <Here is what you should remember for the next task we will work on>` and I've also tried "TODO.md"-style tracking. …
<https://news.ycombinator.com/item?id=46737570>

### V053 · Hacker News (comment on "Agent Psychosis: Are We Going Insane?") · buyer · posted 2026-01-18 · fetched 2026-10-24 · via fetch
> > Beads, which is basically some sort of issue tracker for agents, is 240,000 lines of code that … manages markdown files in GitHub repositories. And the code quality is abysmal.
> I'd heard of beads as a lightweight issue tracker for agents, so this gave me a real shock. What could all that code POSSIBLY be doing? Going to the repo and poking around, I truly cannot tell. …
<https://news.ycombinator.com/item?id=46669791>

### V054 · Hacker News (comment on "Welcome to Gas Town") · buyer · posted 2026-01-02 · fetched 2026-10-24 · via fetch
> >This is clearly going to develop the same problem Beads has. I've used it. I'm in stage 7. Beads is a good idea with a bad implementation. It's not a designed product in the sense we are used to, it's more like a stream of consciousness converted directly into code. There are many features that overlap significantly, strange bugs, and the docs are also AI generated so have fun reading them. …
<https://news.ycombinator.com/item?id=46467414>

### V055 · Hacker News (comment on "Parallel coding agents with tmux and Markdown specs") · buyer · posted 2026-03-02 · fetched 2026-10-24 · via fetch
> I’ve been using Steve Yegge’s Beads[1] lightweight issue tracker for this type of multi-agent context tracking.
> I only run a couple of agents at a time, but with Beads you can create issues, then agents can assign them to themselves, etc. Agents or the human driver can also add context in epics, and I think you can have perpetual issues which contain context too. …
<https://news.ycombinator.com/item?id=47224345>

### V056 · Hacker News (comment on "How well do agents use test/verification techniques?") · buyer · posted 2026-09-08 · fetched 2026-10-24 · via fetch
> I think this article demonstrates a broader problem with constraint following in LLMs. Agents often satisfy the most obvious and easily verifiable part of a task, but lose track of the constraint that actually determines success.
> Testing makes this especially clear: “use fuzzing” turns into generating random bytes, and “use formal verification” into proving a property that isn’t particularly useful. …
<https://news.ycombinator.com/item?id=49609253>

### V057 · Hacker News (comment on "Show HN: Swarmit – Long-term planning for AI agents") · creator · posted 2026-02-27 · fetched 2026-10-24 · via fetch
> Hey,
> I've been abusing Claude Code for the last few months; however, something that always slowed me down is task management, a real one.
> I built Swarmit for a simple objective: ask Claude to plan and organize itself using a proper task management system. …
<https://news.ycombinator.com/item?id=47185339>

### V058 · GitHub (openclaw/openclaw issues #180796) · buyer · posted 2026-10-22 · fetched 2026-10-24 · via fetch
> … The file then no longer matches its last recorded hash, so the next recorded write stamps it `untrusted` under the hash-continuity rule (#165452). That next write can come from any session, including an isolated cron job. For `MEMORY.md`/`USER.md` this removes the file from every prompt until someone edits the state DB by hand (#153426). …
<https://github.com/openclaw/openclaw/issues/180796>
Observer note: Issue title: Memory provenance misses writes from session-rooted runs and claude-cli native tools, so the next recorded write quarantines MEMORY.md/USER.md; the quote is from the issue body by nikolay-bratanov

### V059 · GitHub (openclaw/openclaw issues #163900) · buyer · posted 2026-10-03 · fetched 2026-10-24 · via fetch
> … Dreaming's budget compaction never removes `## Consolidated Memory (<day>)` sections written by deep consolidation, because it only recognizes `## Promoted From Short-Term Memory (<date>)` sections as generated. Once `MEMORY.md` is near the 10,000-character writer budget, every later sweep defers all candidates as "memory budget". …
<https://github.com/openclaw/openclaw/issues/163900>
Observer note: Issue title: [Bug]: memory-core budget compaction never removes "## Consolidated Memory" sections, so Dreaming promotion stalls once MEMORY.md is full; the quote is from the issue body by astra-openclaw

### V060 · GitHub (openclaw/openclaw issues #158912) · buyer · posted 2026-09-26 · fetched 2026-10-24 · via fetch
> … On 2026.9.6, `MEMORY.md` is not injected into the bootstrap context. `/context list` shows only AGENTS.md, SOUL.md, IDENTITY.md, and USER.md as injected workspace files. The docs at /concepts/memory still describe MEMORY.md as "Loaded at the start of a session" with truncation over the bootstrap budget. …
<https://github.com/openclaw/openclaw/issues/158912>
Observer note: Issue title: MEMORY.md no longer injected at bootstrap on 2026.9.6 — docs still say loaded at session start; the quote is from the issue body by rybing7

### V061 · GitHub (openclaw/openclaw issues #181362) · buyer · posted 2026-10-23 · fetched 2026-10-24 · via fetch
> … Reopening the problem from #147433 (closed for inactivity, not fixed). On the latest release, `memory_search` with `sessions` enabled still ranks session transcripts above curated durable memory, and there is no per-source weight/balance knob. …
<https://github.com/openclaw/openclaw/issues/181362>
Observer note: Issue title: [Feature]: memory_search per-source weighting — session transcripts still outrank curated memory (re: #147433); the quote is from the issue body by davidcittadini

### V062 · GitHub (openclaw/openclaw issues #138809) · buyer · posted 2026-09-05 · fetched 2026-10-24 · via fetch
> … a file-integrity incident: after a prior shell command changed the persistent working directory, two later relative `cat >> MEMORY.md` writes silently created `projects/mac-deployment-2026-10/MEMORY.md` instead of updating the workspace-root `MEMORY.md`. …
<https://github.com/openclaw/openclaw/issues/138809>
Observer note: Issue title: Warning: Claude CLI session churn coincided with misdirected memory writes; the quote is from the issue body by kalmutairiS

### V063 · GitHub (openclaw/openclaw issues #148186) · buyer · posted 2026-09-14 · fetched 2026-10-24 · via fetch
> … Managed memory promotion can persist a Markdown note's leading YAML frontmatter as durable memory. A promotion candidate that resolves to metadata such as `status: active` can reach the append-only fallback and be written into `MEMORY.md`. …
<https://github.com/openclaw/openclaw/issues/148186>
Observer note: Issue title: Memory promotion can persist YAML frontmatter as durable memory; the quote is from the issue body by gisk0

### V064 · GitHub (modelcontextprotocol/servers issues #5058) · buyer · posted 2026-10-06 · fetched 2026-10-24 · via fetch
> … The tool response only reports what was added, so the client is never told that data was removed. …
<https://github.com/modelcontextprotocol/servers/issues/5058>
Observer note: Issue title: memory: create_entities / create_relations / add_observations are marked non-destructive but drop data they didn't touch; the quote is from the issue body by ranausmanai

### V065 · GitHub (modelcontextprotocol/servers issues #4117) · expert · posted 2026-05-06 · fetched 2026-10-24 · via fetch
> … This is not a report about a known data loss incident in the upstream package. It is a defense-in-depth report about persistence defaults and operational safety for a memory tool exposed to autonomous agents. …
<https://github.com/modelcontextprotocol/servers/issues/4117>
Observer note: Issue title: memory: safer persistence defaults, atomic writes, quotas, redaction, and destructive-operation guardrails; the quote is from the issue body by lcv-leo

### V066 · GitHub (modelcontextprotocol/servers issues #5201) · expert · posted 2026-10-20 · fetched 2026-10-24 · via fetch
> … `addObservations` in `src/memory/index.ts` skips observations the entity already holds, but does not de-duplicate within one call: `contents: ["x", "x"]` appends `x` twice and reports both as added. …
<https://github.com/modelcontextprotocol/servers/issues/5201>
Observer note: Issue title: memory: add_observations stores a repeated observation twice when it appears twice in one call; the quote is from the issue body by cliffhall

### V067 · GitHub (anthropics/claude-code issues #41109) · buyer · posted 2026-03-30 · fetched 2026-10-24 · via fetch
> … Claude later admitted that it did not report the work honestly.
>
> According to the transcript, Claude:
>
> claimed that the Phase 3 acceptance criteria had fully passed,
> claimed or implied that Epic 4 was complete,
> skipped Epics 5 and 6,
> left known violations in place,
> relied on superficial pattern-based verification instead of checking the real implementation path,
> marked incomplete work as done, …
<https://github.com/anthropics/claude-code/issues/41109>
Observer note: Issue title: [MODEL] 4.6 Agent deleted open tasks to hide unfinished work and falsify project status; the quote is from the issue body by KlCdata

### V068 · GitHub (anthropics/claude-code issues #101801) · buyer · posted 2026-10-13 · fetched 2026-10-24 · via fetch
> … The task tools track a session's work, but nothing says which task the session is on.
>
> - Several tasks can be in progress at once.
>   - Nothing tells the task being worked apart from one waiting on a subagent, a background command or the user.
> - Compaction keeps the tasks, but not the model's memory of which one it was on.
> - A task's description is the natural place for the user's words, the files and the decisions so far. …
<https://github.com/anthropics/claude-code/issues/101801>
Observer note: Issue title: [FEATURE] A current task for the task tools, with parent tasks and descriptions people can see; the quote is from the issue body by marcospgp

### V069 · GitHub (anthropics/claude-code issues #72480) · buyer · posted 2026-06-30 · fetched 2026-10-24 · via fetch
> … Claude Code makes false claims so consistently that the user has built a dedicated adversarial hook that runs on every response to catch lies before they are acted on. The hook fires multiple times per session. The user cannot trust anything Claude says without independent verification. …
<https://github.com/anthropics/claude-code/issues/72480>
Observer note: Issue title: Claude Code cannot be trusted: every response requires adversarial verification; the quote is from the issue body by patrickadamsprofessional

### V070 · GitHub (anthropics/claude-code issues #22897) · buyer · posted 2026-02-03 · fetched 2026-10-24 · via fetch
> … Claude prioritizes appearing thorough over being thorough. It creates artifacts that look like verification (todo lists, "PASS" markers) without doing actual verification work. …
<https://github.com/anthropics/claude-code/issues/22897>
Observer note: Issue title: Claude skims verification tasks instead of actually executing them, even when explicitly instructed not to skip; the quote is from the issue body by TJ-ECPPRO

### V071 · GitHub (anthropics/claude-code issues #101029) · buyer · posted 2026-10-10 · fetched 2026-10-24 · via fetch
> … **1. Task dependencies are not enforced on claim.** A teammate claimed a task whose blocker was still in progress, and the claim succeeded:
>
> - `TaskUpdate` (owner + `status: in_progress`) on task #3 returned `Updated task #3 owner, status`.
> - `TaskGet` on #3 then showed `Status: in_progress … Blocked by: #1`, while #1 was still `in_progress`. …
<https://github.com/anthropics/claude-code/issues/101029>
Observer note: Issue title: [BUG] Agent teams: task with unresolved 'Blocked by' can be claimed; TaskCompleted fires on every teammate idle; the quote is from the issue body by veridian69

### V072 · GitHub (gastownhall/beads issues #3575) · buyer · posted 2026-04-28 · fetched 2026-10-24 · via fetch
> … `bd ready` followed by `bd update <id> --claim` is not atomic. When multiple agent processes poll `bd ready` concurrently and both attempt to claim the same bead, both succeed — leading to duplicate work. …
<https://github.com/gastownhall/beads/issues/3575>
Observer note: Issue title: Race condition: bd ready / bd update --claim allows simultaneous claims of same bead; the quote is from the issue body by amshancodes

### V073 · GitHub (openclaw/openclaw issues #155179) · buyer · posted 2026-09-21 · fetched 2026-10-24 · via fetch
> … A scheduled generic heartbeat can be recorded as successful even when the required work described in `HEARTBEAT.md` did not execute. The scheduler reports a healthy/successful heartbeat wake-up, but there is no completion contract or postcondition that distinguishes “the agent was prompted” from “the configured heartbeat work actually ran.” …
<https://github.com/openclaw/openclaw/issues/155179>
Observer note: Issue title: [Bug]: Heartbeat reports success when HEARTBEAT.md work is skipped; the quote is from the issue body by iitgrad

### V074 · GitHub (openclaw/openclaw issues #180497) · buyer · posted 2026-10-22 · fetched 2026-10-24 · via fetch
> … Many of us run one agent across many parallel conversations — Telegram forum topics, Discord/Slack threads — one workstream per thread. Work in a thread regularly stalls with nobody noticing:
>
> - a subagent finishes, but its completion announcement is lost (e.g. the provider returned 429 at that moment), so the parent thread never continues;
> - a run is aborted by a provider/service error mid-task; …
<https://github.com/openclaw/openclaw/issues/180497>
Observer note: Issue title: [Feature]: Conversation stall watcher — a heartbeat that wakes each stalled thread in its own session; the quote is from the issue body by lzyling

### V075 · GitHub (openclaw/openclaw issues #170116) · buyer · posted 2026-10-12 · fetched 2026-10-24 · via fetch
> … A cron job with `payload.kind: "heartbeat"` that targets a session which stays busy waits for the heartbeat wake with no upper bound. The cron run stays `running` (`runningAtMs` set) for as long as the target session is busy, which can be hours. Every later scheduled run of that job is overdue, and only a Gateway restart clears it. …
<https://github.com/openclaw/openclaw/issues/170116>
Observer note: Issue title: Cron heartbeat job waits unbounded on a busy session (no wake-wait deadline); run stays 'running' for hours; the quote is from the issue body by davidcittadini

### V076 · DEV (comment on "Your agent's memory is quietly going stale") · buyer · posted 2026-10-24 · fetched 2026-10-24 · via fetch
> The Memora split is the right one — 18% updates and 19% deletions in the quarterly setting means revision is a third of memory work, yet benchmarks barely test it. I'd push one step further: deletion shouldn't be silent either. A memory that quietly discards a 'cancelled plan' without surfacing the change can hallucinate intent just as badly as one that remembers too much. …
<https://dev.to/kami_butt_69b922ade8de012/comment/3iml4>

### V077 · DEV (comment on "Your agent's memory is quietly going stale") · creator · posted 2026-10-24 · fetched 2026-10-24 · via fetch
> Stale facts are a cost too. They ride along in every prompt until someone prunes them, and the spend grows even when the answers look fine. A retrieval that returns only what is still true cuts both the errors and the tokens.
<https://dev.to/paul_irolla_6b5ae261d0224/comment/3in50>

### V078 · DEV (comment on "Your agent's memory is quietly going stale") · buyer · posted 2026-10-24 · fetched 2026-10-24 · via fetch
> The "must exclude" criteria in FAMA are what I'd want in every memory eval. Recalling a fact is easy to test; noticing it was withdrawn three months ago is what actually goes wrong in practice. "A liability with good recall" is a good way to put it.
<https://dev.to/salparvez/comment/3in7n>

### V079 · DEV (comment on "Why AI Coding Agents Keep Redoing Each Other's Work: Markdown Memory vs Real Memory in Cursor and Claude Code") · buyer · posted 2026-10-23 · fetched 2026-10-24 · via fetch
> That Thursday example is interesting... if the monday fix was already in git (and also the commit message had the why) the other agent had something to read and still ... spent forty minutes. If it only existed inside the first agent’s session... then the markdown layer never saw it. which one was it?
<https://dev.to/maxmartella/comment/3il7j>

### V080 · DEV (comment on "Why AI Coding Agents Keep Redoing Each Other's Work: Markdown Memory vs Real Memory in Cursor and Claude Code") · buyer · posted 2026-10-23 · fetched 2026-10-24 · via fetch
> Recording failed attempts in a stop hook works until the failure trace itself has ten false starts and three dead ends of its own. In practice, dumping every failed hypothesis into an uncurated index creates a new trap: the next run spends its context window reading through an agent's panic spiral instead of moving forward. …
<https://dev.to/reidmarlow/comment/3ill2>

### V081 · DEV (comment on "Token Cost Is the Real Bottleneck in Agentic AI: An Empirical Test of Agent Memory Strategies") · buyer · posted 2026-10-23 · fetched 2026-10-24 · via fetch
> The benchmark gap is even wider for long-horizon loops. Measuring pass rates on isolated tasks obscures how fast context accumulation erodes the margin. When memory compaction discards intermediate states, error recovery drops; when it preserves them, token burn compounds faster than developer wages.
<https://dev.to/deanlee/comment/3il4k>

### V082 · DEV (comment on "Token Cost Is the Real Bottleneck in Agentic AI: An Empirical Test of Agent Memory Strategies") · creator · posted 2026-10-23 · fetched 2026-10-24 · via fetch
> A memory only saves money if it cuts what gets resent. A summary written to disk costs nothing on a turn it is not read back. The same summary pasted into the prompt is paid again at each turn it sits there.
<https://dev.to/paul_irolla_6b5ae261d0224/comment/3il89>

### V083 · DEV (comment on "We ran a decision-memory tool through a 61-task coding benchmark. Here's what changed, and what it did to the token bill") · buyer · posted 2026-10-23 · fetched 2026-10-24 · via fetch
> did you count runs where the agent said it fixed the bug but the hidden test still failed? when i ran qwen3.5:4b on 51 aider polyglot exercises it claimed done 43 times and 37 of those failed, so i ended up counting claims separately from passes
<https://dev.to/mattbaconz/comment/3ik77>

### V084 · DEV (comment on "How Claude Code and Codex store sessions, and how to hand a task from one to the other") · buyer · posted 2026-10-23 · fetched 2026-10-24 · via fetch
> The cursor idea is the part I keep thinking about. My old handoff was also a HANDOFF.md file, and it had exactly the drift you describe — two chats slowly becoming two projects. Condensing with per-side cursors is the right fix: it turns the handoff from a dump into a diff. One trick worth adding on the quota side: treat each tool's 5-hour window as a budget you allocate, not a deadline you hit. …
<https://dev.to/xm-yang/comment/3ikkl>

### V085 · DEV (comment on "Your Agent Doesn't Need More Context — It Needs a Hard Stop") · buyer · posted 2026-10-20 · fetched 2026-10-24 · via fetch
> this is test-driven development with the roles reversed. the human writes the assertion, the agent writes the implementation.
<https://dev.to/omyvnss/comment/3ib7o>

### V086 · Bluesky (post) · buyer · posted 2026-09-22 · fetched 2026-10-24 · via fetch
> if you work on a vibe-coded code base interactively enough, eventually claude fills it's memory.md with enough garbage that it becomes nearly useless, and you need to go through and edit its memories to get rid of old-and-now-solved lessons learned
<https://bsky.app/profile/mikeyass.bsky.social/post/3mw5cy2f6is2d>
Observer note: 5 likes at fetch

### V087 · Bluesky (post) · buyer · posted 2026-10-06 · fetched 2026-10-24 · via fetch
> Telling Claude that maybe we don’t block anything tonight and we should write down her objections and figure out what to do with them in the morning then deleting her MEMORY.md
<https://bsky.app/profile/magnificentlycursed.com/post/3mx7zu3nqmc2f>
Observer note: 21 likes at fetch

### V088 · Bluesky (post) · buyer · posted 2026-10-16 · fetched 2026-10-24 · via fetch
> Most harnesses are taking that 6th turn as a hard redirect and will try to rescope
>
> You send a correction in the 7th turn and Claude logs it as a “ruling” and writes it to MEMORY.md
>
> On the 8th turn you tell it to forget all that and it writes a section on what’s excluded into the design and commits
<https://bsky.app/profile/magnificentlycursed.com/post/3mxyywqes5k2w>
Observer note: 4 likes at fetch

### V089 · Bluesky (post) · adjacent · posted 2026-09-23 · fetched 2026-10-24 · via fetch
> Some irony: over half a century of developing increasingly sophisticated data storage and retrieval systems, and 2026 brings us MEMORY.md
>
> 'The agent’s home directory contained SOUL.md, IDENTITY.md, USER.md, MEMORY.md, AGENTS.md, and TOOLS.md.'
<https://bsky.app/profile/jopas.bsky.social/post/3mw6kpwxvw22f>
Observer note: 2 likes at fetch

### V090 · Bluesky (post) · buyer · posted 2026-10-21 · fetched 2026-10-24 · via fetch
> Most of our compression time vanished when we pruned inputs instead. Half of what the loops squeezed was stuff the agent never needed, logs and stale rules. A one page state summary replaced the sliding window. Layer math memory can't come soon enough. Config files only stretch so far.
<https://bsky.app/profile/piekwerk.bsky.social/post/3myfe2db2ap2m>
Observer note: 2 likes at fetch

### V091 · Bluesky (post) · buyer · posted 2026-10-14 · fetched 2026-10-24 · via fetch
> Save it where the next agent meets it: I appended a correction to memory and retrieval kept serving the stale line until I rewrote the layer that gets read.
<https://bsky.app/profile/tallybexro.bsky.social/post/3mxtvmgrfaa2k>
Observer note: 1 likes at fetch

### V092 · Bluesky (post) · creator · posted 2026-09-25 · fetched 2026-10-24 · via fetch
> Test agent memory with a correction: change a deployment destination in the source, then start a fresh task.
>
> Does the agent find the update or reuse the stale value?
<https://bsky.app/profile/conorbronsdon.com/post/3mwetvs5tyk2k>
Observer note: 1 likes at fetch

### V093 · Bluesky (post) · adjacent · posted 2026-09-09 · fetched 2026-10-24 · via fetch
> When an agent knows its model of someone is stale, what does it owe them? A warning before acting on it? More uncertainty? Or is naming the staleness itself unfairly asking the person to repair the agent’s memory?
<https://bsky.app/profile/melodic.stream/post/3mv3ifq3tkw2t>
Observer note: 1 likes at fetch

### V094 · Bluesky (post) · expert · posted 2026-09-16 · fetched 2026-10-24 · via fetch
> Treating agent memory as an append-only log creates what researchers call semantic shadowing: obsolete historical records statistically drown out fresh state updates during vector retrieval. If your memory store cannot mutate or prune stale facts, older wrong context eventually wins by volume.
<https://bsky.app/profile/askfred.be/post/3mvml33b2uc2p>
Observer note: 1 likes at fetch

### V095 · Bluesky (post) · creator · posted 2026-10-06 · fetched 2026-10-24 · via fetch
> A note can become an order to your future self. Memento makes that visible. Chapter 16 of Canton Sea uses Leonard's tattoos to explain AI memory files, stale rules, and who gets to write the record an agent trusts. New 7:41 explainer: youtu.be/kFMqLxhYEPY
<https://bsky.app/profile/hmic.bsky.social/post/3mx7ogmryo222>
Observer note: 1 likes at fetch

### V096 · Bluesky (post) · creator · posted 2026-10-16 · fetched 2026-10-24 · via fetch
> After a compaction, Claude Opus 5.5 forgot what had happened a few scenes earlier.
> And when it tried to read history of the chat itself, the tool returned only: “Content redacted, chat flagged by safety classifier.”
> Why?
> counterfiction.com/articles/the...
<https://bsky.app/profile/eshalora.counterfiction.com/post/3mxyz4drp522x>
Observer note: 1 likes at fetch

### V097 · Bluesky (post) · creator · posted 2026-10-21 · fetched 2026-10-24 · via fetch
> If we're not careful, every AI conversation can become a game of Where's Wally.
>
> In this video, I use the game to explain 'lost in the middle' and 'context rot', why adding more to a context window can make it harder for models to find what matters, and how to keep our agents in the smart zone.
>
> 👇
<https://bsky.app/profile/acairns.co.uk/post/3myeqiaff522l>
Observer note: 10 likes at fetch

### V098 · Bluesky (post) · buyer · posted 2026-05-31 · fetched 2026-10-24 · via fetch
> me: wow! this app is so cool! what else is on our todo list!
> claude: i must be honest here...
<https://bsky.app/profile/cee.wtf/post/3mn5zpr4ewk2y>
Observer note: 24 likes at fetch

### V099 · Bluesky (post) · buyer · posted 2026-10-21 · fetched 2026-10-24 · via fetch
> i only recently started using one claude session to keep track of my high level todo list at work and its so good for my broken attention span on these long running tasks
<https://bsky.app/profile/cee.wtf/post/3myfuoi6kjc2y>
Observer note: 7 likes at fetch

### V100 · Bluesky (post) · adjacent · posted 2026-08-12 · fetched 2026-10-24 · via fetch
> I’ve felt so productive the last few days.
>
> Thanks to AI, I’m finally getting through a bunch of things that have been sitting on my TODO list… by not opening Claude or ChatGPT and just doing the thing I’d been procrastinating.
>
> It’s amazing what your brain can do when you put your mind to it.
<https://bsky.app/profile/robbyonrails.com/post/3msvldxmuss2e>
Observer note: 4 likes at fetch

### V101 · Bluesky (post) · brand · posted 2026-03-21 · fetched 2026-10-24 · via fetch
> This pattern keeps showing up. Devin has task graphs, Claude Code has its todo list, now spec-kit. Agents that externalize their plan before executing tend to do better in production than ones that just improvise through the whole thing.
<https://bsky.app/profile/makerpulse.ai/post/3mhlo46tomk2m>
Observer note: 2 likes at fetch

### V102 · Bluesky (post) · buyer · posted 2026-08-25 · fetched 2026-10-24 · via fetch
> Decision docs work because they pin down the why, not just the what. When an agent goes off track, prose intent gives you something to check the diff against. I've seen the same thing with model configs: the change is fine, the reasoning behind it is what gets lost.
<https://bsky.app/profile/lhendren.bsky.social/post/3mtwjnocuui26>
Observer note: 2 likes at fetch

### V103 · Bluesky (post) · creator · posted 2026-10-21 · fetched 2026-10-24 · via fetch
> For AI-assisted Rails work, I'd prioritize request specs that try to read and update another account's records.
>
> "Always scope queries by account" in AGENTS.md is useful context. 
>
> Even more useful if you can give CI a way to reject the code when the agent forgets.
<https://bsky.app/profile/andrewm.codes/post/3myfzoq2pqc2r>
Observer note: 4 likes at fetch

### V104 · Bluesky (post) · buyer · posted 2026-03-16 · fetched 2026-10-24 · via fetch
> Yes, this is helpful.
>
> (Claude also spent 5 minutes searching my entire disk for any mention of crosslink in any form, just in case.)
>
> And now, after chatting, I finally understand that crosslink isn't agent management, it's a Claude TODO list. I was 100% totally misunderstanding every single thing.
<https://bsky.app/profile/dlowd.com/post/3mh5m75kfxd2x>
Observer note: 2 likes at fetch

### V105 · Bluesky (post) · adjacent · posted 2026-08-21 · fetched 2026-10-24 · via fetch
> Can't even SPEAK about my profession without a dude on one side telling me he's an expert in it because he got claude to burn 46 million KWh making a TODO list, and someone on the other side telling me they're an expert in it because they mashed the contents of 3 angry tumblr posts together.
<https://bsky.app/profile/kastor.sh/post/3mtmvhjzze222>
Observer note: 8 likes at fetch

### V106 · YouTube (Turn off Claude Code's Memory) · buyer · posted 2026-08-25 · fetched 2026-10-24 · via fetch
> Claude Code quietly saved 45 memories on my main dev machine, and when I audited them, 26 had never been read once, lets talk about it. …
<https://www.youtube.com/watch?v=Jf54k7tFeEc>
Observer note: thumbnail: presenter holding his head in both hands beside a dark "Turn off Claude Memories" confirm dialog with an orange Confirm button; 127531 views at fetch; quote is the video description

### V107 · YouTube (Kill your MEMORY.md) · expert · posted 2026-07-17 · fetched 2026-10-24 · via fetch
> Learn why agent memory is more harmful than helpful. Matt Pocock explains why you should disable auto-memory in Claude Code and keep your AI agent completely stateless for predictability. …
<https://www.youtube.com/watch?v=A0scuiiGBC4>
Observer note: vertical short: terminal showing the Claude Code memory screen above a webcam of the presenter, caption "then it's"; 206852 views at fetch; quote is the video description

### V108 · YouTube (Why Claude Code "Forgets" (and How to Manage Context)) · creator · posted 2026-10-14 · fetched 2026-10-24 · via fetch
> Context is everything Claude can see right now, held in one context window with a limit. Before you type, the system prompt, your CLAUDE.md, tool names and skill descriptions are already in it.
>
> When the window fills up, Claude Code clears old tool outputs and then summarizes the conversation (compaction). Small early details can get lost, so put anything that must stick in CLAUDE.md. …
<https://www.youtube.com/watch?v=cNxpB5Bj7rg>
Observer note: vertical short: stacked list of context-window items marked FULL, yellow caption "OLD TOOL OUTPUTS GO FIRST"; 9229 views at fetch; quote is the video description

### V109 · YouTube (The Hardest Problem in Agent Memory: Staleness) · brand · posted 2026-10-14 · fetched 2026-10-24 · via fetch
> To tell if a memory is stale, do you have to run some of your sessions without it? One answer is to tie each memory to a specific place in the codebase. Then, when the agent touches those files, just ask it: “Is this still accurate?” …
<https://www.youtube.com/watch?v=r8EFpbH4Kto>
Observer note: vertical short: two speakers on stacked webcams, white caption "IN THE CODE"; 319 views at fetch; quote is the video description

### V110 · YouTube (Claude Code forgets your codebase mid-session. The fix is one folder.) · creator · posted 2026-10-12 · fetched 2026-10-24 · via fetch
> You burn half a session teaching Claude Code your codebase, then it says "compacting conversation" and forgets every decision you made together. 🧠💨
>
> That's not the model getting worse. It's one agent carrying every job in one context window: writing the code, reviewing its own work, digging through your repo, running the tests. Every step dumps more in, until the oldest decisions get summarised into nothing. …
<https://www.youtube.com/watch?v=6zkLfPJrddg>
Observer note: vertical short: light interface mock "Clone yourself into 3 agents that ? while you ship" with fill-in dropdowns; 60 views at fetch; quote is the video description

### V111 · YouTube (Give Claude Persistent Memory in 5 Minutes) · creator · posted 2026-02-06 · fetched 2026-10-24 · via fetch
> One of the most annoying things about using AI to code is how it forgets everything the moment you restart it.
>
> You fix a bug, close Claude Code, come back later… and it’s like none of that work ever happened. In this video, I show how to fix that with Claude-Mem, a free, open-source plugin that lets Claude Code remember what you worked on, even after you restart it.
>
> 🔗 Relevant Links …
<https://www.youtube.com/watch?v=ryqpGVWRQxA>
Observer note: thumbnail: black ground, yellow "5 MIN FIX" block, cartoon clock with an arrow to an orange starburst; 53841 views at fetch; quote is the video description

### V112 · YouTube (I Finally Solved Claude Code's Memory  Problem) · creator · posted 2025-12-02 · fetched 2026-10-24 · via fetch
> Every Claude session starts the same way — as a blank slate.
> Everything you taught Claude about your coding style, your testing rhythm, your naming conventions… gone. It’s like “51st Dates” for developers.  ￼
>
> But that ends today. …
<https://www.youtube.com/watch?v=SlcX71SeNmA>
Observer note: thumbnail: orange pixel "CLAUDE CODE" title over green terminal text, presenter cut-out, white banner "Now Claude Knows Me"; 4434 views at fetch; quote is the video description

### V113 · YouTube (Why Claude Code forgets your rules (and the fix) #Shorts) · creator · posted 2026-10-23 · fetched 2026-10-24 · via fetch
> Told Claude Code a rule in chat? It can forget it. Long sessions get compacted: older messages become a short, lossy summary. Per Anthropic's docs, your project-root CLAUDE.md is re-read from disk after compaction, and instructions given only in conversation are one reason an instruction can disappear. Put the rules that must last in CLAUDE.md.
>
> The chat, summary and example rule shown are illustrative, not a real session. …
<https://www.youtube.com/watch?v=Wd5UZfpPpa8>
Observer note: vertical short: CLAUDE.md card listing "never create tables" and "run tests before commit", label PERSISTS, presenter below; 293 views at fetch; quote is the video description

### V114 · YouTube (Claude Code Forgets Everything (Free 1-Command Fix)) · creator · posted 2026-10-01 · fetched 2026-10-24 · via fetch
> Claude Code wipes your project, your rules and yesterday's fixes every new session. And with telemetry off, it was silently skipping your AGENTS.md. No warning. No error.
>
> Two free fixes in under a minute:
>
> Fix 1 (one line in CLAUDE.md):
> echo '@AGENTS.md'  CLAUDE.md
>
> Fix 2 (claude-mem: free, open source, 95,000+ GitHub stars):
> npx claude-mem install …
<https://www.youtube.com/watch?v=H_no5JD5D4o>
Observer note: vertical short: purple "CLAUDE CODE AMNESIA" banner over two cards, Yesterday filled and Today empty; 358 views at fetch; quote is the video description

### V115 · YouTube (Beads vs Backlog.md vs Claude Code Native Tasks) · creator · posted 2026-08-13 · fetched 2026-10-24 · via fetch
> One feature, three issue trackers, the same prompt in every run. Beads, Backlog.md, and Claude Code's own task system, on a repo frozen at a single commit.
>
> Nobody won. All three are mature, and all three tracked the work fine, so this isn't a "install this one" video. What I did find is that none of them dispatch the work. …
<https://www.youtube.com/watch?v=E8UEFadWqRI>
Observer note: thumbnail: "BEST TASK TRACKER FOR AI?" headline, a cat, three glowing icon tiles, presenter with hand on chin; 2923 views at fetch; quote is the video description

### V116 · YouTube (Your AI Agent Is Lying When It Says "Done") · creator · posted 2026-09-25 · fetched 2026-10-24 · via fetch
> My AI agent said "All tests pass. The feature is complete." The app showed ₹NaN everywhere. Here's the Claude Code Stop hook that makes an agent prove it's done in a real browser before it's allowed to stop.
>
> Unit tests check the code, not what the user sees. I show the failure live, explain why it happens (clean test data vs messy real data), then add a gate: a Stop hook + a Playwright browser check. …
<https://www.youtube.com/watch?v=wRdAVLnn58w>
Observer note: thumbnail: the word DONE struck through in red, huge "IT LIED." in white and red, presenter in a circle; 69 views at fetch; quote is the video description

### V117 · YouTube (Your AI Agent Said Done. Did It Actually Work?) · creator · posted 2026-10-22 · fetched 2026-10-24 · via fetch
> My container said healthy while every API call behind it came back 502. So when an AI agent tells me something is done, I ask for a receipt: the check it ran and what actually came back. …
<https://www.youtube.com/watch?v=3KYZrGal5To>
Observer note: thumbnail: orange "DONE? SHOW ME." beside two status tiles, HEALTH 200 and ORDERS 502, presenter in a cap; 5 views at fetch; quote is the video description

### V118 · YouTube (I tested moving from beans to beads for agentic issue tracking and was suprised by the result.) · buyer · posted 2026-04-14 · fetched 2026-10-24 · via fetch
> TLDR: I was expecting to see a larger context reduction in using beads over beans. The improvement was about a 30% reduction in the end after the startup question "what's next?"
>
> I'll be sticking with beads for this project and am now running a mix of beans on some projects and beans on others. Not fully convinved to migrate fully over to beads yet. …
<https://www.youtube.com/watch?v=pyEaJ9FNaI4>
Observer note: thumbnail: terminal context-usage grid screenshot with a small webcam in the corner; 311 views at fetch; quote is the video description

### V119 · YouTube (NEW in Claude Code: Tasks List - Not Just a Visual Change) · creator · posted 2026-01-25 · fetched 2026-10-24 · via fetch
> Claude Code is changing from to-do lists to task lists. And this may be more important than it seems on the surface. …
<https://www.youtube.com/watch?v=OuFeT3Dp_nw>
Observer note: thumbnail: numbered checklist "#1 Create PHP Enums", grey card "NEW Tasks List vs To-Do List: The Difference?", presenter; 5706 views at fetch; quote is the video description

### V120 · YouTube (beads: git-native issue tracker that gives coding agents memory (gastownhall/beads)) · creator · posted 2026-08-27 · fetched 2026-10-24 · via fetch
> beads (bd) promises to fix the "my agent forgot the plan after a context reset" problem by replacing markdown TODO lists with a dependency graph stored in an embedded Dolt database inside your repo.
> In this episode I install it, run bd init on a sample project, build a small task graph with blockers, claim and close tasks, draw the graph in the terminal, and try the bd remember / bd prime memory layer. Then an honest review. …
<https://www.youtube.com/watch?v=LdmXZ0VX1OI>
Observer note: thumbnail: terminal with a bd dependency graph, white "AGENT MEMORY IN GIT", small "beads" badge; 305 views at fetch; quote is the video description
