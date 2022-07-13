#!/bin/sh
# Generated with make generate. See template script/template/generate.hbs
npx baldrick-whisker@latest render elm.json script/template/widget-package.hbs demo/WidgetPackageJson.elm
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
