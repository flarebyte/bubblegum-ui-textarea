module Bubblegum.Entity.Attribute exposing (Model
    , findAttributeByKey
    , findOutcomeByKey)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.Outcome as Outcome exposing(Outcome(..))

{-| The core representation of a field.
-}
type alias Model = {
    id: Maybe String
    , key: String
    , facets: List String
    , values: List String
    }

findAttributeByKey: String -> List Model -> Maybe Model
findAttributeByKey key attributes =
        case attributes of
        [] ->
            Nothing

        first::rest ->
            if first.key == key then
                Just first
            else
                findAttributeByKey key rest

findOutcomeByKey: String -> List Model -> Outcome (List String)
findOutcomeByKey key attributes =
    findAttributeByKey key attributes |> Maybe.map .values |> Outcome.fromMaybe

