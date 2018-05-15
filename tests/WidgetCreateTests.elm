module WidgetCreateTests exposing (..)

{-| Unit tests for testing the view of the Widget

    **Generated** by generate-vocabulary.py
    
-}
import Test exposing (..)
import WidgetTestData exposing (..)


suite : Test
suite =
    describe "The Widget module"
        [ describe "Widget.view"
            [

                fuzz fuzzySuccessMinimumChars "Correct settings for The minimum number of characters needed for successful content" <|
                \value -> viewWidgetWithSettings (withSettingsSuccessMinimumChars value)
                    |> findComponent selectorsSuccessMinimumChars

              , fuzz fuzzyNotSuccessMinimumChars "Wrong settings for The minimum number of characters needed for successful content" <|
                \value -> viewWidgetWithSettings (withSettingsSuccessMinimumChars value)
                    |> findWarningDiv           

                , fuzz fuzzySuccessMaximumChars "Correct settings for The maximum number of characters needed for successful content" <|
                \value -> viewWidgetWithSettings (withSettingsSuccessMaximumChars value)
                    |> findComponent selectorsSuccessMaximumChars

              , fuzz fuzzyNotSuccessMaximumChars "Wrong settings for The maximum number of characters needed for successful content" <|
                \value -> viewWidgetWithSettings (withSettingsSuccessMaximumChars value)
                    |> findWarningDiv           

                , fuzz fuzzyDangerMinimumChars "Correct settings for Warning when under the minimum number of characters" <|
                \value -> viewWidgetWithSettings (withSettingsDangerMinimumChars value)
                    |> findComponent selectorsDangerMinimumChars

              , fuzz fuzzyNotDangerMinimumChars "Wrong settings for Warning when under the minimum number of characters" <|
                \value -> viewWidgetWithSettings (withSettingsDangerMinimumChars value)
                    |> findWarningDiv           

                , fuzz fuzzyDangerMaximumChars "Correct settings for Warning when over the maximum number of characters" <|
                \value -> viewWidgetWithSettings (withSettingsDangerMaximumChars value)
                    |> findComponent selectorsDangerMaximumChars

              , fuzz fuzzyNotDangerMaximumChars "Wrong settings for Warning when over the maximum number of characters" <|
                \value -> viewWidgetWithSettings (withSettingsDangerMaximumChars value)
                    |> findWarningDiv           

                , fuzz fuzzySuccessMinimumWords "Correct settings for The minimum number of words needed for successful content" <|
                \value -> viewWidgetWithSettings (withSettingsSuccessMinimumWords value)
                    |> findComponent selectorsSuccessMinimumWords

              , fuzz fuzzyNotSuccessMinimumWords "Wrong settings for The minimum number of words needed for successful content" <|
                \value -> viewWidgetWithSettings (withSettingsSuccessMinimumWords value)
                    |> findWarningDiv           

                , fuzz fuzzySuccessMaximumWords "Correct settings for The maximum number of words needed for successful content" <|
                \value -> viewWidgetWithSettings (withSettingsSuccessMaximumWords value)
                    |> findComponent selectorsSuccessMaximumWords

              , fuzz fuzzyNotSuccessMaximumWords "Wrong settings for The maximum number of words needed for successful content" <|
                \value -> viewWidgetWithSettings (withSettingsSuccessMaximumWords value)
                    |> findWarningDiv           

                , fuzz fuzzyDangerMinimumWords "Correct settings for Warning when under the minimum number of words" <|
                \value -> viewWidgetWithSettings (withSettingsDangerMinimumWords value)
                    |> findComponent selectorsDangerMinimumWords

              , fuzz fuzzyNotDangerMinimumWords "Wrong settings for Warning when under the minimum number of words" <|
                \value -> viewWidgetWithSettings (withSettingsDangerMinimumWords value)
                    |> findWarningDiv           

                , fuzz fuzzyDangerMaximumWords "Correct settings for Warning when over the maximum number of words" <|
                \value -> viewWidgetWithSettings (withSettingsDangerMaximumWords value)
                    |> findComponent selectorsDangerMaximumWords

              , fuzz fuzzyNotDangerMaximumWords "Wrong settings for Warning when over the maximum number of words" <|
                \value -> viewWidgetWithSettings (withSettingsDangerMaximumWords value)
                    |> findWarningDiv           

                , fuzz fuzzyPlaceholder "Correct settings for Short hint describing the expected content" <|
                \value -> viewWidgetWithSettings (withSettingsPlaceholder value)
                    |> findComponent selectorsPlaceholder

             , fuzz fuzzyNotPlaceholder "Wrong settings for Short hint describing the expected content" <|
                \value -> viewWidgetWithSettings (withSettingsPlaceholder value)
                    |> findComponent selectorsNotPlaceholder

                , fuzz fuzzyLabel "Correct settings for Label related to the field" <|
                \value -> viewWidgetWithSettings (withSettingsLabel value)
                    |> findComponent selectorsLabel

              , fuzz fuzzyNotLabel "Wrong settings for Label related to the field" <|
                \value -> viewWidgetWithSettings (withSettingsLabel value)
                    |> findWarningDiv           

                , fuzz fuzzyHelp "Correct settings for Some help tip related to the field" <|
                \value -> viewWidgetWithSettings (withSettingsHelp value)
                    |> findComponent selectorsHelp

              , fuzz fuzzyNotHelp "Wrong settings for Some help tip related to the field" <|
                \value -> viewWidgetWithSettings (withSettingsHelp value)
                    |> findWarningDiv           

                , fuzz fuzzyUserLanguage "Correct settings for Language used by the user" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsUserLanguage value)
                    |> findComponent selectorsUserLanguage

             , fuzz fuzzyNotUserLanguage "Wrong settings for Language used by the user" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsUserLanguage value) 
                    |> findComponent selectorsNotUserLanguage

                , fuzz fuzzyContentLanguage "Correct settings for Language of the content" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsContentLanguage value)
                    |> findComponent selectorsContentLanguage

             , fuzz fuzzyNotContentLanguage "Wrong settings for Language of the content" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsContentLanguage value) 
                    |> findComponent selectorsNotContentLanguage

                , fuzz fuzzyUserRightToLeft "Correct settings for Whether the user is using right to left" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsUserRightToLeft value)
                    |> findComponent selectorsUserRightToLeft

             , fuzz fuzzyNotUserRightToLeft "Wrong settings for Whether the user is using right to left" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsUserRightToLeft value) 
                    |> findComponent selectorsNotUserRightToLeft

                , fuzz fuzzyContentRightToLeft "Correct settings for Whether the content requires right to left" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsContentRightToLeft value)
                    |> findComponent selectorsContentRightToLeft

             , fuzz fuzzyNotContentRightToLeft "Wrong settings for Whether the content requires right to left" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsContentRightToLeft value) 
                    |> findComponent selectorsNotContentRightToLeft

                , fuzz fuzzyAccessibilityLargeText "Correct settings for Whether the user would prefer large text" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsAccessibilityLargeText value)
                    |> findComponent selectorsAccessibilityLargeText

              , fuzz fuzzyNotAccessibilityLargeText "Wrong settings for Whether the user would prefer large text" <|
                \value -> viewWidgetWithUserSettings (withUserSettingsAccessibilityLargeText value)
                    |> findWarningDiv           

                , fuzz fuzzyTag "Correct settings for Tag used to describe the field" <|
                \value -> viewWidgetWithSettings (withSettingsTag value)
                    |> findComponent selectorsTag

              , fuzz fuzzyNotTag "Wrong settings for Tag used to describe the field" <|
                \value -> viewWidgetWithSettings (withSettingsTag value)
                    |> findWarningDiv           

            ]
        ]
