module Bubblegum.TextArea.Widget exposing (view)

{-| Setting key

@docs view

-}

import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Validation as Validation
import Bubblegum.TextArea.Adapter as TextAreaAdapter
import Bubblegum.TextArea.BulmaHelper exposing (..)
import Bubblegum.TextArea.Helper exposing (..)
import Bubblegum.TextArea.Internationalization exposing (translateWord)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput, onMouseEnter, onMouseOut)
import Maybe
import String exposing (lines, words)
import Tuple exposing (first, second)


{-
   The pogress bar is available only if a number of words has been defined for measuring progress
-}


textWordProgressBar : TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
textWordProgressBar adapter userSettings settings state =
    let
        userLanguage =
            getUserLanguageOrEnglish userSettings

        optSuccessWordRange =
            getSuccessWordRange settings

        hasWordTarget =
            optSuccessWordRange |> Outcome.isValid

        optDangerWordRange =
            getDangerWordRange settings

        contentWordLength =
            getContent state |> Outcome.map numberOfWords

        labelForWord =
            contentWordLength |> Outcome.map (translateWord userLanguage) |> Outcome.toMaybe |> Maybe.withDefault ""

        contentWithinSuccessRange =
            Outcome.map2 successRange contentWordLength optSuccessWordRange

        contentWithinDangerRange =
            Outcome.map2 dangerRange contentWordLength optDangerWordRange

        themeBasedOnRange =
            Outcome.or
                (contentWithinSuccessRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-success")
                (contentWithinDangerRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-danger")
                |> Outcome.withDefault "is-info"

        contentSuccessRatio =
            Outcome.map2 successRatio contentWordLength optSuccessWordRange

        ratioAndStatus =
            Outcome.map2 tupleify contentSuccessRatio themeBasedOnRange

        -- optional html to display
        addTagTheme =
            appendAttributeIfSuccess class (themeBasedOnRange |> Validation.addStringPrefix "tag ")

        addProgressBar =
            appendIfSuccess progressBar ratioAndStatus

        addContentLength =
            appendIfSuccess (\v -> text (toString v)) contentWordLength

        addTargetLength =
            appendIfSuccess (\tuple -> tag { text = first tuple |> toString, style = "is-dark" }) optSuccessWordRange
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
                [ text "/ 200" ]
            ]
        ]


displayTextInfo : TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
displayTextInfo adapter userSettings settings state =
    div [ class "field is-grouped is-grouped-multiline" ]
        [ displayCharsProgress adapter userSettings settings state
        , textWordProgressBar adapter userSettings settings state
        ]


{-| The core representation of a field.
-}
view : TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
view adapter userSettings settings state =
    let
        addPlaceholder =
            appendAttributeIfSuccess placeholder (getPlaceholder settings)

        addValue =
            appendAttributeIfSuccess value (getContent state)

        addRows =
            appendAttributeIfSuccess (attribute "rows") (getContent state |> Outcome.map calculateRows)
    in
    div [ class "box is-marginless is-paddingless is-shadowless has-addons" ]
        [ textarea
            ([ class "textarea is-marginless is-paddingless is-shadowless"
             , onInput adapter.onInput
             ]
                |> addPlaceholder
                |> addValue
                |> addRows
            )
            []
        , displayTextInfo adapter userSettings settings state
        ]
