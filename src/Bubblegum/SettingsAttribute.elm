module Bubblegum.SettingsAttribute exposing (Model)

{-| Setting key

@docs Model

-}

{-| The core representation of a field.
-}
type alias Model = {
    id: String
    , key: String
    , facets: List String
    , values: List String
    }