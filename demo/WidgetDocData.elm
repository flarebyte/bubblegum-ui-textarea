module WidgetDocData exposing (textAreaWidgetDoc)

import AttributeDoc exposing (AttributeDoc, Cardinality(..), createKey)
import Bubblegum.TextArea.Vocabulary exposing (..)
import KeyDescription exposing (..)
import WidgetDoc exposing (..)
import WidgetPackageJson


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
