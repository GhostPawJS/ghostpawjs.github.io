<a href="https://ghostpaw.dev/"><img src="https://raw.githubusercontent.com/GhostPawJS/.github/main/profile/banner.png" alt="GhostPaw: durable local state for AI agents" width="100%"></a>

# ghostpaw.dev

Source of [ghostpaw.dev](https://ghostpaw.dev/), the home page for the seven GhostPaw libraries. Each library's own page lives in its repository's `site/` folder and is served at `https://<lib>.ghostpaw.dev/`.

## Layout

- `site/`: the page source (template, styles, Tektur and Martian Mono fonts, art, share card). Build with `lfm compile --release` inside `site/`, then run `site/merge.sh`, which copies the output to the repository root and writes redirect stubs for the old per-library paths.
- `tools/docsgen/`: `node docsgen.mjs <repoDir> <lib> "<summary>"` turns a library's `docs/*.md` into the static docs served at `https://<lib>.ghostpaw.dev/docs/`.
- Repository root: the built page that GitHub Pages serves.

## Deploy

Every push to `main` runs `.github/workflows/pages.yml`, which publishes the repository root without `site/`, `tools/` and this README.
