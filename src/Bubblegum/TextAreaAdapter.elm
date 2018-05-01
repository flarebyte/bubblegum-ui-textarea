module Bubblegum.TextAreaAdapter exposing (Model)

{-| Setting key

@docs Model

-}

{-| The core representation of a field.
-}

type alias Model msg = {
    onInput: String -> msg
}
