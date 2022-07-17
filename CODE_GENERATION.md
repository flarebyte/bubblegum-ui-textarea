# Code generation

Code generation is a good fit with strongly typed languages like Elm or
Typescript.
Unfortunately, it is often considered not very developer friendly as it
increases the
level of abstraction.

We like it because it helps with naming conventions, consistency, and reduces
the amount of
boring repetitive tasks.

However, when this library is more mature, we could decide to get rid of
them, a bit like you would get rid of the scaffolding once the house is
built.
Still, they can be a helpful boost when building a different widget.

The code generators are written using an in-house tool
[baldrick-whisker](https://github.com/flarebyte/baldrick-whisker) that takes
JSON or YAML as an input, and produces content using handlebars templates.

-   **script/data**: Folder for data preferably in YAML that should be
    manually edited.

-   `script/data/project.yaml`: File describing all the generators.

-   **script/schema**: Folder for JSON Schemas that are used to validate
    data and that you should make available in vscode too
    `.vscode/settings.json`.

-   **script/template**: Folder for handlebars templates used by the code
    generators.

-   `script/template/generate.hbs`: Template for the main generator.

-   **generated**: Folder for generated code or data (YAML, JSON, ...) that
    can be sometimes be needed.

You can run the generators:

```bash
make generate
```

## Links

-   [Convert JSON to YAML](https://jsonformatter.org/json-to-yaml) or [this
    one](https://json2yaml.com/)
-   [Convert YAML to JSON](https://jsonformatter.org/yaml-to-json)
-   [Convert CSV to JSON](https://www.convertcsv.com/csv-to-json.htm)
-   [Swap CSV columns](https://onlinecsvtools.com/swap-csv-columns)
-   [Transform JSON](https://jsoneditoronline.org/)
-   [Generate JSON Schema from
    JSON](https://codebeautify.org/json-to-json-schema-generator) or [this
    one](https://www.liquid-technologies.com/online-json-to-schema-converter)
-   [Generate JSON Schema from
    YAML](https://codebeautify.org/yaml-to-json-schema-generator)
-   [About JSON
    Schema](https://json-schema.org/understanding-json-schema/index.html#)
