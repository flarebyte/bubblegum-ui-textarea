module Bubblegum.TextArea.BulmaHelper exposing (..)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.TextArea.IsoLanguage exposing (IsoLanguage(..), toIsoLanguage)
import Html exposing (..)
import Html.Attributes as Attributes exposing (..)
import List
import String exposing (join, lines, words)
import Tuple exposing (first, second)


type alias StyledText =
    { text : String
    , style : String
    , title : String
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
    , title = "number of characters"
    }


styleTextWord : Int -> String -> StyledText
styleTextWord number status =
    { text = toString number
    , style = status
    , title = "number of words"
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
    span [ asClass2 "tag" tagInfo.style, Attributes.title tagInfo.title ]
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
    , title = "tag"
    }


successTagText : String -> StyledText
successTagText text =
    { text = text
    , style = "is-success"
    , title = "tag"
    }


warningTagText : String -> StyledText
warningTagText text =
    { text = text
    , style = "is-warning"
    , title = "tag"
    }


dangerTagText : String -> StyledText
dangerTagText text =
    { text = text
    , style = "is-danger"
    , title = "tag"
    }


tagsInfo : IsoLanguage -> List String -> Html msg
tagsInfo userIsoLanguage list =
    list |> List.map infoText |> List.map tag |> div []


tagsSuccess : IsoLanguage -> List String -> Html msg
tagsSuccess userIsoLanguage list =
    list |> List.map successTagText |> List.map tag |> div []


tagsWarning : IsoLanguage -> List String -> Html msg
tagsWarning userIsoLanguage list =
    list |> List.map warningTagText |> List.map tag |> div []


tagsDanger : IsoLanguage -> List String -> Html msg
tagsDanger userIsoLanguage list =
    list |> List.map dangerTagText |> List.map tag |> div []


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


minimumCharsTag : IsoLanguage -> ( Int, Int ) -> Html msg
minimumCharsTag userIsoLanguage tuple =
    tag { text = first tuple |> toString, style = "is-dark", title = "minimum number of characters expected" }


minimumWordsTag : IsoLanguage -> ( Int, Int ) -> Html msg
minimumWordsTag userIsoLanguage tuple =
    tag { text = first tuple |> toString, style = "is-dark", title = "minimum number of words expected" }


unitTag : IsoLanguage -> String -> Html msg
unitTag userIsoLanguage value =
    tag { text = value, style = "is-light", title = "unit" }
