// Usage: node docsgen.mjs <repoDir> <lib> "<one-line summary>"
// Reads <repo>/docs/*.md, writes <repo>/site/docs-release/ (served at https://<lib>.ghostpaw.dev/docs/).
import { readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { Marked } from 'marked';

const [repo, lib, summary] = process.argv.slice(2);
const base = `https://${lib}.ghostpaw.dev`;
const gh = `https://github.com/GhostPawJS/${lib}`;
const docs = join(repo, 'docs');
const out = join(repo, 'site', 'docs-release');
const shareAlt = JSON.parse(readFileSync(join(repo, 'site', 'lfm.json'), 'utf8')).socialImage.alt;
const version = JSON.parse(readFileSync(join(repo, 'package.json'), 'utf8')).version;

// Page list: [source md (relative to docs/), slug, nav label]
const pages = [['README.md', '', 'Overview']];
for (const [f, label] of [['HUMAN.md', 'Using the API'], ['LLM.md', 'Agent tools and skills'], ['RECIPES.md', 'Recipes'], ['ARCHITECTURE.md', 'Architecture']]) {
  if (existsSync(join(docs, f))) pages.push([f, f.replace('.md', '').toLowerCase() + '/', label]);
}
const ents = existsSync(join(docs, 'entities')) ? readdirSync(join(docs, 'entities')).filter((f) => f.endsWith('.md')).sort() : [];
for (const f of ents) {
  const n = f.replace('.md', '').toLowerCase();
  pages.push([`entities/${f}`, `entities/${n}/`, n.charAt(0).toUpperCase() + n.slice(1)]);
}
const slugOf = new Map(pages.map(([f, s]) => [f, s]));

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = (s) => s.replace(/`([^`]*)`/g, '$1').replace(/\*\*?([^*]+)\*\*?/g, '$1').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');

function render(srcRel, slug) {
  let md = readFileSync(join(docs, srcRel), 'utf8');
  // Em dashes: "term — description" in lists and tables becomes "term: description", other dashes become commas.
  let fence = false;
  md = md.split('\n').map((line) => {
    if (/^\s*```/.test(line)) fence = !fence;
    if (fence || !line.includes('—')) return line;
    return (/^\s*([-*]|\d+\.|\|)/.test(line) ? line.replace(/\s+—\s+/, ': ') : line).replace(/\s+—\s+/g, ', ').replace(/—/g, ', ');
  }).join('\n');
  const seen = new Map();
  const depth = slug.split('/').filter(Boolean).length;
  const up = depth ? '../'.repeat(depth) : './';
  const marked = new Marked({ gfm: true });
  marked.use({
    walkTokens(t) {
      if (t.type === 'link' && t.href && !/^(https?:|mailto:|#)/.test(t.href)) {
        const [path, hash] = t.href.split('#');
        const resolved = join(dirname(srcRel), path).replace(/\\/g, '/');
        if (slugOf.has(resolved)) t.href = up + slugOf.get(resolved) + (hash ? '#' + hash : '');
        else t.href = `${gh}/blob/main/${resolved.startsWith('..') ? resolved.replace(/^\.\.\//, '') : 'docs/' + resolved}` + (hash ? '#' + hash : '');
      }
    },
    renderer: {
      heading({ tokens, depth: d, text }) {
        let id = plain(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
        const n = (seen.get(id) || 0) + 1; seen.set(id, n); if (n > 1) id += '-' + n;
        return `<h${d} id="${id}">${this.parser.parseInline(tokens)}</h${d}>\n`;
      },
    },
  });
  const firstH1 = md.match(/^# (.+)$/m);
  const title = firstH1 ? plain(firstH1[1]).trim() : lib;
  // the first paragraph after the h1 becomes the description
  const para = md.replace(/^# .+$/m, '').split(/\n\s*\n/).map((p) => p.trim()).find((p) => p && !p.startsWith('#') && !p.startsWith('|') && !p.startsWith('-') && !p.startsWith('```'));
  return { html: marked.parse(md), title, desc: para ? plain(para).replace(/\s+/g, ' ').slice(0, 220) : summary, up };
}

const css = `@font-face{font-family:"Tektur";src:url("{UP}tektur-var.woff2") format("woff2");font-weight:500 900;font-stretch:75% 100%;font-display:swap}
:root{color-scheme:dark;--void:#04070b;--panel:#0a1119;--rule:#1d2c3c;--ghost:#e3edf5;--haze:#93a5b9;--spectral:#62e6f2;--wraith:#b39dff;--display:"Tektur",Bahnschrift,"Arial Narrow",sans-serif;--body:system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;--mono:ui-monospace,"Cascadia Mono",Consolas,monospace}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}body{margin:0;background:var(--void);color:var(--ghost);font:400 1rem/1.65 var(--body)}
a{color:var(--spectral);text-underline-offset:.18em}a:focus-visible{outline:2px solid var(--spectral);outline-offset:2px}
.skip{position:absolute;left:-999px}.skip:focus{left:1rem;top:1rem;background:var(--panel);padding:.5rem 1rem;z-index:9}
header{border-bottom:1px solid var(--rule)}.bar{max-width:76rem;margin:0 auto;padding:1rem 1.25rem;display:flex;gap:1.25rem;align-items:center;flex-wrap:wrap}
.brand{font:700 1.05rem var(--display);color:var(--ghost);text-decoration:none}.brand span{color:var(--spectral)}
.bar nav{margin-left:auto;display:flex;gap:1.1rem;flex-wrap:wrap}.bar nav a{color:var(--haze);text-decoration:none}.bar nav a:hover{color:var(--ghost)}
.wrap{max-width:76rem;margin:0 auto;padding:2rem 1.25rem 4rem;display:grid;gap:2.5rem;grid-template-columns:minmax(0,1fr)}
@media (min-width:60rem){.wrap{grid-template-columns:14rem minmax(0,1fr)}}
.side .h{font:600 .8rem var(--display);letter-spacing:.06em;text-transform:uppercase;color:var(--haze);margin:1.25rem 0 .4rem}.side .h:first-child{margin-top:0}
.side ul{list-style:none;margin:0;padding:0}.side li{margin:.15rem 0}.side a{color:var(--haze);text-decoration:none}.side a[aria-current]{color:var(--spectral)}.side a:hover{color:var(--ghost)}
.ver{display:inline-block;font:500 .85rem var(--mono);color:var(--haze);margin-bottom:.75rem}
article{min-width:0;max-width:48rem}article h1,article h2,article h3{font-family:var(--display);line-height:1.2;font-weight:700}
article h1{font-size:clamp(1.9rem,4vw,2.6rem);margin:0 0 1rem}article h2{font-size:1.45rem;margin:2.4rem 0 .75rem;padding-top:1.2rem;border-top:1px solid var(--rule)}article h3{font-size:1.12rem;margin:1.8rem 0 .5rem}
article code{font:400 .9em var(--mono);color:var(--spectral);overflow-wrap:anywhere}article pre{background:var(--panel);border:1px solid var(--rule);border-left:2px solid var(--wraith);padding:1rem;overflow-x:auto;line-height:1.5}article pre code{color:var(--ghost);overflow-wrap:normal}
article table{border-collapse:collapse;width:100%;display:block;overflow-x:auto;font-size:.95rem}article th,article td{border:1px solid var(--rule);padding:.45rem .6rem;text-align:left;vertical-align:top}article th{background:var(--panel)}
article blockquote{margin:1rem 0;padding:.25rem 1rem;border-left:2px solid var(--spectral);color:var(--haze)}
footer{border-top:1px solid var(--rule)}footer .bar{color:var(--haze);font-size:.9rem}footer .bar nav a{color:var(--haze)}`;

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
const fontSrc = join(repo, 'site', 'assets', 'fonts', 'tektur-var.woff2');
copyFileSync(fontSrc, join(out, 'tektur-var.woff2'));
copyFileSync(join(repo, 'site', 'assets', 'images', 'share.png'), join(out, 'share.png'));

const navHtml = (cur, up) => {
  const group = (items) => items.map(([f, s, l]) => `<li><a href="${up}${s}"${s === cur ? ' aria-current="page"' : ''}>${esc(l)}</a></li>`).join('');
  const main = pages.filter(([f]) => !f.startsWith('entities/'));
  const ent = pages.filter(([f]) => f.startsWith('entities/'));
  return `<p class="h">Guides</p><ul>${group(main)}</ul>${ent.length ? `<p class="h">Concepts</p><ul>${group(ent)}</ul>` : ''}<p class="h">Source</p><ul><li><a href="${gh}/blob/main/docs/CONCEPT.md">Design concept</a></li><li><a href="${gh}#readme">README</a></li><li><a href="${gh}/blob/main/CHANGELOG.md">Changelog</a></li></ul>`;
};

const urls = [];
for (const [f, slug] of pages) {
  const { html, title, desc, up } = render(f, slug);
  const url = `${base}/docs/${slug}`;
  urls.push(url);
  const pageTitle = slug ? `${title} · @ghostpaw/${lib} docs` : `@ghostpaw/${lib} documentation`;
  const doc = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<link rel="icon" href="${up}../favicon.png" type="image/png">
<link rel="preload" href="${up}tektur-var.woff2" as="font" type="font/woff2" crossorigin>
<meta property="og:type" content="article">
<meta property="og:site_name" content="GhostPaw">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${base}/docs/share.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(shareAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#04070b">
<style>${css.replace('{UP}', up)}</style>
</head>
<body>
<a class="skip" href="#doc">Skip to the documentation</a>
<header><div class="bar"><a class="brand" href="https://ghostpaw.dev/">GhostPaw<span>/</span>${lib}</a><nav aria-label="Site"><a href="${base}/">${lib}</a><a href="${up}">Docs</a><a href="${gh}">GitHub</a><a href="https://www.npmjs.com/package/@ghostpaw/${lib}">npm</a></nav></div></header>
<div class="wrap">
<nav class="side" aria-label="Documentation">${navHtml(slug, up)}</nav>
<main id="doc"><article><span class="ver">@ghostpaw/${lib} ${version}</span>
${html}</article></main>
</div>
<footer><div class="bar"><span>Rendered from <a href="${gh}/tree/main/docs">docs/</a> in the repository, MIT licensed.</span><nav aria-label="Legal"><a href="https://ghostpaw.dev/">All GhostPaw libraries</a><a href="https://lab.anonyfox.com/impressum/">Impressum</a><a href="https://lab.anonyfox.com/datenschutz/">Datenschutz</a></nav></div></footer>
</body>
</html>
`;
  mkdirSync(join(out, slug), { recursive: true });
  writeFileSync(join(out, slug, 'index.html'), doc);
}
writeFileSync(join(repo, 'site', 'docs-urls.txt'), urls.join('\n') + '\n');
console.log(`docs: ${pages.length} pages -> ${out}`);
