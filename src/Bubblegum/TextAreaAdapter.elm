module Bubblegum.TextAreaAdapter exposing (Model)

{-| Setting key

@docs Model

-}

{-| The core representation of a field.
-}

type State = OnTextAreaInput String

type alias Model msg = {
     toMsg: State -> msg
    }
