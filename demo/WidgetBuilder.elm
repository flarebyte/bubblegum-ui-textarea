module WidgetBuilder exposing (viewTextAreaWidget)

import AppModel exposing (AppModel)
import AppMsg exposing (AppMsg(..))
import Bubblegum.TextAreaAdapter as TextAreaAdapter
import Bubblegum.TextAreaWidget as TextAreaWidget
import Html exposing (..)


adapter : TextAreaAdapter.Model AppMsg
adapter =
    { onInput = OnInputContent
    }


viewTextAreaWidget : AppModel -> Html AppMsg
viewTextAreaWidget model =
    TextAreaWidget.view adapter model.userSettings model.settings model.state
