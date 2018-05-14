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
import Bubblegum.TextArea.VocabularyHelper exposing (..)
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
        optSuccessWordRange =
            getSuccessWordRange settings

        optSuccessCharRange =
            getSuccessCharRange settings

        contentWordLength =
            getContent state |> Outcome.map numberOfWords

        contentCharLength =
            getContent state |> Outcome.map String.length

        labelForWord =
            contentWordLength |> Outcome.map (getUserLanguageOrEnglish userSettings |> translateWord) |> Outcome.toMaybe |> Maybe.withDefault ""

        themeWordBasedOnRange =
            themeProgress (Outcome.map2 successRange contentWordLength optSuccessWordRange)
                (Outcome.map2 dangerRange contentWordLength <| getDangerWordRange settings)

        themeCharBasedOnRange =
            themeProgress (Outcome.map2 successRange contentCharLength optSuccessCharRange)
                (Outcome.map2 dangerRange contentCharLength <| getDangerCharRange settings)

        wordRatioAndStatus =
            Outcome.map2 tupleify (Outcome.map2 successRatio contentWordLength optSuccessWordRange) themeWordBasedOnRange

        charRatioAndStatus =
            Outcome.map2 tupleify (Outcome.map2 successRatio contentCharLength optSuccessCharRange) themeCharBasedOnRange

        wordLengthAndStatus =
            Outcome.map2 styleTextWord contentWordLength themeWordBasedOnRange

        charLengthAndStatus =
            Outcome.map2 styleTextChar contentCharLength themeCharBasedOnRange

        -- optional html to display
        -- Char counter
        addCharContentLength =
            appendHtmlIfSuccess tag charLengthAndStatus

        addCharTargetLength =
            appendHtmlIfSuccess (\tuple -> tag { text = first tuple |> toString, style = "is-dark", ariaLabel = "minimum number of characters expected" }) optSuccessCharRange

        addCharProgressBar =
            appendHtmlIfSuccess progressBar charRatioAndStatus

        addCharInfo =
            tags <| ([] |> addCharContentLength |> addCharTargetLength)

        -- Word counter
        addWordContentLength =
            appendHtmlIfSuccess tag wordLengthAndStatus

        addWordTargetLength =
            appendHtmlIfSuccess (\tuple -> tag { text = first tuple |> toString, style = "is-dark", ariaLabel = "minimum number of words expected" }) optSuccessWordRange

        addWordProgressBar =
            appendHtmlIfSuccess progressBar wordRatioAndStatus

        addLabelForWord =
            flip (++) [ tag { text = labelForWord, style = "is-light", ariaLabel = "unit" } ]

        addWordInfo =
            tags <| ([] |> addWordContentLength |> addWordTargetLength |> addLabelForWord)

        addTagsInfo =
            tagsInfo [ "alpha", "beta" ]
    in
    groupFields
        [ div [ class "bubblegum-textarea__wordinfo control" ] (addWordInfo |> List.singleton |> addWordProgressBar)
        , div [ class "bubblegum-textarea__charinfo control" ] (addCharInfo |> List.singleton |> addCharProgressBar)
        , div [ class "control" ] [ text "    " ]
        , div [ class "bubblegum-textarea__tagsinfo control" ] [ addTagsInfo ]
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

        addLabel =
            appendHtmlIfSuccess widgetLabel (getLabel settings)

        addHelp =
            appendHtmlIfSuccess infoHelp (getHelp settings)
    in
    mainBox
        (addLabel []
            ++ [ div [ class "control" ]
                    [ textarea
                        ([ class "bubblegum-textarea__input textarea is-marginless is-paddingless is-shadowless"
                         , onInput adapter.onInput
                         ]
                            |> addPlaceholder
                            |> addValue
                            |> addRows
                        )
                        []
                    , displayTextInfo adapter userSettings settings state
                    ]
               ]
            |> addHelp
        )
