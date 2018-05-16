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
    , ariaLabel : String
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


styleTextChar : Int -> String -> StyledText
styleTextChar number status =
    { text = toString number
    , style = status
    , ariaLabel = "number of characters"
    }


styleTextWord : Int -> String -> StyledText
styleTextWord number status =
    { text = toString number
    , style = status
    , ariaLabel = "number of words"
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
    span [ asClass2 "tag" tagInfo.style, attribute "aria-label" tagInfo.ariaLabel ]
        [ text tagInfo.text ]


tagsAddons : List (Html msg) -> Html msg
tagsAddons list =
    div [ class "tags has-addons" ] list


tags : List (Html msg) -> Html msg
tags list =
    div [ class "tags" ] list


infoText : String -> StyledText
infoText text =
    { text = text
    , style = "is-dark"
    , ariaLabel = "tag"
    }


successTagText : String -> StyledText
successTagText text =
    { text = text
    , style = "is-success"
    , ariaLabel = "tag"
    }


tagsInfo : List String -> Html msg
tagsInfo list =
    list |> List.map infoText |> List.map tag |> div []


tagsSuccess : List String -> Html msg
tagsSuccess list =
    list |> List.map successTagText |> List.map tag |> div []


groupFields : List (Html msg) -> Html msg
groupFields list =
    div [ class "field is-grouped is-grouped-multiline" ] list


rtlOrLtr : Bool -> String
rtlOrLtr value =
    if value then
        "rtl"
    else
        "ltr"


mainBox : Outcome String -> Outcome Bool -> List (Html msg) -> Html msg
mainBox language rtl list =
    div
        ([ class "bubblegum-textarea__widget box is-marginless is-paddingless is-shadowless has-addons" ]
            |> appendAttributeIfSuccess lang language
            |> appendAttributeIfSuccess dir (rtl |> Outcome.map rtlOrLtr)
        )
        [ div [ class "field" ] list
        ]


widgetLabel : String -> Html msg
widgetLabel widgetText =
    label [ class "label" ] [ text widgetText ]


infoHelp : String -> Html msg
infoHelp helpText =
    p [ asClass2 "help" "is-info" ]
        [ text helpText ]


dangerHelp : String -> Html msg
dangerHelp helpText =
    p [ asClass2 "help" "is-danger" ]
        [ text helpText ]
