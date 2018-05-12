module WidgetPackageJson exposing (meta)

import PackageJson

meta : PackageJson.Model
meta=  {
  version = "1.0.0"
  , summary = "TextArea widget for the Bubblegum UI toolkit."
  , repository = "https://github.com/flarebyte/bubblegum-ui-textarea.git"
  , license = "BSD3"
  , exposedModules = ["Bubblegum.TextArea.Widget"]
  }
