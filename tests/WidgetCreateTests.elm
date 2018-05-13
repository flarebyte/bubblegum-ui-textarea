module WidgetCreateTests exposing (..)

import Test exposing (..)
import WidgetTestData exposing (..)


suite : Test
suite =
    describe "The Widget module"
        [ describe "Widget.view"
            [ fuzz fuzzySuccessMinimumChars "restores the original string if you run it again" <|
                \value -> viewWidget (withSettingsSuccessMinimumChars value) defaultState 
                    |> findComponent selectorsSuccessMinimumChars

              , fuzz fuzzyNotSuccessMinimumChars " the original string if you run it again" <|
                \value -> viewWidget (withSettingsSuccessMinimumChars value) defaultState
                    |> findWarningDiv
            ]
        ]
