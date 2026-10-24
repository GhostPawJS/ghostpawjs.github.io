#!/bin/sh
# Publish the home page (lfm output) at the GitHub Pages root and write
# redirect stubs for the old per-library paths. Each library's landing page
# now lives in its own repo and is served at https://<lib>.ghostpaw.dev/.
# Run `lfm compile --release` in site/ first.
set -eu
root=$(cd "$(dirname "$0")/.." && pwd)
site="$root/site"
OLD="agent-memory:codex agent-tasks:questlog agent-contacts:affinity agent-identity:souls agent-skills:grimoire agent-email:email agent-telegram:telegram"
find "$root" -maxdepth 1 -type f \( -name '*.html' -o -name '*.css' -o -name '*.webp' -o -name '*.png' -o -name '*.woff2' -o -name 'sitemap.xml' -o -name 'robots.txt' -o -name 'llms.txt' \) -delete
cp -R "$site/output/." "$root/"
stub() { # stub <dir> <target-url>
  rm -rf "$root/$1"; mkdir -p "$root/$1"
  cat > "$root/$1/index.html" <<HTML
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved to $2</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="$2">
<meta http-equiv="refresh" content="0; url=$2">
<style>body{background:#07090d;color:#d7e3f4;font:16px/1.5 system-ui,sans-serif;margin:3rem}a{color:#7fe7ff}</style>
</head>
<body><p>This page moved to <a href="$2">$2</a>.</p>
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "eb094a31847f4b1b96558586692a6f73"}'></script>
</body>
</html>
HTML
}
for pair in $OLD; do
  d=${pair%%:*}; lib=${pair#*:}
  stub "$d" "https://$lib.ghostpaw.dev/"
done
touch "$root/.nojekyll"
test -f "$root/CNAME" && test -f "$root/2652ea37754f5b3042032eab07305565.txt"
echo "merged into $root"
