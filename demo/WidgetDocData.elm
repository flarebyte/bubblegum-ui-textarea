module WidgetDocData exposing (textAreaWidgetDoc)

import AttributeDoc exposing (AttributeDoc, Cardinality(..), createKey)
import Bubblegum.TextArea.Vocabulary exposing (..)
import KeyDescription exposing (..)
import WidgetDoc exposing (..)
import WidgetPackageJson


{-| Some examples of settings for the demo.

    **Generated** by generate-vocabulary.py

-}
textAreaWidgetDoc : WidgetDoc
textAreaWidgetDoc =
    { meta = WidgetPackageJson.meta
    , userSettings =
        [ createKey ui_userLanguage ZeroOrOne [ "en-GB", "ja", "ar", "other" ] descUserLanguage
        , createKey ui_contentLanguage ZeroOrOne [ "en-GB", "ja", "ar", "other" ] descContentLanguage
        , createKey ui_userRightToLeft ZeroOrOne [ "true", "false", "other" ] descUserRightToLeft
        , createKey ui_contentRightToLeft ZeroOrOne [ "true", "false", "other" ] descContentRightToLeft
        , createKey ui_accessibilityLargeText ZeroOrOne [ "true", "false", "other" ] descAccessibilityLargeText
        ]
    , settings =
        [ createKey ui_successMinimumChars ZeroOrOne [ "0", "20", "40", "80", "160", "320", "-5" ] descSuccessMinimumChars
        , createKey ui_successMaximumChars ZeroOrOne [ "0", "20", "40", "80", "160", "320", "-5" ] descSuccessMaximumChars
        , createKey ui_dangerMinimumChars ZeroOrOne [ "0", "20", "40", "80", "160", "320", "-5" ] descDangerMinimumChars
        , createKey ui_dangerMaximumChars ZeroOrOne [ "0", "20", "40", "80", "160", "320", "-5" ] descDangerMaximumChars
        , createKey ui_successMinimumWords ZeroOrOne [ "0", "20", "40", "80", "160", "320", "-5" ] descSuccessMinimumWords
        , createKey ui_successMaximumWords ZeroOrOne [ "0", "20", "40", "80", "160", "320", "-5" ] descSuccessMaximumWords
        , createKey ui_dangerMinimumWords ZeroOrOne [ "0", "20", "40", "80", "160", "320", "-5" ] descDangerMinimumWords
        , createKey ui_dangerMaximumWords ZeroOrOne [ "0", "20", "40", "80", "160", "320", "-5" ] descDangerMaximumWords
        , createKey ui_placeholder ZeroOrOne [ "Some placeholder", "プレースホルダ", "other" ] descPlaceholder
        , createKey ui_label ZeroOrOne [ "Some label", "ラベル", "ضع الكلمة المناسبة", "other" ] descLabel
        , createKey ui_help ZeroOrOne [ "Lorem ipsum dolor sit amet consectetur adipiscing elit.", "助けて", "other" ] descHelp
        , createKey ui_tag ZeroOrOne [ "it", "learning", "elm", "other" ] descTag
        ]
    , stateAttributes =
        [ createKey ui_dangerHelp ZeroOrOne [ "do not do this", "other" ] descDangerHelp
        , createKey ui_content ZeroOrOne [ "some content", "other" ] descContent
        , createKey ui_successTag ZeroOrOne [ "spelling", "concise", "italian", "other" ] descSuccessTag
        , createKey ui_warningTag ZeroOrOne [ "grammar", "synonyms", "other" ] descWarningTag
        , createKey ui_dangerTag ZeroOrOne [ "sensitive", "save", "other" ] descDangerTag
        ]
    }
