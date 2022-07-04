# Technical Design

> Guide for the implementation, including detailed design, priorities, coding conventions, and testing

## Code structure

 - __src__: Elm source code

 - __tests__: Unit and fuzz tests for Elm code

 - __script__: Folder for bash, python or ts-node scripts

 - __script/data__: Folder for data (YAML, JSON, ...) that should be manually edited

 - __script/schema__: Folder for JSON Schemas that are used to validate data and often available in vscode

 - __script/template__: Folder for handlebars templates used by the code generators

 - __generated__: Folder for generated code or data (YAML, JSON, ...)

 - __elm-stuff__: Temporary folder for building distribution code

 - __report__: Temporary folder for reporting; usually for continuous integration

 - __.github__: Folder for github pipeline

 - __.vscode__: Folder for visual code snippets

## Useful links

 - Introduction to [Elm](https://guide.elm-lang.org/)