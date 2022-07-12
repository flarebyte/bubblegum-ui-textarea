#!/bin/sh
npx baldrick-whisker@latest render elm.json script/template/widget-package.hbs demo/WidgetPackageJson.elm
echo "Generating vocabulary with vocabulary..."
npx ajv validate --errors text -s script/schema/vocabulary.schema.json -d script/data/vocabulary.yaml
npx baldrick-whisker@latest render script/data/vocabulary.yaml script/template/vocabulary.hbs src/Bubblegum/TextArea/Vocabulary.elm
