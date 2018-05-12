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
import KeyDescription exposing (..)
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
        [ createKey ui_userLanguage ZeroOrOne [ "en-GB", "ja", "ar", "unknown" ] descUserLanguage
        , createKey ui_contentLanguage ZeroOrOne [ "en-GB", "ja", "ar", "unknown" ] descContentLanguage
        , createKey ui_userRightToLeft ZeroOrOne [ "false", "true", "unknown" ] descUserRightToLeft
        , createKey ui_contentRightToLeft ZeroOrOne [ "false", "true", "unknown" ] descContentRightToLeft
        , createKey ui_accessibilityLargeText ZeroOrOne [ "false", "true", "unknown" ] descAccessibilityLargeText
        ]
    , settings =
        [ createKey ui_successMinimumChars ZeroOrOne [ "30", "60", "90", "-5" ] descSuccessMinimumChars
        , createKey ui_successMaximumChars ZeroOrOne [ "31", "61", "91", "-5" ] descSuccessMaximumChars
        , createKey ui_dangerMinimumChars ZeroOrOne [ "20", "50", "80", "-5" ] descDangerMinimumChars
        , createKey ui_dangerMaximumChars ZeroOrOne [ "21", "51", "81", "-5" ] descDangerMaximumChars
        , createKey ui_successMinimumWords ZeroOrOne [ "30", "60", "90", "-5" ] descSuccessMinimumWords
        , createKey ui_successMaximumWords ZeroOrOne [ "31", "61", "91", "-5" ] descSuccessMaximumWords
        , createKey ui_dangerMinimumWords ZeroOrOne [ "20", "50", "80", "-5" ] descDangerMinimumWords
        , createKey ui_dangerMaximumWords ZeroOrOne [ "21", "51", "120", "-5" ] descDangerMaximumWords
        , createKey ui_placeholder ZeroOrOne [ "Some placeholder", "プレースホルダ" ] descPlaceholder
        , createKey ui_label ZeroOrOne [ "Some label", "ラベル", "ضع الكلمة المناسبة" ] descLabel
        , createKey ui_help ZeroOrOne [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "助けて" ] descHelp
        ]
    }


viewHeader =
    div []
        [ h1 [ class "title" ]
            [ text (textAreaWidgetDoc.meta.exposedModules |> List.head |> Maybe.withDefault "?") ]
        , h2 [ class "subtitle" ]
            [ text textAreaWidgetDoc.meta.summary
            ]
        , div
            [ class "field is-grouped is-grouped-multiline" ]
            [ div [ class "control" ]
                [ div [ class "tags has-addons" ]
                    [ span [ class "tag is-dark" ]
                        [ text "version" ]
                    , span [ class "tag is-info" ]
                        [ text textAreaWidgetDoc.meta.version ]
                    ]
                ]
            , div [ class "control" ]
                [ div [ class "tags has-addons" ]
                    [ span [ class "tag is-dark" ]
                        [ text "license" ]
                    , span [ class "tag is-success" ]
                        [ text textAreaWidgetDoc.meta.license ]
                    ]
                ]
            , div [ class "control" ]
                [ a [ class "button is-small", href textAreaWidgetDoc.meta.repository ]
                    [ span [ class "icon is-small" ]
                        [ i [ class "fab fa-github" ]
                            []
                        ]
                    , span []
                        [ text "GitHub" ]
                    ]
                ]
            ]
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
