module Bubblegum.Entity.Validation exposing (..)

{-| Setting key

@docs Model

-}

import List
import Bubblegum.Entity.Outcome as Outcome exposing(Outcome(..))


matchListSize: Int -> List String -> Bool
matchListSize expected list =
      List.length list == expected 

helperMoreThan: Int -> List String -> Bool
helperMoreThan expected list =
      List.length list >= expected 

helperStrictlyMoreThan: Int -> List String -> Bool
helperStrictlyMoreThan expected list =
      List.length list > expected 

helperLessThan: Int -> List String -> Bool
helperLessThan expected list =
      List.length list <= expected 

helperStrictlyLessThan: Int -> List String -> Bool
helperStrictlyLessThan expected list =
      List.length list < expected 

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

asListEqual: Int -> Outcome (List String) -> Outcome (List String)
asListEqual size outcome =
    Outcome.check (matchListSize size) ("unsatisfied-constraint:list-equal-" ++ (toString size)) outcome

asListMoreThan: Int -> Outcome (List String) -> Outcome (List String)
asListMoreThan size outcome =
    Outcome.check (helperMoreThan size) ("unsatisfied-constraint:list-more-than-" ++ (toString size)) outcome

asListStrictlyMoreThan: Int -> Outcome (List String) -> Outcome (List String)
asListStrictlyMoreThan size outcome =
    Outcome.check (helperStrictlyMoreThan size) ("unsatisfied-constraint:list-strictly-more-than-" ++ (toString size)) outcome

asListLessThan: Int -> Outcome (List String) -> Outcome (List String)
asListLessThan size outcome =
    Outcome.check (helperLessThan size) ("unsatisfied-constraint:list-less-than-" ++ (toString size)) outcome

asListStrictlyLessThan: Int -> Outcome (List String) -> Outcome (List String)
asListStrictlyLessThan size outcome =
    Outcome.check (helperStrictlyLessThan size) ("unsatisfied-constraint:list-strictly-less-than-" ++ (toString size)) outcome

