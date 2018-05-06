module WidgetBuilder exposing (viewWidget)

import AppModel exposing (AppModel)
import AppMsg exposing (AppMsg(..))
import Bubblegum.TextArea.Adapter as Adapter
import Bubblegum.TextArea.Widget as Widget
import Html exposing (..)


adapter : Adapter.Model AppMsg
adapter =
    { onInput = OnInputContent
    }


viewWidget : AppModel -> Html AppMsg
viewWidget model =
    Widget.view adapter model.userSettings model.settings model.state
