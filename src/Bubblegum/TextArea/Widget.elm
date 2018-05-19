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
        userIsoLanguage =
            getUserIsoLanguage userSettings

        optSuccessWordRange =
            getSuccessWordRange settings

        optSuccessCharRange =
            getSuccessCharRange settings

        contentWordLength =
            getContent state |> Outcome.map numberOfWords

        contentCharLength =
            getContent state |> Outcome.map String.length

        labelForWord =
            contentWordLength |> Outcome.map (translateWord userIsoLanguage) |> Outcome.toMaybe |> Maybe.withDefault ""

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
            Outcome.map2 (styleTextWord userIsoLanguage) contentWordLength themeWordBasedOnRange

        charLengthAndStatus =
            Outcome.map2 (styleTextChar userIsoLanguage) contentCharLength themeCharBasedOnRange

        -- optional html to display
        -- Char counter
        addCharContentLength =
            appendHtmlIfSuccess tag charLengthAndStatus

        addCharTargetLength =
            appendHtmlIfSuccess (minimumCharsTag userIsoLanguage) optSuccessCharRange

        addCharProgressBar =
            appendHtmlIfSuccess progressBar charRatioAndStatus

        addCharInfo =
            tagsAddons <| ([] |> addCharContentLength |> addCharTargetLength)

        -- Word counter
        addWordContentLength =
            appendHtmlIfSuccess tag wordLengthAndStatus

        addWordTargetLength =
            appendHtmlIfSuccess (minimumWordsTag userIsoLanguage) optSuccessWordRange

        addWordProgressBar =
            appendHtmlIfSuccess progressBar wordRatioAndStatus

        addLabelForWord =
            flip (++) [ unitTag userIsoLanguage labelForWord ]

        addWordInfo =
            tagsAddons <| ([] |> addWordContentLength |> addWordTargetLength |> addLabelForWord)

        addTagsInfo =
            appendHtmlIfSuccess (tagsInfo userIsoLanguage) (getTag settings)

        addSuccessTags =
            appendHtmlIfSuccess (tagsSuccess userIsoLanguage) (getSuccessTag state)

        addWarningTags =
            appendHtmlIfSuccess (tagsWarning userIsoLanguage) (getWarningTag state)

        addDangerTags =
            appendHtmlIfSuccess (tagsDanger userIsoLanguage) (getDangerTag state)
    in
    groupFields
        [ div [ class "bubblegum-textarea__wordinfo control" ] (addWordInfo |> List.singleton |> addWordProgressBar)
        , div [ class "bubblegum-textarea__charinfo control" ] (addCharInfo |> List.singleton |> addCharProgressBar)
        , div [ class "control" ] [ text "    " ]
        , div [ class "bubblegum-textarea__tagsinfo control" ] [ tags ([] |> addTagsInfo |> addDangerTags |> addWarningTags |> addSuccessTags) ]
        ]


{-| The core representation of a field.
-}
view : TextAreaAdapter.Model msg -> SettingsEntity.Model -> SettingsEntity.Model -> StateEntity.Model -> Html msg
view adapter userSettings settings state =
    let
        addPlaceholder =
            appendAttributeIfSuccess placeholder (getPlaceholder settings)

        addContentLanguage =
            appendAttributeIfSuccess lang (getContentLanguage userSettings)

        addContentRtl =
            appendAttributeIfSuccess dir <| (isContentRightToLeft userSettings |> Outcome.map rtlOrLtr)

        addValue =
            appendAttributeIfSuccess value (getContent state)

        addRows =
            appendAttributeIfSuccess (attribute "rows") (getContent state |> Outcome.map calculateRows)

        addLabel =
            appendHtmlIfSuccess widgetLabel (getLabel settings)

        addHelp =
            appendHtmlIfSuccess infoHelp (getHelp settings)

        addDangerHelp =
            appendHtmlIfSuccess dangerHelp (getDangerHelp state)
    in
    mainBox (getUserLanguage userSettings)
        (isUserRightToLeft userSettings)
        (addLabel []
            ++ [ div [ class "control" ]
                    [ textarea
                        ([ class "bubblegum-textarea__input textarea is-marginless is-paddingless is-shadowless"
                         , onInput adapter.onInput
                         ]
                            |> addPlaceholder
                            |> addContentLanguage
                            |> addContentRtl
                            |> addValue
                            |> addRows
                        )
                        []
                    , displayTextInfo adapter userSettings settings state
                    ]
               ]
            |> addDangerHelp
            |> addHelp
        )
