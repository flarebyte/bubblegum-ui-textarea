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

## Generated files

|                                  | File                                                                    |                       | Description          |                                                | Generator |   | Editable |   | Link |   |
| -------------------------------- | ----------------------------------------------------------------------- | --------------------- | -------------------- | ---------------------------------------------- | --------- | - | -------- | - | ---- | - |
| `README.md`                      | Essential guide that gives a detailed description of the project.       | `baldrick-elm`        | :heavy\_check\_mark: |                                                |           |   |          |   |      |   |
| `LICENSE`                        | The license for the project                                             | `baldrick-elm`        |                      |                                                |           |   |          |   |      |   |
| `Makefile`                       | The entry point for all the commands used for development               | `baldrick-elm`        |                      |                                                |           |   |          |   |      |   |
| `commands.txt`                   | A summary of all the commands as a text filename                        | `baldrick-elm`        |                      |                                                |           |   |          |   |      |   |
| `.aliases.zsh`                   | A list of helpful zsh aliases that you use                              | `baldrick-elm`        |                      |                                                |           |   |          |   |      |   |
| `elm.json`                       | Elm package description                                                 | `baldrick-elm`        | :heavy\_check\_mark: |                                                |           |   |          |   |      |   |
| `TECHNICAL_DESIGN.md`            | A description of the technical design and architecture approach         | `baldrick-elm`        | :heavy\_check\_mark: |                                                |           |   |          |   |      |   |
| `.editorconfig`                  | helps maintain consistent coding styles for multiple developers         | `script/normalize.sh` |                      | [See more](https://editorconfig.org/)          |           |   |          |   |      |   |
| `.gitignore`                     | Specifies intentionally untracked files that Github should ignore       | `script/normalize.sh` |                      | [See more](https://git-scm.com/docs/gitignore) |           |   |          |   |      |   |
| `ACCESSIBILITY.md`               | Recommendations for accessibility testing                               | `script/normalize.sh` |                      |                                                |           |   |          |   |      |   |
| `CODE_GENERATION.md`             | Strategy for code CODE\_GENERATION.md                                   | `script/normalize.sh` |                      |                                                |           |   |          |   |      |   |
| `CODE_OF_CONDUCT.md`             | Define community standards and signal a welcoming and inclusive project | `script/normalize.sh` |                      |                                                |           |   |          |   |      |   |
| `CONTRIBUTING.md`                | Guidelines to communicate how people should contribute                  | `script/normalize.sh` |                      |                                                |           |   |          |   |      |   |
| `DECISIONS.md`                   | Architecture decision records                                           | `script/normalize.sh` | :heavy\_check\_mark: |                                                |           |   |          |   |      |   |
| `documentation.json`             | Documentation for the Elm source code                                   | `elm`                 |                      |                                                |           |   |          |   |      |   |
| `GLOSSARY.md`                    | software development glossary                                           | `script/normalize.sh` |                      |                                                |           |   |          |   |      |   |
| `INTERNATIONALIZATION.md`        | Guidelines for translating the library for several languages            | `script/normalize.sh` |                      |                                                |           |   |          |   |      |   |
| `.vscode/baldrick.code-snippets` | Code snippets that could be helpful for the project                     | `script/normalize.sh` |                      |                                                |           |   |          |   |      |   |
| `.vscode/settings.json`          | Settings for the current Visual Studio Code project                     | `script/normalize.sh` | :heavy\_check\_mark: |                                                |           |   |          |   |      |   |

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
