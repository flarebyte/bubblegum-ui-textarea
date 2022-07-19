# Code base

| File                                              | Description                                                                                         | Generator            | Complexity |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------- | ---------- |
| `src/Bubblegum/TextArea/Adapter.elm`              | model for the adapter                                                                               |                      |            |
| `src/Bubblegum/TextArea/BulmaHelper.elm`          | facilitates the creation of Bulma styled html elements                                              |                      |            |
| `src/Bubblegum/TextArea/EntityHelper.elm`         | Basic functions for the VocabularyHelper to facilitate the retrieval of data from the configuration |                      |            |
| `src/Bubblegum/TextArea/Helper.elm`               | Helper to keep the noise away from Widget                                                           |                      |            |
| `src/Bubblegum/TextArea/HelperLimits.elm`         | Various limits used across the widget                                                               |                      |            |
| `src/Bubblegum/TextArea/Internationalization.elm` | Utility to translate some of the text used by the widget                                            | `script/generate.sh` |            |
| `src/Bubblegum/TextArea/IsoLanguage.elm`          | Utility to identify ISO languages                                                                   | `script/generate.sh` |            |
| `src/Bubblegum/TextArea/Vocabulary.elm`           | List of keys (predicates) used for the settings                                                     | `script/generate.sh` |            |
| `src/Bubblegum/TextArea/VocabularyHelper.elm`     | Helpers for accessing settings                                                                      | `script/generate.sh` |            |
| `src/Bubblegum/TextArea/Widget.elm`               | The textarea widget and most important source file                                                  |                      |            |
| `tests/WidgetCreateTests.elm`                     | the unit tests for testing all the main settings                                                    | `script/generate.sh` |            |
| `tests/WidgetTestData.elm`                        | Some data to support the unit tests                                                                 |                      |            |
| `demo/App.elm`                                    | Entry point for the Demo application                                                                |                      |            |
| `demo/AppModel.elm`                               | Model for the Demo application                                                                      |                      |            |
| `demo/AppMsg.elm`                                 | Messages for the Demo application                                                                   |                      |            |
| `demo/AttributeDoc.elm`                           | Model for the documentation of the Demo application                                                 |                      |            |
| `demo/Ipsum.elm`                                  | fixture with Ipsum paragraph                                                                        |                      |            |
| `demo/KeyDescription.elm`                         | List of description for the keys used by the widget                                                 | `script/generate.sh` |            |
| `demo/PackageJson.elm`                            | Model for the package description                                                                   |                      |            |
| `demo/WidgetBuilder.elm`                          | View for the widget demo                                                                            |                      |            |
| `demo/WidgetDocData.elm`                          | Examples of settings for the demo application                                                       | `script/generate.sh` |            |
| `demo/WidgetDocView.elm`                          | View for the documentation of the widget                                                            |                      |            |
| `demo/WidgetPackageJson.elm`                      | Latest package description and version for the widget                                               | `script/generate.sh` |            |
