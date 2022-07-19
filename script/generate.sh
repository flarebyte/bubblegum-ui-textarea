#!/bin/sh
# Generated with make generate. See template script/template/generate.hbs
mkdir -p report

echo "Generating vocabulary with vocabulary..."
npx ajv validate --errors text -s script/schema/vocabulary.schema.json -d script/data/vocabulary.yaml
npx baldrick-whisker@latest render script/data/vocabulary.yaml script/template/vocabulary.hbs src/Bubblegum/TextArea/Vocabulary.elm
echo "Generating vocabulary-helper with vocabulary..."
npx ajv validate --errors text -s script/schema/vocabulary.schema.json -d script/data/vocabulary.yaml
npx baldrick-whisker@latest render script/data/vocabulary.yaml script/template/vocabulary-helper.hbs src/Bubblegum/TextArea/VocabularyHelper.elm
echo "Generating key-description with vocabulary..."
npx ajv validate --errors text -s script/schema/vocabulary.schema.json -d script/data/vocabulary.yaml
npx baldrick-whisker@latest render script/data/vocabulary.yaml script/template/key-description.hbs demo/KeyDescription.elm
echo "Generating widget-doc-data with vocabulary..."
npx ajv validate --errors text -s script/schema/vocabulary.schema.json -d script/data/vocabulary.yaml
npx baldrick-whisker@latest render script/data/vocabulary.yaml script/template/widget-doc-data.hbs demo/WidgetDocData.elm
echo "Generating widget-create-tests with vocabulary..."
npx ajv validate --errors text -s script/schema/vocabulary.schema.json -d script/data/vocabulary.yaml
npx baldrick-whisker@latest render script/data/vocabulary.yaml script/template/widget-create-tests.hbs tests/WidgetCreateTests.elm
echo "Generating iso-language with language..."
npx ajv validate --errors text -s script/schema/language.schema.json -d script/data/language.yaml
npx baldrick-whisker@latest render script/data/language.yaml script/template/iso-language.hbs src/Bubblegum/TextArea/IsoLanguage.elm
echo "Generating internationalization with translation..."
npx ajv validate --errors text -s script/schema/translation.schema.json -d script/data/translation.yaml
npx baldrick-whisker@latest render script/data/translation.yaml script/template/internationalization.hbs src/Bubblegum/TextArea/Internationalization.elm
echo "Generating code-base with code-base..."
npx ajv validate --errors text -s script/schema/code-base.schema.json -d script/data/code-base.yaml
npx baldrick-whisker@latest render script/data/code-base.yaml script/template/code-base.hbs CODE_BASE.md

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

echo "Generating CODE_BASE.md ..."
scc --by-file -f json | jq '.[0].Files | map({ key: .Location, value: .}) | from_entries' > report/scc.json
npx baldrick-whisker@latest object report/code-base.yaml report/scc.json script/data/code-base.yaml
npx baldrick-whisker@latest render report/code-base.yaml script/template/code-base.hbs CODE_BASE.md
