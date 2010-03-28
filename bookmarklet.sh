#!/bin/sh

[ -f build/bookmarklet-comp.js ] || python build.py
perl make_bookmarklet.pl build/bookmarklet-comp.js > bookmarklet-tmp.js 2>/dev/null

bm=`head -n1 bookmarklet-tmp.js | cut -c4-`

cat <<EOF >gadgets/bookmarklet.html
<!doctype html>
<style type="text/css">body,html{padding:0;margin:0;}</style>
<title>Prettify Bookmarklet</title>
<div><a href="${bm}"><img src="../media/jsprettify-bookmarklet.png" alt="jsPrettify"></a></div>
EOF

rm bookmarklet-tmp.js
