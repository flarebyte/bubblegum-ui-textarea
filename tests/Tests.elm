module Tests exposing (..)

import Test exposing (describe, test, Test)
import Expect
import Bubblegum.TextAreaWidget
import Regex exposing (regex)

all : Test
all =
    describe "Ntriples.Filter"
        [ describe "filter" <|
            [ test "filter by object value" <|
                \() ->
                    Expect.equal
                    (filter (WithObject (Equals "subject4")) allTriples)
                    [t4]
              , test "filter by Custom" <|
                \() ->
                    Expect.equal
                    (filter (WithObject (Custom custom "subject4")) allTriples)
                    [t4]
            ]
        ]
