.PHONY: html js test doc docs

SRC = src
DOCS = docs
DEMO = demo

reset:
	rm -rf elm-stuff
	rm -rf tests/elm-stuff
	rm -rf docs

build: beautify build-directory js html

install:
	elm-package install -y
	pushd tests && elm-package install -y && popd
	pushd demo && elm-package install -y && popd

build-directory:
	mkdir -p $(DOCS)

js:
	pushd demo && elm-make App.elm --output ../$(DOCS)/app.js

test:
	elm-test

beautify:
	elm-format src/ --yes
	elm-format demo/ --yes

html:
	cp $(DEMO)/index.html $(DOCS)/index.html
	cp $(DEMO)/styles.css $(DOCS)/styles.css

doc:
	elm-make --docs=documentation.json

meta:
	cd scripts && python convert-package.py

generate:
	cd scripts && python generate-vocabulary.py

diff:
	elm-package diff

start:
	cd docs;http-server -p 7000 -c10 -o
