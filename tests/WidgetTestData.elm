module WidgetTestData exposing (..)

{-| Setting key

-}

import Html exposing (..)
import Bubblegum.TextArea.Adapter as Adapter
import Bubblegum.TextArea.Widget as Widget
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Attribute as Attribute
import Bubblegum.TextArea.Vocabulary exposing (..)


type TestMsg
    = OnInputContent String

defaultAdapter : Adapter.Model TestMsg
defaultAdapter =
    { onInput = OnInputContent
    }
 

defaultUserSettings: SettingsEntity.Model
defaultUserSettings = {
    attributes = [
    ]
 }

defaultSettings: SettingsEntity.Model
defaultSettings = {
    attributes = [
    ]
 }          

defaultState: StateEntity.Model
defaultState = {
    attributes = [
        attr ui_content ipsum
    ]
 }          

withStateContent: String -> StateEntity.Model
withStateContent value =
    {
        attributes = [
            attr ui_content value
        ]
    }          

withSettingsSuccessMinimumChars: Int -> SettingsEntity.Model
withSettingsSuccessMinimumChars value = {
    attributes = [
        attr ui_successMinimumChars (value |> toString)
        , attr ui_successMaximumChars (value + 100 |> toString)
    ]
 } 

viewWidget : SettingsEntity.Model -> StateEntity.Model -> Html.Html TestMsg
viewWidget settings state = 
    Widget.view defaultAdapter defaultUserSettings settings state

-- private

attr: String -> String -> Attribute.Model
attr key value =
     { id = Nothing
    , key = key
    , facets = []
    , values = [value]
    }  

ipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris dolor, suscipit at nulla a, molestie scelerisque lectus. Nullam quis leo a felis auctor mollis ac vel turpis. Praesent eleifend ut sem et hendrerit. Vivamus sagittis tortor ipsum, eu suscipit lectus accumsan a. Vivamus elit ante, ornare vitae sem at, ornare eleifend nibh. Mauris venenatis nunc sit amet leo aliquam, in ornare quam vehicula. Morbi consequat ante sed felis semper egestas. Donec efficitur suscipit ipsum vitae ultrices. Quisque eget vehicula odio. Aliquam vitae posuere mauris. Nulla ac pulvinar felis. Integer odio libero, vulputate in erat in, tristique cursus erat."

