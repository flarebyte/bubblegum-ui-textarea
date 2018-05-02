module Tests exposing (..)

import Test exposing (describe, test, Test)
import Expect
import Bubblegum.TextAreaWidget


all : Test
all =
    describe "TextAreaWidget.view"
        [ describe "view" <|
            [ test "do we need unit tests" <|
                \() ->
                    Expect.equal True True
            ]
        ]
