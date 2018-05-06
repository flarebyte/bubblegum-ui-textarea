module Bubblegum.TextArea.BulmaHelper exposing (..)

{-| Setting key

@docs Model

-}

import Html exposing (..)
import Html.Attributes exposing (..)
import List
import Maybe
import String exposing (join, lines, words)
import Tuple exposing (first, second)


type alias StyledText =
    { text : String
    , style : String
    }


styleTextInt : Int -> String -> StyledText
styleTextInt number status =
    { text = toString number
    , style = status
    }


asClass : List String -> Attribute msg
asClass list =
    List.reverse list |> join " " |> class


asClass2 : String -> String -> Attribute msg
asClass2 a b =
    [ b, a ] |> asClass


asClass3 : String -> String -> String -> Attribute msg
asClass3 a b c =
    [ c, b, a ] |> asClass


progressBar : ( String, String ) -> Html msg
progressBar tuple =
    progress [ second tuple |> asClass3 "progress" "is-small", Html.Attributes.max "100", first tuple |> value ]
        [ text (first tuple ++ "%") ]


styledIcon : String -> String -> Html msg
styledIcon iconName iconTextStyle =
    span [ asClass2 "icon" iconTextStyle ]
        [ i [ asClass2 "fas" iconName ]
            []
        ]


tag : StyledText -> Html msg
tag tagInfo =
    span [ asClass2 "tag" tagInfo.style ]
        [ text tagInfo.text ]


tags : List (Html msg) -> Html msg
tags list =
    div [ class "control" ]
        [ div [ class "tags has-addons" ] list
        ]
