#!/bin/sh
# Generated with make generate. See template script/template/build.hbs

echo "Generating the app.js from Elm source code ..."
rm docs/*.js docs/*.css docs/*.html
pushd demo && elm make App.elm --output ../docs/app.js && popd

echo "Copy demo files to docs ..."
cp demo/index.html docs/index.html
cp demo/styles.css docs/styles.css

echo "Create unique hash ..."
hash=$(md5 -q docs/app.js)
hashcss=$(md5 -q docs/styles.css)

mv docs/app.js docs/app-$hash.js
sed -i '' "s/app.js/app-$hash.js/" docs/index.html
	
mv docs/styles.css docs/styles-$hashcss.css
sed -i '' "s/styles.css/styles-$hashcss.css/" docs/index.html