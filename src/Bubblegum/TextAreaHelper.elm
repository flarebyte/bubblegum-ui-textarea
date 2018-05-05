module Bubblegum.TextAreaHelper exposing (..)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.Attribute as Attribute
import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Validation as Validation
import Bubblegum.TextAreaVocabulary exposing (..)
import Html as Html exposing (Attribute)
import Html.Attributes as Attributes exposing (attribute)
import Maybe exposing (..)


titleCharRange =
    ( 1, 70 )



-- The new title length is 70 characters before Google will truncate the title with ellipses


keywordCharRange =
    ( 1, 30 )


charRange =
    ( 0, 60000 )


wordRange =
    ( 0, 12000 )


limit100 : Int -> Int
limit100 value =
    if value > 100 then
        100
    else
        value


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


appendIfSuccess : (a -> Html.Html msg) -> Outcome a -> List (Html.Html msg) -> List (Html.Html msg)
appendIfSuccess ifSuccess outcome htmlList =
    case outcome of
        None ->
            htmlList

        Warning warn ->
            htmlList ++ [ Html.div [ Attributes.class "is-not-invisible" ] [ Html.text warn ] ]

        Valid success ->
            htmlList ++ [ ifSuccess success ]


appendAttributeIfSuccess : (a -> Attribute msg) -> Outcome a -> List (Attribute msg) -> List (Attribute msg)
appendAttributeIfSuccess ifSuccess outcome attributes =
    case outcome of
        None ->
            attributes

        Warning warn ->
            attributes ++ [ attribute "bubblegum-warn" warn ]

        Valid success ->
            attributes ++ [ ifSuccess success ]


getContent : SettingsEntity.Model -> Outcome String
getContent state =
    findString ui_content state.attributes
        |> Validation.withinStringCharsRange charRange


getEditingLanguageOrEnglish : SettingsEntity.Model -> String
getEditingLanguageOrEnglish state =
    findString ui_editingLanguage state.attributes
        |> Validation.withinStringCharsRange ( 2, 10 )
        |> Outcome.toMaybe
        |> Maybe.withDefault "en-GB"
