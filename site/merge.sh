#!/bin/sh
# Merge the eight lfm outputs into the GitHub Pages root.
# Run each project's `lfm compile --release` first.
set -eu
root=$(cd "$(dirname "$0")/.." && pwd)
site="$root/site"
PAGES="agent-memory:codex agent-tasks:questlog agent-contacts:affinity agent-identity:souls agent-skills:grimoire agent-email:email agent-telegram:telegram"
for pair in $PAGES; do rm -rf "$root/${pair%%:*}"; done
find "$root" -maxdepth 1 -type f \( -name '*.html' -o -name '*.css' -o -name '*.webp' -o -name '*.png' -o -name '*.woff2' -o -name 'sitemap.xml' -o -name 'robots.txt' -o -name 'llms.txt' \) -delete
cp -R "$site/output/." "$root/"
for pair in $PAGES; do
  d=${pair%%:*}; p=${pair#*:}
  mkdir -p "$root/$d"
  cp -R "$site/$p/output/." "$root/$d/"
  rm -f "$root/$d/sitemap.xml" "$root/$d/robots.txt"
done
sh "$site/sitemap-extra.sh"
touch "$root/.nojekyll"
test -f "$root/CNAME" && test -f "$root/2652ea37754f5b3042032eab07305565.txt"
echo "merged into $root"
