module WidgetPackageJson exposing (meta)

import PackageJson


meta : PackageJson.Model
meta =
    { version = "1.0.1"
    , summary = "TextArea widget for the Bubblegum UI toolkit."
    , repository = "https://github.com/flarebyte/bubblegum-ui-textarea.git"
    , license = "BSD-3-Clause"
    , exposedModules = [ "Bubblegum.TextArea.Widget" ]
    }
