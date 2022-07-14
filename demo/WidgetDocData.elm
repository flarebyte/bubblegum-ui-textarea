module WidgetDocData exposing (textAreaWidgetDoc)

import AttributeDoc exposing (AttributeDoc, Cardinality(..), createKey)
import Bubblegum.TextArea.Vocabulary exposing (..)
import KeyDescription exposing (..)
import WidgetDoc exposing (..)
import WidgetPackageJson


{-| Some examples of settings for the demo.

    **generated** with make generate

-}
textAreaWidgetDoc : WidgetDoc
textAreaWidgetDoc =
    { meta = WidgetPackageJson.meta
    , userSettings =
        [ createKey ui_contentLanguage ZeroOrOne [ "en-GB", "ja", "ar", "zh-CN-SC", "ru-RUS", "es", "it", "fr" ] descContentLanguage
        , createKey ui_contentRightToLeft ZeroOrOne [ "true", "false" ] descContentRightToLeft
        , createKey ui_userLanguage ZeroOrOne [ "en-GB", "ja", "ar", "zh-CN-SC", "ru-RUS", "es", "it", "fr" ] descUserLanguage
        , createKey ui_userRightToLeft ZeroOrOne [ "true", "false" ] descUserRightToLeft
        ]
    , settings =
        [ createKey ui_dangerMaximumChars ZeroOrOne [ "80", "160", "320" ] descDangerMaximumChars
        , createKey ui_dangerMaximumWords ZeroOrOne [ "40", "80", "160" ] descDangerMaximumWords
        , createKey ui_dangerMinimumChars ZeroOrOne [ "0", "20", "40" ] descDangerMinimumChars
        , createKey ui_dangerMinimumWords ZeroOrOne [ "0", "10", "20" ] descDangerMinimumWords
        , createKey ui_help ZeroOrOne [ "Lorem ipsum dolor sit amet consectetur adipiscing elit.", "助けて" ] descHelp
        , createKey ui_label ZeroOrOne [ "Some label", "ラベル", "ضع الكلمة المناسبة" ] descLabel
        , createKey ui_placeholder ZeroOrOne [ "Some placeholder", "プレースホルダ" ] descPlaceholder
        , createKey ui_successMaximumChars ZeroOrOne [ "70", "150", "310" ] descSuccessMaximumChars
        , createKey ui_successMaximumWords ZeroOrOne [ "30", "70", "150" ] descSuccessMaximumWords
        , createKey ui_successMinimumChars ZeroOrOne [ "1", "10", "20" ] descSuccessMinimumChars
        , createKey ui_successMinimumWords ZeroOrOne [ "1", "10", "20" ] descSuccessMinimumWords
        , createKey ui_tag ZeroOrOne [ "it", "learning", "elm" ] descTag
        ]
    , stateAttributes =
        [ createKey ui_contentId ZeroOrOne [ "id:aa61e603-9947-4fd8-86bb-d63a682259d0 " ] descContentId
        , createKey ui_content ZeroOrOne [ "some content " ] descContent
        , createKey ui_dangerHelp ZeroOrOne [ "do not do this" ] descDangerHelp
        , createKey ui_dangerTag ZeroOrOne [ "sensitive", "save" ] descDangerTag
        , createKey ui_successTag ZeroOrOne [ "spelling", "concise", "italian" ] descSuccessTag
        , createKey ui_warningTag ZeroOrOne [ "grammar", "synonyms" ] descWarningTag
        ]
    }
