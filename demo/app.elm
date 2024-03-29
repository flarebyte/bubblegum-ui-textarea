module App exposing (..)

{-| App


# Basics

-}

import AppModel exposing (..)
import AppMsg exposing (AppMsg(..))
import Browser
import Bubblegum.Entity.Attribute exposing (deleteAttributeByKey, replaceAttributeByKey)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.TextArea.Vocabulary exposing (..)
import Debug
import Html exposing (..)
import Html.Attributes exposing (..)
import WidgetBuilder exposing (viewWidget)
import WidgetDocView exposing (..)


main =
    Browser.sandbox
        { init = AppModel.reset
        , view = view
        , update = update
        }



-- UPDATE


update : AppMsg -> AppModel -> AppModel
update msg model =
    case msg of
        OnInputContent value ->
            replaceAttributeByKey ui_content [ value ] model.state.attributes
                |> StateEntity.asAttributesIn model.state
                |> asStateIn model

        OnSelectSetting isUser key value ->
            replaceAttributeByKey key [ value ] (getSettingsAttributes isUser model)
                |> SettingsEntity.asAttributesIn (getSettings isUser model)
                |> asSettingsIn isUser model

        OnSelectState key value ->
            replaceAttributeByKey key [ value ] (getStateAttributes model)
                |> StateEntity.asAttributesIn (getState model)
                |> asStateIn model

        OnActivateSetting isUser key ->
            deleteAttributeByKey key (getSettingsAttributes isUser model)
                |> SettingsEntity.asAttributesIn (getSettings isUser model)
                |> asSettingsIn isUser model

        OnActivateState key ->
            deleteAttributeByKey key (getStateAttributes model)
                |> StateEntity.asAttributesIn (getState model)
                |> asStateIn model



-- VIEW


view : AppModel -> Html AppMsg
view model =
    section [ class "section" ]
        [ viewHeader
        , div [ class "container" ] [ p [] [ text " ... " ] ]
        , div [ class "columns" ]
            [ div [ class "column is-three-fifths" ]
                [ viewWidget model ]
            , div [ class "column" ]
                [ viewSettings model ]
            ]
        , div [ class "container" ] [ p [] [ text " ... " ] ]
        ]
