module WidgetBuilder exposing (viewTextAreaWidget)

import Html exposing (..)
import AppMsg exposing (AppMsg(..))
import AppModel exposing (AppModel)
import Bubblegum.TextAreaAdapter as TextAreaAdapter
import Bubblegum.TextAreaWidget as TextAreaWidget


adapter : TextAreaAdapter.Model AppMsg
adapter =
    { onInput = OnInputContent
    }

viewTextAreaWidget : AppModel -> Html AppMsg
viewTextAreaWidget model =
    TextAreaWidget.view adapter model.userSettings model.settings model.state
