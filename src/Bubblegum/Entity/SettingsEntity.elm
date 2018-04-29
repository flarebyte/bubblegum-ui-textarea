module Bubblegum.SettingsEntity exposing (Model)

{-| Setting key

@docs Model

-}

import Bubblegum.SettingsAttribute as SettingsAttribute

{-| The core representation of a field.
-}
type alias Model = {
    id: String
    , attributes: List SettingsAttribute.Model
    }

