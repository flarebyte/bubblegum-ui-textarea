module Bubblegum.TextArea.VocabularyHelper exposing (..)

{-| Helpers for accessing settings

    **Generated** by generate-vocabulary.py

-}

import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.Validation as Validation
import Bubblegum.TextArea.EntityHelper exposing (..)
import Bubblegum.TextArea.HelperLimits exposing (..)
import Bubblegum.TextArea.Vocabulary exposing (..)


{-| Short hint describing the expected content
-}
getPlaceholder : SettingsEntity.Model -> Outcome String
getPlaceholder settings =
    findString ui_placeholder settings.attributes
        |> Validation.withinStringCharsRange limitMediumRangeNotEmpty


{-| Label related to the field
-}
getLabel : SettingsEntity.Model -> Outcome String
getLabel settings =
    findString ui_label settings.attributes
        |> Validation.withinStringCharsRange limitMediumRangeNotEmpty


{-| Some help tip related to the field
-}
getHelp : SettingsEntity.Model -> Outcome String
getHelp settings =
    findString ui_help settings.attributes
        |> Validation.withinStringCharsRange limitMediumRangeNotEmpty


{-| Help message to highlight an issue with the content
-}
getDangerHelp : SettingsEntity.Model -> Outcome String
getDangerHelp settings =
    findString ui_dangerHelp settings.attributes
        |> Validation.withinStringCharsRange limitMediumRangeNotEmpty


{-| The content of the field
-}
getContent : SettingsEntity.Model -> Outcome String
getContent settings =
    findString ui_content settings.attributes
        |> Validation.withinStringCharsRange limitVeryLargeRange


{-| Language used by the user
-}
getUserLanguage : SettingsEntity.Model -> Outcome String
getUserLanguage settings =
    findString ui_userLanguage settings.attributes
        |> Validation.withinStringCharsRange limitSmallRangeNotEmpty


{-| Language of the content
-}
getContentLanguage : SettingsEntity.Model -> Outcome String
getContentLanguage settings =
    findString ui_contentLanguage settings.attributes
        |> Validation.withinStringCharsRange limitSmallRangeNotEmpty


{-| Whether the user is using right to left
-}
isUserRightToLeft : SettingsEntity.Model -> Outcome Bool
isUserRightToLeft settings =
    findBool ui_userRightToLeft settings.attributes


{-| Whether the content requires right to left
-}
isContentRightToLeft : SettingsEntity.Model -> Outcome Bool
isContentRightToLeft settings =
    findBool ui_contentRightToLeft settings.attributes


{-| Whether the user would prefer large text
-}
isAccessibilityLargeText : SettingsEntity.Model -> Outcome Bool
isAccessibilityLargeText settings =
    findBool ui_accessibilityLargeText settings.attributes


{-| The range of characters accepted for successful content
-}
getSuccessCharRange : SettingsEntity.Model -> Outcome ( Int, Int )
getSuccessCharRange settings =
    findIntRange ( ui_successMinimumChars, ui_successMaximumChars ) settings.attributes
        |> Validation.withinIntRange limitVeryLargeRangeNotEmpty


{-| The range of characters triggering a warning
-}
getDangerCharRange : SettingsEntity.Model -> Outcome ( Int, Int )
getDangerCharRange settings =
    findIntRange ( ui_dangerMinimumChars, ui_dangerMaximumChars ) settings.attributes
        |> Validation.withinIntRange limitVeryLargeRangeNotEmpty


{-| The range of words accepted for successful content
-}
getSuccessWordRange : SettingsEntity.Model -> Outcome ( Int, Int )
getSuccessWordRange settings =
    findIntRange ( ui_successMinimumWords, ui_successMaximumWords ) settings.attributes
        |> Validation.withinIntRange limitVeryLargeRangeNotEmpty


{-| The range of words triggering a warning
-}
getDangerWordRange : SettingsEntity.Model -> Outcome ( Int, Int )
getDangerWordRange settings =
    findIntRange ( ui_dangerMinimumWords, ui_dangerMaximumWords ) settings.attributes
        |> Validation.withinIntRange limitVeryLargeRangeNotEmpty
