module Bubblegum.TextAreaProgressWidget exposing (..)

import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Validation as Validation
import Bubblegum.TextAreaAdapter as TextAreaAdapter
import Bubblegum.TextAreaHelper exposing (..)
import Bubblegum.TextAreaInternationalization exposing (translateWord)
import Debug
import Html exposing (..)
import Html.Attributes exposing (..)
import List
import Maybe
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


tupleify : a -> b -> ( a, b )
tupleify a b =
    ( a, b )



{-
   The pogress bar is available only if a number of words has been defined for measuring progress
-}


progressBar : ( String, String ) -> Html msg
progressBar tuple =
    progress [ class ("progress is-small " ++ second tuple), Html.Attributes.max "100", value (first tuple) ]
        [ text (first tuple ++ "%") ]


textWordProgressBar : TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
textWordProgressBar adapter userSettings settings state =
    let
        editingLanguage =
            getEditingLanguageOrEnglish userSettings

        optSuccessWordRange =
            getSuccessWordRange settings

        hasWordTarget =
            optSuccessWordRange |> Outcome.isValid

        optDangerWordRange =
            getDangerWordRange settings

        contentWordLength =
            getContent state |> Outcome.map (\c -> String.words c |> List.length)

        labelForWord =
            contentWordLength |> Outcome.map (translateWord editingLanguage) |> Outcome.toMaybe |> Maybe.withDefault ""

        contentWithinSuccessRange =
            Outcome.map2 successRange contentWordLength optSuccessWordRange

        contentWithinDangerRange =
            Outcome.map2 dangerRange contentWordLength optDangerWordRange

        themeBasedOnRange =
            Outcome.or
                (contentWithinSuccessRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-success" |> Debug.log "A")
                (contentWithinDangerRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-danger" |> Debug.log "B")
                |> Debug.log "C"
                |> Outcome.withDefault "is-info"

        contentSuccessRatio =
            Outcome.map2 successRatio contentWordLength optSuccessWordRange

        ratioAndStatus =
            Outcome.map2 tupleify contentSuccessRatio themeBasedOnRange

        addTagTheme =
            appendAttributeIfSuccess class (themeBasedOnRange |> Validation.addStringPrefix "tag ")

        addProgressBar =
            appendIfSuccess progressBar ratioAndStatus

        addContentLength =
            appendIfSuccess (\v -> text (toString v)) (contentWordLength |> Debug.log "contentWordLength")

        addTargetLength =
            appendIfSuccess (\tuple -> span [ class "tag is-dark" ] [ text (first tuple |> toString) ]) optSuccessWordRange
    in
    div []
        [ div [ class "control" ]
            ([ div [ class "tags has-addons" ]
                ([ span ([] |> addTagTheme)
                    (addContentLength [])
                 ]
                    |> addTargetLength
                    |> flip (++) [ span [ class "tag is-light" ] [ " " ++ labelForWord |> text ] ]
                )
             ]
                |> addProgressBar
            )
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
