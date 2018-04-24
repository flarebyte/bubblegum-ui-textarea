module Bubblegum.SettingsAttribute exposing (Model
    , findAttributeByKey
    , findListStringByKey
    , findStringByKey
    , findIntByKey)

{-| Setting key

@docs Model

-}
import Result

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


