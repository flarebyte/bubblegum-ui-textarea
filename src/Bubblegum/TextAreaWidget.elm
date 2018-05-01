module Bubblegum.TextAreaWidget exposing (view)
{-| Setting key

@docs view

-}
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick, onMouseEnter, onMouseOut)
import String exposing(lines, words)
import Bubblegum.TextAreaAdapter as TextAreaAdapter
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Outcome as Outcome exposing(..)
import Bubblegum.TextAreaHelper exposing(..)
import List
import Bubblegum.TextAreaProgressWidget exposing(displayTextInfo)

calculateRows: String -> String
calculateRows content =
    content |> lines |> List.length |> (+) 1 |> toString

{-| The core representation of a field.
-}
view: TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
view  adapter userSettings settings state =
    let
       addPlaceholder = appendAttributeIfSuccess placeholder (getPlaceholder settings)
       addValue = appendAttributeIfSuccess value (getContent state)
       addRows = appendAttributeIfSuccess (attribute "rows") (getContent state |> Outcome.map calculateRows)
    in
        div [ class "box is-marginless is-paddingless is-shadowless has-addons"]
            [   textarea (
                [ class "textarea is-marginless is-paddingless is-shadowless"
                , onInput adapter.onInput
                ] |> addPlaceholder
                  |> addValue
                  |> addRows
                )
                []
                , displayTextInfo adapter userSettings settings state 
            ]       
