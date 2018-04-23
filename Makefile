SRC = src
BUILD = build

reset:
	rm -rf elm-stuff
	rm -rf tests/elm-stuff
	rm -rf build

build: test build-directory js

install:
	elm-package install -y
	pushd tests && elm-package install -y && popd

build-directory:
	mkdir -p $(BUILD)

js:
	elm-make src/Bubblegum/TextAreaWidget.elm --output $(BUILD)/graph.js

test:
	cd tests && elm-test Main.elm

doc:
	elm-make --docs=documentation.json

diff:
	elm-package diff
