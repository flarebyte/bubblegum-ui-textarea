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
                \value -> viewWidget (withSettingsSuccessMinimumChars value) defaultState 
                    |> findComponent selectorsSuccessMinimumChars
           

              , fuzz fuzzyNotSuccessMinimumChars "Wrong settings for The minimum number of characters needed for successful content" <|
                \value -> viewWidget (withSettingsSuccessMinimumChars value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzySuccessMaximumChars "Correct settings for The maximum number of characters needed for successful content" <|
                \value -> viewWidget (withSettingsSuccessMaximumChars value) defaultState 
                    |> findComponent selectorsSuccessMaximumChars
           

              , fuzz fuzzyNotSuccessMaximumChars "Wrong settings for The maximum number of characters needed for successful content" <|
                \value -> viewWidget (withSettingsSuccessMaximumChars value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzyDangerMinimumChars "Correct settings for Warning when under the minimum number of characters" <|
                \value -> viewWidget (withSettingsDangerMinimumChars value) defaultState 
                    |> findComponent selectorsDangerMinimumChars
           

              , fuzz fuzzyNotDangerMinimumChars "Wrong settings for Warning when under the minimum number of characters" <|
                \value -> viewWidget (withSettingsDangerMinimumChars value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzyDangerMaximumChars "Correct settings for Warning when over the maximum number of characters" <|
                \value -> viewWidget (withSettingsDangerMaximumChars value) defaultState 
                    |> findComponent selectorsDangerMaximumChars
           

              , fuzz fuzzyNotDangerMaximumChars "Wrong settings for Warning when over the maximum number of characters" <|
                \value -> viewWidget (withSettingsDangerMaximumChars value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzySuccessMinimumWords "Correct settings for The minimum number of words needed for successful content" <|
                \value -> viewWidget (withSettingsSuccessMinimumWords value) defaultState 
                    |> findComponent selectorsSuccessMinimumWords
           

              , fuzz fuzzyNotSuccessMinimumWords "Wrong settings for The minimum number of words needed for successful content" <|
                \value -> viewWidget (withSettingsSuccessMinimumWords value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzySuccessMaximumWords "Correct settings for The maximum number of words needed for successful content" <|
                \value -> viewWidget (withSettingsSuccessMaximumWords value) defaultState 
                    |> findComponent selectorsSuccessMaximumWords
           

              , fuzz fuzzyNotSuccessMaximumWords "Wrong settings for The maximum number of words needed for successful content" <|
                \value -> viewWidget (withSettingsSuccessMaximumWords value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzyDangerMinimumWords "Correct settings for Warning when under the minimum number of words" <|
                \value -> viewWidget (withSettingsDangerMinimumWords value) defaultState 
                    |> findComponent selectorsDangerMinimumWords
           

              , fuzz fuzzyNotDangerMinimumWords "Wrong settings for Warning when under the minimum number of words" <|
                \value -> viewWidget (withSettingsDangerMinimumWords value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzyDangerMaximumWords "Correct settings for Warning when over the maximum number of words" <|
                \value -> viewWidget (withSettingsDangerMaximumWords value) defaultState 
                    |> findComponent selectorsDangerMaximumWords
           

              , fuzz fuzzyNotDangerMaximumWords "Wrong settings for Warning when over the maximum number of words" <|
                \value -> viewWidget (withSettingsDangerMaximumWords value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzyPlaceholder "Correct settings for Short hint describing the expected content" <|
                \value -> viewWidget (withSettingsPlaceholder value) defaultState 
                    |> findComponent selectorsPlaceholder
           

              , fuzz fuzzyNotPlaceholder "Wrong settings for Short hint describing the expected content" <|
                \value -> viewWidget (withSettingsPlaceholder value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzyLabel "Correct settings for Label related to the field" <|
                \value -> viewWidget (withSettingsLabel value) defaultState 
                    |> findComponent selectorsLabel
           

              , fuzz fuzzyNotLabel "Wrong settings for Label related to the field" <|
                \value -> viewWidget (withSettingsLabel value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzyHelp "Correct settings for Some help tip related to the field" <|
                \value -> viewWidget (withSettingsHelp value) defaultState 
                    |> findComponent selectorsHelp
           

              , fuzz fuzzyNotHelp "Wrong settings for Some help tip related to the field" <|
                \value -> viewWidget (withSettingsHelp value) defaultState
                    |> findWarningDiv           

                , fuzz fuzzyTag "Correct settings for Tag used to describe the field" <|
                \value -> viewWidget (withSettingsTag value) defaultState 
                    |> findComponent selectorsTag
           

              , fuzz fuzzyNotTag "Wrong settings for Tag used to describe the field" <|
                \value -> viewWidget (withSettingsTag value) defaultState
                    |> findWarningDiv           

            ]
        ]
