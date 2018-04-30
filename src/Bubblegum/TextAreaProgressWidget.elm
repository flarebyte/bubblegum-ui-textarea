module Bubblegum.TextAreaProgressWidget exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick, onMouseEnter, onMouseOut)
import List
import Bubblegum.TextAreaAdapter as TextAreaAdapter
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Outcome as Outcome exposing(..)
import Bubblegum.TextAreaHelper exposing(..)
import Tuple exposing(first, second)

successRange: Int -> (Int, Int) -> Bool
successRange size range =
    (size >= first range) && (size < second range)

dangerRange: Int -> (Int, Int) -> Bool
dangerRange size range =
    not (successRange size range)

successRatio: Int -> (Int, Int) -> String
successRatio size range =
    calculateRatio (first range) size |> toString

textInfoProgress: TextAreaAdapter.Model msg -> SettingsEntity.Model -> StateEntity.Model -> Html msg
textInfoProgress adapter settings state =
    let
        optSuccessWordRange = getSuccessWordRange settings
        optDangerWordRange = getDangerWordRange settings
        contentWordLength = getContent state |> Outcome.map (\c -> String.words c |> List.length)
        contentWithinSuccessRange = Outcome.map2 successRange contentWordLength optSuccessWordRange
        contentWithinDangerRange = Outcome.map2 dangerRange contentWordLength optSuccessWordRange
        contentSuccessRatio = Outcome.map2 successRatio contentWordLength optSuccessWordRange
    in
        progress [ class "progress is-info", Html.Attributes.max "100", value "47" ][ text ("47%") ]


displayCharsProgress: TextAreaAdapter.Model msg -> SettingsEntity.Model -> StateEntity.Model -> Html msg
displayCharsProgress adapter settings state =
    let
        optSuccessCharRange = getSuccessCharRange settings
        optDangerCharRange = getDangerCharRange settings
        contentLength = getContent state |> Outcome.map String.length
        appendContentLength = appendIfSuccess (\v -> text (toString v)) contentLength
    in
        
    div [ class "control" ]
        [ div [ class "tags has-addons" ]
            [ span [ class "tag is-info" ]
                (appendContentLength [])
            , span [ class "tag is-dark" ]
                [ text "/ 200 chars" ]
            ]
        ]

displayTextInfo: TextAreaAdapter.Model msg -> SettingsEntity.Model -> StateEntity.Model -> Html msg
displayTextInfo adapter settings state =
    div [ class "field is-grouped is-grouped-multiline" ]
        [ displayCharsProgress adapter settings state
        , textInfoProgress adapter settings state    
        ]
  