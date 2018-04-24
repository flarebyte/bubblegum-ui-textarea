module Bubblegum.TextAreaProgressWidget exposing (create)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick, onMouseEnter, onMouseOut)
import List
import Bubblegum.SettingsEntity as SettingsEntity
import Bubblegum.SettingsState as SettingsState
import Bubblegum.TextAreaAdapter as TextAreaAdapter
import Bubblegum.TextAreaVocabulary exposing(..)

textInfoProgress: TextAreaAdapter -> SettingsEntity -> SettingsState -> Html m
textInfoProgress adapter settings state =
    let
        ratio = model.value |> words |> List.length |> calculateRatio 40 |> toString
    in
        progress [ class "progress is-info", Html.Attributes.max "100", value ratio ][ text ( ratio ++ "%") ]

displayTextInfo: TextAreaAdapter -> SettingsEntity -> SettingsState -> Html AppMsg
displayTextInfo adapter settings state =
    div [ class "field is-grouped is-grouped-multiline" ]
        [ div [ class "control" ]
            [ div [ class "tags has-addons" ]
                [ span [ class "tag is-info" ]
                    [ text (String.length model.value |> toString) ]
                , span [ class "tag is-dark" ]
                    [ text "/ 200 chars" ]
                ]
            ]
        , div [ class "control" ]
            [ div [ class "tags has-addons" ]
                [ span [ class "tag is-info" ]
                    [ text (model.value |> words |> List.length |> toString) ]
                , span [ class "tag is-dark" ]
                    [ text "/ 300 words" ]
                ]
            ]
        , textInfoProgress model    

        ]
  