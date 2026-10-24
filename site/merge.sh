#!/bin/sh
# Merge the three lfm outputs into the GitHub Pages root.
# Run each project's `lfm compile --release` first.
set -eu
root=$(cd "$(dirname "$0")/.." && pwd)
site="$root/site"
for d in agent-memory agent-tasks; do rm -rf "$root/$d"; done
find "$root" -maxdepth 1 -type f \( -name '*.html' -o -name '*.css' -o -name '*.webp' -o -name '*.png' -o -name '*.woff2' -o -name 'sitemap.xml' -o -name 'robots.txt' -o -name 'llms.txt' \) -delete
cp -R "$site/output/." "$root/"
mkdir -p "$root/agent-memory" "$root/agent-tasks"
cp -R "$site/codex/output/." "$root/agent-memory/"
cp -R "$site/questlog/output/." "$root/agent-tasks/"
rm -f "$root/agent-memory/sitemap.xml" "$root/agent-memory/robots.txt" "$root/agent-tasks/sitemap.xml" "$root/agent-tasks/robots.txt"
touch "$root/.nojekyll"
test -f "$root/CNAME" && test -f "$root/2652ea37754f5b3042032eab07305565.txt"
echo "merged into $root"
