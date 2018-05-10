
module Bubblegum.TextArea.Vocabulary exposing (..)

{-| List of keys used for the settings (generated)

-}


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
getUserRightToLeft : SettingsEntity.Model -> Outcome Bool
getUserRightToLeft settings =
    findString ui_UserRightToLeft settings.attributes
        |> Validation.asBool
    

{-|  Whether the content requires right to left -}
getContentRightToLeft : SettingsEntity.Model -> Outcome Bool
getContentRightToLeft settings =
    findString ui_ContentRightToLeft settings.attributes
        |> Validation.asBool
    

{-|  Whether the user would prefer large text -}
getAccessibilityLargeText : SettingsEntity.Model -> Outcome Bool
getAccessibilityLargeText settings =
    findString ui_AccessibilityLargeText settings.attributes
        |> Validation.asBool
    
