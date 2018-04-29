module Bubblegum.Entity.Validation exposing (..)

{-| Setting key

@docs Model

-}

import List
import Bubblegum.Entity.Outcome as Outcome exposing(Outcome(..))


matchListSize: Int -> List String -> Bool
matchListSize expected list =
      List.length list == expected 

onlyOne: List String -> String
onlyOne list =
    List.head list |> Maybe.withDefault "should-never-happen"

onlyTuple: List String -> (String, String)
onlyTuple list =
    case list of
        a :: b :: [] ->
            (a, b)
        _ ->
            ("should-never-happen", "should-never-happen")

asSingle: Outcome (List String) -> Outcome String
asSingle outcome =
    Outcome.check (matchListSize 1) "unsatisfied-constraint:single" outcome |> Outcome.map onlyOne

asTuple: Outcome (List String) -> Outcome (String, String)
asTuple outcome =
    Outcome.check (matchListSize 2) "unsatisfied-constraint:tuple" outcome |> Outcome.map onlyTuple

