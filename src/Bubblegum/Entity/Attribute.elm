module Bubblegum.Entity.Attribute exposing (Model
    , findAttributeByKey
    , findOutcomeByKey
    , findOutcomeByKeyTuple)

{-| Setting key

@docs Model

-}
import Tuple exposing(first, second)
import Maybe
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


createTuple: a -> a -> (a, a)
createTuple a b =
    (a, b)

findOutcomeByKeyTuple: (String, String) -> List Model -> Outcome (List String, List String)
findOutcomeByKeyTuple tuple attributes =
    let
        a = findAttributeByKey (first tuple) attributes |> Maybe.map .values
        b = findAttributeByKey (second tuple) attributes |> Maybe.map .values
        ab = Maybe.map2 createTuple a b
    in
        Outcome.fromMaybe ab
