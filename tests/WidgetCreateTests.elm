module WidgetCreateTests exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string, intRange)
import Test.Html.Query as Query
import Test.Html.Selector as Selector
import Test exposing (..)
import Html exposing (..)
import Bubblegum.TextArea.Widget as Widget
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
