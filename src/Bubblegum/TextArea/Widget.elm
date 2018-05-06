module Bubblegum.TextArea.Widget exposing (view)

{-| Setting key

@docs view

-}

import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
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


displayTextInfo : TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
displayTextInfo adapter userSettings settings state =
    let
        userLanguage =
            getUserLanguageOrEnglish userSettings

        optSuccessWordRange =
            getSuccessWordRange settings

        optDangerWordRange =
            getDangerWordRange settings

        optSuccessCharRange =
            getSuccessCharRange settings

        optDangerCharRange =
            getDangerCharRange settings

        contentWordLength =
            getContent state |> Outcome.map numberOfWords

        contentCharLength =
            getContent state |> Outcome.map String.length

        labelForWord =
            contentWordLength |> Outcome.map (translateWord userLanguage) |> Outcome.toMaybe |> Maybe.withDefault ""

        contentWordWithinSuccessRange =
            Outcome.map2 successRange contentWordLength optSuccessWordRange

        contentWordWithinDangerRange =
            Outcome.map2 dangerRange contentWordLength optDangerWordRange

        contentCharWithinSuccessRange =
            Outcome.map2 successRange contentCharLength optSuccessCharRange

        contentCharWithinDangerRange =
            Outcome.map2 dangerRange contentCharLength optDangerCharRange

        themeWordBasedOnRange =
            Outcome.or
                (contentWordWithinSuccessRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-success")
                (contentWordWithinDangerRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-danger")
                |> Outcome.withDefault "is-info"

        themeCharBasedOnRange =
            Outcome.or
                (contentCharWithinSuccessRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-success")
                (contentCharWithinDangerRange |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-danger")
                |> Outcome.withDefault "is-info"

        contentWordSuccessRatio =
            Outcome.map2 successRatio contentWordLength optSuccessWordRange

        contentCharSuccessRatio =
            Outcome.map2 successRatio contentCharLength optSuccessWordRange

        wordRatioAndStatus =
            Outcome.map2 tupleify contentWordSuccessRatio themeWordBasedOnRange

        charRatioAndStatus =
            Outcome.map2 tupleify contentCharSuccessRatio themeCharBasedOnRange

        wordLengthAndStatus =
            Outcome.map2 styleTextInt contentWordLength themeWordBasedOnRange

        charLengthAndStatus =
            Outcome.map2 styleTextInt contentCharLength themeCharBasedOnRange

        -- optional html to display
        -- Char counter
        addCharContentLength =
            appendHtmlIfSuccess tag charLengthAndStatus

        addCharTargetLength =
            appendHtmlIfSuccess (\tuple -> tag { text = first tuple |> toString, style = "is-dark" }) optSuccessCharRange

        addCharProgressBar =
            appendHtmlIfSuccess progressBar charRatioAndStatus

        addCharInfo =
            tags <| ([] |> addCharContentLength |> addCharTargetLength)

        -- Word counter
        addWordContentLength =
            appendHtmlIfSuccess tag wordLengthAndStatus

        addWordTargetLength =
            appendHtmlIfSuccess (\tuple -> tag { text = first tuple |> toString, style = "is-dark" }) optSuccessWordRange

        addWordProgressBar =
            appendHtmlIfSuccess progressBar wordRatioAndStatus

        addLabelForWord =
            flip (++) [ tag { text = labelForWord, style = "is-light" } ]

        addWordInfo =
            tags <| ([] |> addWordContentLength |> addWordTargetLength |> addLabelForWord)
    in
    groupFields
        [ div [ class "control" ] (addWordInfo |> List.singleton |> addWordProgressBar)
        , div [ class "control" ] (addCharInfo |> List.singleton |> addCharProgressBar)
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
