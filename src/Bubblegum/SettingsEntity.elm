module Bubblegum.SettingsEntity exposing (Model)

{-| Setting key

@docs Model

-}

import Bubblegum.SettingsKey as SettingsKey

{-| The core representation of a field.
-}
type alias Model = {
    id: String
    , attributes: List SettingsKey.Model
    }