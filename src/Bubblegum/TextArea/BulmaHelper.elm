module Bubblegum.TextArea.BulmaHelper exposing (..)

{-| Setting key

@docs Model

-}

import Html exposing (..)
import Html.Attributes exposing (..)
import List
import Maybe
import String exposing (lines, words)
import Tuple exposing (first, second)


progressBar : ( String, String ) -> Html msg
progressBar tuple =
    progress [ class ("progress is-small " ++ second tuple), Html.Attributes.max "100", value (first tuple) ]
        [ text (first tuple ++ "%") ]


tagWithIcon : String -> String -> String -> String -> Html msg
tagWithIcon tagName tagStyle iconName iconStyle =
    div [ class "tags has-addons" ]
        [ span [ class ("tag " ++ tagStyle) ]
            [ text tagName ]
        , span [ class ("icon " ++ iconStyle) ]
            [ i [ class ("fas " ++ iconName) ]
                []
            ]
        ]
