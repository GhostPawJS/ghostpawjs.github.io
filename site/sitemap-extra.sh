#!/bin/sh
# Append the URLs in site/sitemap-extra.txt to the root sitemap.xml (idempotent).
set -eu
root=$(cd "$(dirname "$0")/.." && pwd)
map="$root/sitemap.xml"
list="$root/site/sitemap-extra.txt"
day=$(date -u +%Y-%m-%d)
entries=""
for url in $(grep -v '^#' "$list" | grep -v '^$'); do
  grep -q "<loc>$url</loc>" "$map" && continue
  entries="$entries<url><loc>$url</loc><lastmod>$day</lastmod></url>\n"
done
[ -z "$entries" ] && exit 0
tmp=$(mktemp)
awk -v add="$entries" '/<\/urlset>/ { printf "%s", add } { print }' "$map" | sed 's/\\n/\n/g' > "$tmp"
mv "$tmp" "$map"
