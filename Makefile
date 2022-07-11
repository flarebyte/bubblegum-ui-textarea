.PHONY: analyze assist beautify build diff doc generate github help install install-global md md-fix norm pre-generate preview-doc ready reset reset-generated test whisker-norm

# Static code analysis
analyze: 
	elm-analyse -s -o

# Generate some code in the console
assist: pre-generate
	sh script/assist.sh

# Beautify Elm source code
beautify: 
	elm-format src/ --yes
	elm-format tests/ --yes

# Build the library
build: test beautify doc

# Detects Elm code API changes
diff: 
	elm diff

# Generate the documentation
doc: 
	elm make --docs=documentation.json

# Generate some Elm Code
generate: reset-generated pre-generate
	mkdir generated
	sh script/generate.sh
	make beautify
	make test

# Update github repository
github: 
	gh repo edit --delete-branch-on-merge --enable-squash-merge

# Help for commands
help: 
	cat commands.txt

# Install local dependencies
install: 
	elm make
	pushd tests && elm make && popd

# Install global dependencies
install-global: 
	yarn global add elm-format@0.8.4
	yarn global add elm-review
	yarn global add elm-upgrade
	yarn global add elm-doc-preview
	yarn global add elm-analyse
	yarn global add elm-test

# Markdown check
md: 
	npx baldrick-dev-ts@latest markdown check
	npx baldrick-dev-ts@latest markdown check -s .github/

# Markdown fix
md-fix: 
	npx baldrick-dev-ts@latest markdown fix
	npx baldrick-dev-ts@latest markdown fix -s .github/

# Normalize the code structure
norm: whisker-norm
	npx baldrick-elm@latest generate -f lib -ga 'flarebyte' -ch 'Flarebyte.com' -cy 2018 -l BSD3 && make md-fix

# Prepare scripts for code generation
pre-generate: 
	npx baldrick-whisker@latest render script/data/project.json script/template/generate.hbs script/generate.sh
	npx baldrick-whisker@latest render script/data/project.json script/template/assist.hbs script/assist.sh

# Preview the documentation
preview-doc: 
	elm-doc-preview

# Ready for publishing
ready: analyze test

# Reset distribution and report folders
reset: 
	rm -rf elm-stuff
	rm -rf tests/elm-stuff

# Reset generated folders
reset-generated: 
	rm -rf generated

# Unit testing
test: 
	elm-test

# Normalize the project with baldrick-whisker
whisker-norm: 
	mkdir -p .vscode
	mkdir -p .github/workflows
	mkdir -p .github/ISSUE_TEMPLATE
	mkdir -p src
	mkdir -p tests
	mkdir -p script
	mkdir -p script/data
	mkdir -p script/schema
	mkdir -p script/template
	test -f "elm.json" || npx baldrick-whisker@latest object elm.json github:flarebyte:baldrick-reserve:data/elm/src-elm.json
	test -f ".vscode/settings.json" || npx baldrick-whisker@latest object .vscode/settings.json github:flarebyte:baldrick-reserve:data/elm/vscode-settings.json
	test -f "script/data/project.json" || npx baldrick-whisker@latest object script/data/project.json github:flarebyte:baldrick-reserve:data/elm/project.json
	npx baldrick-whisker@latest object --no-ext .vscode/baldrick.code-snippets.json github:flarebyte:baldrick-reserve:data/elm/snippet.yaml
	npx baldrick-whisker@latest object .github/ISSUE_TEMPLATE/bug_report.yaml github:flarebyte:baldrick-reserve:data/elm/bug-report.yaml
	npx baldrick-whisker@latest object .github/ISSUE_TEMPLATE/feature_request.yaml github:flarebyte:baldrick-reserve:data/elm/feature-request.yaml
	npx baldrick-whisker@latest object .github/workflows/main.yml github:flarebyte:baldrick-reserve:data/elm/workflow-main.yml
	npx baldrick-whisker@latest object script/schema/project.schema.json github:flarebyte:baldrick-reserve:data/elm/project.schema.json
	npx baldrick-whisker@latest render elm.json github:flarebyte:baldrick-reserve:template/code-of-conduct.hbs CODE_OF_CONDUCT.md --config '{"githubAccount":"flarebyte","copyrightHolder":"Flarebyte.com"}'
	npx baldrick-whisker@latest render --no-ext elm.json github:flarebyte:baldrick-reserve:template/elm/gitignore.hbs .gitignore.sh
	npx baldrick-whisker@latest render --no-ext elm.json github:flarebyte:baldrick-reserve:template/editorconfig.hbs .editorconfig.sh
	npx baldrick-whisker@latest render elm.json github:flarebyte:baldrick-reserve:template/elm/contributing.hbs CONTRIBUTING.md
	npx baldrick-whisker@latest render elm.json github:flarebyte:baldrick-reserve:template/elm/pull-request-template.hbs .github/pull_request_template.md
	npx baldrick-whisker@latest render github:flarebyte:baldrick-reserve:data/glossary.yaml github:flarebyte:baldrick-reserve:template/glossary.hbs GLOSSARY.md
	test -f "DECISIONS.md" || npx baldrick-whisker@latest render elm.json github:flarebyte:baldrick-reserve:template/decisions.hbs DECISIONS.md