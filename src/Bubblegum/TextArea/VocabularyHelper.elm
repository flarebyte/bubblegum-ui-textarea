
module Bubblegum.TextArea.Vocabulary exposing (..)

{-| List of keys used for the settings (generated)

-}


{-|  The minimum number of characters needed for successful content -}
getSuccessMinimumChars : SettingsEntity.Model -> Outcome String
getSuccessMinimumChars settings =
    findString ui_SuccessMinimumChars settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  The maximum number of characters needed for successful content -}
getSuccessMaximumChars : SettingsEntity.Model -> Outcome String
getSuccessMaximumChars settings =
    findString ui_SuccessMaximumChars settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  Warning when under the minimum number of characters -}
getDangerMinimumChars : SettingsEntity.Model -> Outcome String
getDangerMinimumChars settings =
    findString ui_DangerMinimumChars settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  Warning when over the maximum number of characters -}
getDangerMaximumChars : SettingsEntity.Model -> Outcome String
getDangerMaximumChars settings =
    findString ui_DangerMaximumChars settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  The minimum number of words needed for successful content -}
getSuccessMinimumWords : SettingsEntity.Model -> Outcome String
getSuccessMinimumWords settings =
    findString ui_SuccessMinimumWords settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  The maximum number of words needed for successful content -}
getSuccessMaximumWords : SettingsEntity.Model -> Outcome String
getSuccessMaximumWords settings =
    findString ui_SuccessMaximumWords settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  Warning when under the minimum number of words -}
getDangerMinimumWords : SettingsEntity.Model -> Outcome String
getDangerMinimumWords settings =
    findString ui_DangerMinimumWords settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  Warning when over the maximum number of words -}
getDangerMaximumWords : SettingsEntity.Model -> Outcome String
getDangerMaximumWords settings =
    findString ui_DangerMaximumWords settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  Short hint describing the expected content -}
getPlaceholder : SettingsEntity.Model -> Outcome String
getPlaceholder settings =
    findString ui_Placeholder settings.attributes
        |> Validation.withinStringCharsRange limitMediumRangeNotEmpty
    

{-|  Label related to the field -}
getLabel : SettingsEntity.Model -> Outcome String
getLabel settings =
    findString ui_Label settings.attributes
        |> Validation.withinStringCharsRange limitMediumRangeNotEmpty
    

{-|  Some help tip related to the field -}
getHelp : SettingsEntity.Model -> Outcome String
getHelp settings =
    findString ui_Help settings.attributes
        |> Validation.withinStringCharsRange limitMediumRangeNotEmpty
    

{-|  Help message to highlight an issue with the content -}
getDangerHelp : SettingsEntity.Model -> Outcome String
getDangerHelp settings =
    findString ui_DangerHelp settings.attributes
        |> Validation.withinStringCharsRange limitMediumRangeNotEmpty
    

{-|  An icon to be displayed alongside the field -}
getIcon : SettingsEntity.Model -> Outcome String
getIcon settings =
    findString ui_Icon settings.attributes
        |> Validation.withinStringCharsRange limitSmallRangeNotEmpty
    

{-|  The content of the field -}
getContent : SettingsEntity.Model -> Outcome String
getContent settings =
    findString ui_Content settings.attributes
        |> Validation.withinStringCharsRange limitVeryLargeRange
    

{-|  Language used by the user -}
getUserLanguage : SettingsEntity.Model -> Outcome String
getUserLanguage settings =
    findString ui_UserLanguage settings.attributes
        |> Validation.withinStringCharsRange limitSmallRangeNotEmpty
    

{-|  Language of the content -}
getContentLanguage : SettingsEntity.Model -> Outcome String
getContentLanguage settings =
    findString ui_ContentLanguage settings.attributes
        |> Validation.withinStringCharsRange limitSmallRangeNotEmpty
    

{-|  Whether the user is using right to left -}
getUserRightToLeft : SettingsEntity.Model -> Outcome String
getUserRightToLeft settings =
    findString ui_UserRightToLeft settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  Whether the content requires right to left -}
getContentRightToLeft : SettingsEntity.Model -> Outcome String
getContentRightToLeft settings =
    findString ui_ContentRightToLeft settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  Whether the user would prefer large text -}
getAccessibilityLargeText : SettingsEntity.Model -> Outcome String
getAccessibilityLargeText settings =
    findString ui_AccessibilityLargeText settings.attributes
        |> Validation.withinStringCharsRange None
    

{-|  Tag used to describe the field -}
getTag : SettingsEntity.Model -> Outcome String
getTag settings =
    findString ui_Tag settings.attributes
        |> Validation.withinStringCharsRange limitSmallRangeNotEmpty
    

{-|  Tag representing a successful facet of the content -}
getSuccessTag : SettingsEntity.Model -> Outcome String
getSuccessTag settings =
    findString ui_SuccessTag settings.attributes
        |> Validation.withinStringCharsRange limitSmallRangeNotEmpty
    

{-|  Tag representing a warning aspect of the content -}
getWarningTag : SettingsEntity.Model -> Outcome String
getWarningTag settings =
    findString ui_WarningTag settings.attributes
        |> Validation.withinStringCharsRange limitSmallRangeNotEmpty
    

{-|  Tag representing a dangerous aspect of the content -}
getDangerTag : SettingsEntity.Model -> Outcome String
getDangerTag settings =
    findString ui_DangerTag settings.attributes
        |> Validation.withinStringCharsRange limitSmallRangeNotEmpty
    
