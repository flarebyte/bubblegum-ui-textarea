module WidgetDoc exposing (..)

import AppModel exposing (AppModel, getSettings)
import AppMsg exposing (AppMsg(..))
import AttributeDoc exposing (AttributeDoc, Cardinality(..), createKey)
import Bubblegum.Entity.Attribute exposing (findAttributeFirstValueByKey)
import Bubblegum.TextArea.Vocabulary exposing (..)
import Debug
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import PackageJson
import WidgetPackageJson


type alias WidgetDoc =
    { meta : PackageJson.Model
    , userSettings : List AttributeDoc
    , settings : List AttributeDoc
    }


textAreaWidgetDoc : WidgetDoc
textAreaWidgetDoc =
    { meta = WidgetPackageJson.meta
    , userSettings =
        [ createKey ui_userLanguage ZeroOrOne [ "en-GB", "ja", "ar", "unknown" ] englishSummaryUserLanguage
        , createKey ui_contentLanguage ZeroOrOne [ "en-GB", "ja", "ar", "unknown" ] englishSummaryContentLanguage
        , createKey ui_rightToLeftEditing ZeroOrOne [ "false", "true", "unknown" ] englishSummaryRightToLeftEditing
        , createKey ui_keyboardShortcutsActive ZeroOrOne [ "false", "true", "unknown" ] englishSummaryKeyboardShortcutsActive
        , createKey ui_audioDescriptionActive ZeroOrOne [ "false", "true", "unknown" ] englishSummaryAudioDescriptionActive
        , createKey ui_accessibilityHighContrastActive ZeroOrOne [ "false", "true", "unknown" ] englishSummaryAccessibilityHighContrastActive
        , createKey ui_accessibilityLargeText ZeroOrOne [ "false", "true", "unknown" ] englishSummaryAccessibilityLargeText
        , createKey ui_accessibilityNoKeyboard ZeroOrOne [ "false", "true", "unknown" ] englishSummaryAccessibilityNoKeyboard
        ]
    , settings =
        [ createKey ui_successMinChars ZeroOrOne [ "30", "60", "90", "-5" ] englishSummarySuccessMinChars
        , createKey ui_successMaxChars ZeroOrOne [ "31", "61", "91", "-5" ] englishSummarySuccessMaxChars
        , createKey ui_dangerMinChars ZeroOrOne [ "20", "50", "80", "-5" ] englishSummaryDangerMinChars
        , createKey ui_dangerMaxChars ZeroOrOne [ "21", "51", "81", "-5" ] englishSummaryDangerMaxChars
        , createKey ui_successMinWords ZeroOrOne [ "30", "60", "90", "-5" ] englishSummarySuccessMinWords
        , createKey ui_successMaxWords ZeroOrOne [ "31", "61", "91", "-5" ] englishSummarySuccessMaxWords
        , createKey ui_dangerMinWords ZeroOrOne [ "20", "50", "80", "-5" ] englishSummaryDangerMinWords
        , createKey ui_dangerMaxWords ZeroOrOne [ "21", "51", "120", "-5" ] englishSummaryDangerMaxWords
        , createKey ui_placeholder ZeroOrOne [ "Some placeholder", "プレースホルダ" ] englishSummaryPlaceholder
        , createKey ui_label ZeroOrOne [ "Some label", "ラベル", "ضع الكلمة المناسبة" ] englishSummaryLabel
        , createKey ui_help ZeroOrOne [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "助けて" ] englishSummaryHelp
        , createKey ui_icon ZeroOrOne [ "fa-desktop", "fa-microchip" ] englishSummaryIcon
        , createKey ui_inputSize ZeroOrOne [ "is-small", "is-medium", "is-large", "bad value" ] englishSummaryInputSize
        , createKey ui_inputState ZeroOrOne [ "is-hovered", "is-focused", "is-loading", "bad value" ] englishSummaryInputState
        , createKey ui_readOnly ZeroOrOne [ "true", "false", "weird" ] englishSummaryReadOnly
        ]
    }


viewHeader =
    div []
        [ h1 [ class "title" ]
            [ text textAreaWidgetDoc.meta.exposed ]
        , h2 [ class "subtitle" ]
            [ text textAreaWidgetDoc.meta.summary ]
        ]


viewRadioItem : Bool -> String -> Maybe String -> String -> Html AppMsg
viewRadioItem isUserSettings key actual value =
    let
        labelStyle =
            actual
                |> Maybe.map
                    (\v ->
                        if v == value then
                            "has-text-success has-text-weight-bold"
                        else
                            ""
                    )
                |> Maybe.withDefault ""
    in
    label [ class "radio" ]
        [ input [ name key, type_ "radio", onClick (OnSelectSetting isUserSettings key value) ]
            []
        , span [ class labelStyle ] [ text value ]
        ]


viewSelectedBox : Bool -> String -> Html AppMsg
viewSelectedBox isUserSettings key =
    button [ class "button", onClick (OnActivateSetting isUserSettings key) ]
        [ span [ class "icon is-small" ]
            [ i [ class "fas fa-trash" ]
                []
            ]
        ]


viewRadioSettings : AppModel -> Bool -> AttributeDoc -> Html AppMsg
viewRadioSettings model isUserSettings attrDoc =
    let
        actualSettings =
            getSettings isUserSettings model

        actualValue =
            findAttributeFirstValueByKey attrDoc.key (actualSettings.attributes |> Debug.log "actual")
    in
    attrDoc.suggestions |> List.map (viewRadioItem isUserSettings attrDoc.key actualValue) |> div [ class "control" ]


viewRadioSettingsWithLabel : AppModel -> Bool -> AttributeDoc -> Html AppMsg
viewRadioSettingsWithLabel model isUserSettings attrDoc =
    div [ class "field" ]
        [ label [ class "label" ]
            [ text attrDoc.key ]
        , viewRadioSettings model isUserSettings attrDoc
        , viewSelectedBox isUserSettings attrDoc.key
        , p [ class "help is-info" ]
            [ text attrDoc.description ]
        ]


viewSettings : AppModel -> Html AppMsg
viewSettings model =
    div [ class "box scrollable" ]
        [ h3 [ class "title" ] [ text "User Settings" ]
        , div [ class "box" ] (textAreaWidgetDoc.userSettings |> List.map (viewRadioSettingsWithLabel model True))
        , h3 [ class "title" ] [ text "Settings" ]
        , div [ class "box" ] (textAreaWidgetDoc.settings |> List.map (viewRadioSettingsWithLabel model False))
        ]
