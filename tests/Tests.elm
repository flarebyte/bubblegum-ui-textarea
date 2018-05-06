module Tests exposing (..)

import Test exposing (describe, test, Test)
import Expect
import Bubblegum.TextArea.Widget


all : Test
all =
    describe "TextArea.Widget.view"
        [ describe "view" <|
            [ test "do we need unit tests" <|
                \() ->
                    Expect.equal True True
            ]
        ]
