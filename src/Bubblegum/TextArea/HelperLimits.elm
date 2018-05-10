module Bubblegum.TextArea.HelperLimits exposing (..)

{-| Setting key

@docs Model

-}

limitTitleCharRange : ( Int, Int )
limitTitleCharRange =
    ( 1, 70 )


limitKeywordCharRange : ( Int, Int )
limitKeywordCharRange =
    ( 1, 30 )


limitCharRange : ( Int, Int )
limitCharRange =
    ( 0, 60000 )


limitWordRange : ( Int, Int )
limitWordRange =
    ( 0, 12000 )


