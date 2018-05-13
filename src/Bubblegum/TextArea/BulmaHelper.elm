module Bubblegum.TextArea.BulmaHelper exposing (..)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Html exposing (..)
import Html.Attributes as Attributes exposing (..)
import List
import String exposing (join, lines, words)
import Tuple exposing (first, second)


type alias StyledText =
    { text : String
    , style : String
    }


appendHtmlIfSuccess : (a -> Html.Html msg) -> Outcome a -> List (Html.Html msg) -> List (Html.Html msg)
appendHtmlIfSuccess ifSuccess outcome htmlList =
    case outcome of
        None ->
            htmlList

        Warning warn ->
            htmlList ++ [ div [ Attributes.class "is-invisible warning" ] [ text warn ] ]

        Valid success ->
            htmlList ++ [ ifSuccess success ]


appendAttributeIfSuccess : (a -> Attribute msg) -> Outcome a -> List (Attribute msg) -> List (Attribute msg)
appendAttributeIfSuccess ifSuccess outcome attributes =
    case outcome of
        None ->
            attributes

        Warning warn ->
            attributes ++ [ attribute "data-bubblegum-warn" warn ]

        Valid success ->
            attributes ++ [ ifSuccess success ]


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
    progress [ second tuple |> asClass3 "progress" "is-small", Attributes.max "100", first tuple |> value ]
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
    div [ class "tags has-addons" ] list


infoText : String -> StyledText
infoText text =
    { text = text
    , style = "is-dark"
    }


tagsInfo : List String -> Html msg
tagsInfo list =
    list |> List.map infoText |> List.map tag |> div [ class "tags" ]


groupFields : List (Html msg) -> Html msg
groupFields list =
    div [ class "field is-grouped is-grouped-multiline" ] list


mainBox : List (Html msg) -> Html msg
mainBox list =
    div [ class "box is-marginless is-paddingless is-shadowless has-addons" ]
        [ div [ class "field" ] list
        ]


widgetLabel : String -> Html msg
widgetLabel widgetText =
    label [ class "label" ] [ text widgetText ]
