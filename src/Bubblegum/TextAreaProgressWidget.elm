module Bubblegum.TextAreaProgressWidget exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick, onMouseEnter, onMouseOut)
import List
import Bubblegum.TextAreaVocabulary exposing(..)
import Bubblegum.TextAreaAdapter as TextAreaAdapter
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Attribute as Attribute
import Bubblegum.Entity.Outcome as Outcome exposing(..)
import Bubblegum.TextAreaHelper exposing(..)


textInfoProgress: TextAreaAdapter.Model msg -> SettingsEntity.Model -> StateEntity.Model -> Html msg
textInfoProgress adapter settings state =
    let
        ratio = model.value |> words |> List.length |> calculateRatio 40 |> toString
    in
        progress [ class "progress is-info", Html.Attributes.max "100", value ratio ][ text ( ratio ++ "%") ]


displayCharsProgress: TextAreaAdapter.Model msg -> SettingsEntity.Model -> StateEntity.Model -> Html msg
displayCharsProgress adapter settings state =
    let
        successCharRange = getSuccessCharRange settings
        contentLength = getContent state |> Outcome.map String.length
    in
        
    div [ class "control" ]
        [ div [ class "tags has-addons" ]
            [ span [ class "tag is-info" ]
                [ text (String.length model.value |> toString) ]
            , span [ class "tag is-dark" ]
                [ text "/ 200 chars" ]
            ]
        ]

displayTextInfo: TextAreaAdapter.Model msg -> SettingsEntity.Model -> StateEntity.Model -> Html msg
displayTextInfo adapter settings state =
    div [ class "field is-grouped is-grouped-multiline" ]
        [ displayCharsProgress adapter settings state
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
  