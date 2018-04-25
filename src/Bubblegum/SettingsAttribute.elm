module Bubblegum.SettingsAttribute exposing (Model
    , findAttributeByKey
    , findListStringByKey
    , findStringByKey
    , findIntByKey
    , findIntTupleByKeyTuple
    , findBoolByKey)

{-| Setting key

@docs Model

-}
import Result
import Tuple exposing(first, second)
import List

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

findListStringByKey: String -> List Model -> Maybe (List String)
findListStringByKey key attributes =
    findAttributeByKey key attributes |> Maybe.map .values

findStringByKey: String -> List Model -> Maybe String
findStringByKey key attributes =
    findListStringByKey key attributes |> Maybe.andThen List.head

stringToInt: String -> Maybe Int
stringToInt str =
    String.toInt str |> Result.toMaybe

findIntByKey: String -> List Model -> Maybe Int
findIntByKey key attributes =
    findStringByKey key attributes |> Maybe.andThen stringToInt

findIntTupleByKeyTuple: (String, String) -> List Model -> (Maybe Int, Maybe Int)
findIntTupleByKeyTuple keyTuple attributes =
    (findIntByKey (first keyTuple) attributes, findIntByKey (first keyTuple) attributes)

trueList = ["true", "ok", "yes"]
falseList = ["false", "ko", "no"]

stringToBool: String -> Maybe Bool
stringToBool str =
    let
        value = String.toLower str
    in
        if List.member value trueList then
            Just True
        else if List.member value falseList then
            Just False
        else Nothing

findBoolByKey: String -> List Model -> Maybe Bool
findBoolByKey key attributes =
    findStringByKey key attributes |> Maybe.andThen stringToBool

