module Bubblegum.TextArea.Adapter exposing (..)

{-| Adapter which converts event handlers for the texterea widget
-}


{-| Hook into the onInput event
  See https://www.w3schools.com/jsref/event_oninput.asp

    { onInput = OnInputContent }

-}
type alias Model msg =
    { onInput : String -> msg
    }
