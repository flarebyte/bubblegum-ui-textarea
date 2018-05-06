module Bubblegum.TextArea.Helper exposing (..)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.Attribute as Attribute
import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Validation as Validation
import Bubblegum.TextArea.Vocabulary exposing (..)
import List
import Maybe exposing (..)
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


titleCharRange : ( Int, Int )
titleCharRange =
    ( 1, 70 )


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



-- The new title length is 70 characters before Google will truncate the title with ellipses


keywordCharRange : ( Int, Int )
keywordCharRange =
    ( 1, 30 )


charRange : ( Int, Int )
charRange =
    ( 0, 60000 )


wordRange : ( Int, Int )
wordRange =
    ( 0, 12000 )


limit100 : Int -> Int
limit100 value =
    if value > 100 then
        100
    else
        value


numberOfWords : String -> Int
numberOfWords someText =
    String.words someText |> List.length


themeProgress : Outcome Bool -> Outcome Bool -> Outcome String
themeProgress a b =
    Outcome.or
        (a |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-success")
        (b |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-danger")
        |> Outcome.withDefault "is-info"


{-| The core representation of a field.
-}
calculateRatio : Int -> Int -> Int
calculateRatio target value =
    (toFloat value / toFloat target) * 100 |> round |> limit100


findIntRange : ( String, String ) -> List Attribute.Model -> Outcome ( Int, Int )
findIntRange keyTuple attributes =
    Attribute.findOutcomeByKeyTuple keyTuple attributes
        |> Validation.asTuple
        |> Validation.asIntTuple
        |> Validation.asIntRange


findString : String -> List Attribute.Model -> Outcome String
findString key attributes =
    Attribute.findOutcomeByKey key attributes |> Validation.asSingle


getSuccessCharRange : SettingsEntity.Model -> Outcome ( Int, Int )
getSuccessCharRange settings =
    findIntRange ( ui_successMinChars, ui_successMaxChars ) settings.attributes
        |> Validation.withinIntRange charRange


getDangerCharRange : SettingsEntity.Model -> Outcome ( Int, Int )
getDangerCharRange settings =
    findIntRange ( ui_dangerMinChars, ui_dangerMaxChars ) settings.attributes
        |> Validation.withinIntRange charRange


getSuccessWordRange : SettingsEntity.Model -> Outcome ( Int, Int )
getSuccessWordRange settings =
    findIntRange ( ui_successMinWords, ui_successMaxWords ) settings.attributes
        |> Validation.withinIntRange wordRange


getDangerWordRange : SettingsEntity.Model -> Outcome ( Int, Int )
getDangerWordRange settings =
    findIntRange ( ui_dangerMinWords, ui_dangerMaxWords ) settings.attributes
        |> Validation.withinIntRange wordRange


getPlaceholder : SettingsEntity.Model -> Outcome String
getPlaceholder settings =
    findString ui_placeholder settings.attributes
        |> Validation.withinStringCharsRange titleCharRange


getLabel : SettingsEntity.Model -> Outcome String
getLabel settings =
    findString ui_label settings.attributes
        |> Validation.withinStringCharsRange titleCharRange


getHelp : SettingsEntity.Model -> Outcome String
getHelp settings =
    findString ui_help settings.attributes
        |> Validation.withinStringCharsRange titleCharRange


getIcon : SettingsEntity.Model -> Outcome String
getIcon settings =
    findString ui_icon settings.attributes
        |> Validation.withinStringCharsRange keywordCharRange


getInputSize : SettingsEntity.Model -> Outcome String
getInputSize settings =
    findString ui_inputSize settings.attributes
        |> Validation.matchEnum [ "is-small", "is-medium", "is-large" ]


getInputState : StateEntity.Model -> Outcome String
getInputState state =
    findString ui_inputState state.attributes
        |> Validation.matchEnum [ "is-hovered", "is-focused", "is-loading" ]


isReadOnly : StateEntity.Model -> Outcome Bool
isReadOnly state =
    findString ui_readOnly state.attributes
        |> Validation.asBool


isDisabled : StateEntity.Model -> Outcome Bool
isDisabled state =
    findString ui_disabled state.attributes
        |> Validation.asBool


getContent : SettingsEntity.Model -> Outcome String
getContent state =
    findString ui_content state.attributes
        |> Validation.withinStringCharsRange charRange


getUserLanguageOrEnglish : SettingsEntity.Model -> String
getUserLanguageOrEnglish state =
    findString ui_userLanguage state.attributes
        |> Validation.withinStringCharsRange ( 2, 10 )
        |> Outcome.toMaybe
        |> Maybe.withDefault "en-GB"


getContentLanguageOrEnglish : SettingsEntity.Model -> String
getContentLanguageOrEnglish state =
    findString ui_userLanguage state.attributes
        |> Validation.withinStringCharsRange ( 2, 10 )
        |> Outcome.toMaybe
        |> Maybe.withDefault "en-GB"


isUserRightToLeft : StateEntity.Model -> Outcome Bool
isUserRightToLeft state =
    findString ui_userRightToLeft state.attributes
        |> Validation.asBool


isContentRightToLeft : StateEntity.Model -> Outcome Bool
isContentRightToLeft state =
    findString ui_contentRightToLeft state.attributes
        |> Validation.asBool
