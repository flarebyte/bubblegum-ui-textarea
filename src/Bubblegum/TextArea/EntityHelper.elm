module Bubblegum.TextArea.EntityHelper exposing (..)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.Attribute as Attribute
import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.Validation as Validation
import Bubblegum.TextArea.HelperLimits exposing (limitList)


findIntRange : ( String, String ) -> List Attribute.Model -> Outcome ( Int, Int )
findIntRange keyTuple attributes =
    Attribute.findOutcomeByKeyTuple keyTuple attributes
        |> Validation.asTuple
        |> Validation.asIntTuple
        |> Validation.asIntRange


findString : String -> List Attribute.Model -> Outcome String
findString key attributes =
    Attribute.findOutcomeByKey key attributes |> Validation.asSingle


findBool : String -> List Attribute.Model -> Outcome Bool
findBool key attributes =
    findString key attributes |> Validation.asBool


findListString : String -> List Attribute.Model -> Outcome (List String)
findListString key attributes =
    Attribute.findOutcomeByKey key attributes |> Validation.listLessThan limitList
