module Bubblegum.TextAreaWidget exposing (create)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput, onClick, onMouseEnter, onMouseOut)
import String exposing(lines, words)
import List
import AppMsg exposing (..)
import EditMode exposing(..)
import Debug

setTextArea: String -> Model -> Model
setTextArea text model=
    { model | value = text }

smallIcon: String -> List (Html AppMsg)
smallIcon iconId=
    [ span [ class "icon is-small" ]
        [ i [ class ("fas " ++ iconId) ]
            []
        ]
    ]
  
createEdit: Model -> Int -> Html AppMsg
createEdit  model id =
    div [ class "box is-marginless is-paddingless is-shadowless has-addons"]
        [  h4 [ class "title is-4" ] [ text (getConfig id|> .title)]
           , textarea [ class "textarea is-marginless is-paddingless is-shadowless"
                , placeholder "e.g. Hello world"
                , onInput OnChangeTextArea
                , value model.value
                , attribute "rows" (model.value |> lines |> List.length |> (+) 1 |> toString )
               ]
            []
            , displayTextInfo model 
        ]       
