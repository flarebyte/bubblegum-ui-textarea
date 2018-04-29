module Bubblegum.Entity.StateEntity exposing (Model)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.Attribute as Attribute

{-| The core representation of a field.
-}
type alias Model = {
    id: String
    , attributes: List Attribute.Model
    }

