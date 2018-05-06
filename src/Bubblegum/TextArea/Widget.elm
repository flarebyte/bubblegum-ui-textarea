module Bubblegum.TextArea.Widget exposing (view)

{-| Setting key

@docs view

-}

import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Validation as Validation
import Bubblegum.TextArea.Adapter as TextAreaAdapter
import Bubblegum.TextArea.Helper exposing (..)
import Bubblegum.TextArea.Internationalization exposing (translateWord)
import Debug
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick, onInput, onMouseEnter, onMouseOut)
import List
import Maybe
import String exposing (lines, words)
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


tagWithIcon : String -> String -> String -> String -> Html msg
tagWithIcon tagName tagStyle iconName iconStyle =
    div [ class "tags has-addons" ]
        [ span [ class ("tag " ++ tagStyle) ]
            [ text tagName ]
        , span [ class ("icon " ++ iconStyle) ]
            [ i [ class ("fas " ++ iconName) ]
                []
            ]
        ]


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
            getContent state |> Outcome.map (\c -> String.words c |> List.length)

        labelForWord =
            contentWordLength |> Outcome.map (translateWord userLanguage) |> Outcome.toMaybe |> Maybe.withDefault ""

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

        -- optional html to display
        addTagTheme =
            appendAttributeIfSuccess class (themeBasedOnRange |> Validation.addStringPrefix "tag ")

        addProgressBar =
            appendIfSuccess progressBar ratioAndStatus

        addContentLength =
            appendIfSuccess (\v -> text (toString v)) (contentWordLength |> Debug.log "contentWordLength")

        addTargetLength =
            appendIfSuccess (\tuple -> tagWithIcon (first tuple |> toString) "tag is-dark" "fa-bullseye" "has-text-info") optSuccessWordRange
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


{-| rows = number of lines + lines of with an average 80 chars
-}
calculateRows : String -> String
calculateRows content =
    let
        carriageReturns =
            content |> lines |> List.length

        numberOfChars =
            content |> String.length

        numberOfAvgLines =
            numberOfChars // 80

        numberOfLines =
            carriageReturns + numberOfAvgLines + 1
    in
    toString
        (if numberOfLines < 40 then
            numberOfLines
         else
            40
        )


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