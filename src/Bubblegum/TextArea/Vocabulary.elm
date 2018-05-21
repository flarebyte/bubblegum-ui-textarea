module Bubblegum.TextArea.Vocabulary exposing (..)

{-| List of keys used for the settings

    **Generated** by generate-vocabulary.py

-}


{-| The unique id of the content. (String)
-}
ui_contentId : String
ui_contentId =
    "ui:content-id"


{-| Language of the content. (String)
-}
ui_contentLanguage : String
ui_contentLanguage =
    "ui:content-language"


{-| Whether the content requires right to left. (Bool)
-}
ui_contentRightToLeft : String
ui_contentRightToLeft =
    "ui:content-right-to-left"


{-| The content of the field. (String)
-}
ui_content : String
ui_content =
    "ui:content"


{-| Help message to highlight an issue with the content. (String)
-}
ui_dangerHelp : String
ui_dangerHelp =
    "ui:danger-help"


{-| Warning when over the maximum number of characters. (Int)
-}
ui_dangerMaximumChars : String
ui_dangerMaximumChars =
    "ui:danger-maximum-chars"


{-| Warning when over the maximum number of words. (Int)
-}
ui_dangerMaximumWords : String
ui_dangerMaximumWords =
    "ui:danger-maximum-words"


{-| Warning when under the minimum number of characters. (Int)
-}
ui_dangerMinimumChars : String
ui_dangerMinimumChars =
    "ui:danger-minimum-chars"


{-| Warning when under the minimum number of words. (Int)
-}
ui_dangerMinimumWords : String
ui_dangerMinimumWords =
    "ui:danger-minimum-words"


{-| Tag representing a dangerous aspect of the content. (List String)
-}
ui_dangerTag : String
ui_dangerTag =
    "ui:danger-tag"


{-| Some help tip related to the field. (String)
-}
ui_help : String
ui_help =
    "ui:help"


{-| Label related to the field. (String)
-}
ui_label : String
ui_label =
    "ui:label"


{-| Short hint describing the expected content. (String)
-}
ui_placeholder : String
ui_placeholder =
    "ui:placeholder"


{-| The maximum number of characters needed for successful content. (Int)
-}
ui_successMaximumChars : String
ui_successMaximumChars =
    "ui:success-maximum-chars"


{-| The maximum number of words needed for successful content. (Int)
-}
ui_successMaximumWords : String
ui_successMaximumWords =
    "ui:success-maximum-words"


{-| The minimum number of characters needed for successful content. (Int)
-}
ui_successMinimumChars : String
ui_successMinimumChars =
    "ui:success-minimum-chars"


{-| The minimum number of words needed for successful content. (Int)
-}
ui_successMinimumWords : String
ui_successMinimumWords =
    "ui:success-minimum-words"


{-| Tag representing a successful facet of the content. (List String)
-}
ui_successTag : String
ui_successTag =
    "ui:success-tag"


{-| Tag used to describe the field. (List String)
-}
ui_tag : String
ui_tag =
    "ui:tag"


{-| Language used by the user. (String)
-}
ui_userLanguage : String
ui_userLanguage =
    "ui:user-language"


{-| Whether the user is using right to left. (Bool)
-}
ui_userRightToLeft : String
ui_userRightToLeft =
    "ui:user-right-to-left"


{-| Tag representing a warning aspect of the content. (List String)
-}
ui_warningTag : String
ui_warningTag =
    "ui:warning-tag"
