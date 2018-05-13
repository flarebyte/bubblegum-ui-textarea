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
            [ fuzz (intRange 1 10000) "restores the original string if you run it again" <|
                \number ->
                    viewWidget (withSettingsSuccessMinimumChars number) defaultState
                        |> Query.fromHtml
                        |> Query.findAll [ Selector.tag "progress" ]
                        |> Query.count (Expect.equal 1)
              , fuzz (intRange 70000 1000000) " the original string if you run it again" <|
                \number ->
                    viewWidget (withSettingsSuccessMinimumChars number) defaultState
                        |> Query.fromHtml
                        |> Query.findAll [ Selector.class "warning" ]
                        |> Query.count (Expect.atLeast 1)          
            ]
        ]
