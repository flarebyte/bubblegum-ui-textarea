module Tests exposing (..)

import Test exposing (describe, test, Test)
import WidgetCreateTests as WidgetCreateTests

all : Test
all =
    Test.concat
        [ WidgetCreateTests.all
        ]