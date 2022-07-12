#!/bin/sh
npx baldrick-whisker@latest render elm.json script/template/widget-package.hbs demo/WidgetPackageJson.elm
echo "Generating Vocabulary ..."
# npx baldrick-whisker@latest object generated/vocabulary.json src/Bubblegum/TextArea/Vocabulary.elm script/data/module/vocabulary.json
# npx ajv validate --errors text -s script/schema/merged.schema.json -d generated/vocabulary.json
# npx baldrick-whisker@latest render generated/vocabulary.json script/template/tests.hbs tests/VocabularyTests.elm
