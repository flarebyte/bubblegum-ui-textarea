module Bubblegum.TextAreaProgressWidget exposing (..)

import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Validation as Validation
import Bubblegum.TextAreaAdapter as TextAreaAdapter
import Bubblegum.TextAreaHelper exposing (..)
import Debug
import Html exposing (..)
import Html.Attributes exposing (..)
import List
import Tuple exposing (first, second)


successRange : Int -> ( Int, Int ) -> Bool
successRange size range =
    (size >= first range) && (size < second range)


dangerRange : Int -> ( Int, Int ) -> Bool
dangerRange size range =
    not (successRange size range)


successRatio : Int -> ( Int, Int ) -> String
successRatio size range =
    calculateRatio (first range) size |> toString



{-
   The pogress bar is available only if a number of words has been defined for measuring progress
-}


textWordProgressBar : TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
textWordProgressBar adapter userSettings settings state =
    let
        optSuccessWordRange =
            getSuccessWordRange settings

        hasWordTarget =
            optSuccessWordRange |> Outcome.isValid

        optDangerWordRange =
            getDangerWordRange settings

        contentWordLength =
            getContent state |> Outcome.map (\c -> String.words c |> List.length)

        contentWithinSuccessRange =
            Outcome.map2 successRange contentWordLength optSuccessWordRange

        contentWithinDangerRange =
            Outcome.map2 dangerRange contentWordLength optSuccessWordRange

        themeBasedOnRange =
            Outcome.or
                (contentWithinSuccessRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-success")
                (contentWithinDangerRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-danger")
                |> Outcome.withDefault "is-info"

        contentSuccessRatio =
            Outcome.map2 successRatio contentWordLength optSuccessWordRange

        addProgressTheme =
            appendAttributeIfSuccess class (themeBasedOnRange |> Validation.addStringPrefix "progress ")

        addTagTheme =
            appendAttributeIfSuccess class (themeBasedOnRange |> Validation.addStringPrefix "tag ")

        addRatio =
            appendAttributeIfSuccess class contentSuccessRatio

        addContentLength =
            appendIfSuccess (\v -> text (toString v)) (contentWordLength |> Debug.log "contentWordLength")

        addTargetLength =
            appendIfSuccess (\tuple -> span [ class "tag is-dark" ] [ text (first tuple |> toString) ]) optSuccessWordRange
    in
    div []
        [ div [ class "control" ]
            [ div [ class "tags has-addons" ]
                ([ span ([] |> addTagTheme)
                    (addContentLength [])
                 ]
                    |> addTargetLength
                    |> flip (++) [ span [ class "tag is-dark" ] [ text " words" ] ]
                )
            ]
        , progress
            ([ Html.Attributes.max "100"
             ]
                |> addProgressTheme
                |> addRatio
            )
            [ text "47%" ]
        ]


displayCharsProgress : TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
displayCharsProgress adapter userSettings settings state =
    let
        optSuccessCharRange =
            getSuccessCharRange settings

        optDangerCharRange =
            getDangerCharRange settings

        contentLength =
            getContent state |> Outcome.map String.length

        appendContentLength =
            appendIfSuccess (\v -> text (toString v)) contentLength
    in
    div [ class "control" ]
        [ div [ class "tags has-addons" ]
            [ span [ class "tag is-info" ]
                (appendContentLength [])
            , span [ class "tag is-dark" ]
                [ text "/ 200 chars" ]
            ]
        ]


displayTextInfo : TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
displayTextInfo adapter userSettings settings state =
    div [ class "field is-grouped is-grouped-multiline" ]
        [ displayCharsProgress adapter userSettings settings state
        , textWordProgressBar adapter userSettings settings state
        ]
