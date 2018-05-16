module AppModel exposing (..)

import Bubblegum.Entity.Attribute as Attribute exposing (replaceAttributeByKey)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.TextArea.Vocabulary exposing (..)
import Ipsum exposing (ipsum)


type alias AppModel =
    { userSettings : SettingsEntity.Model
    , settings : SettingsEntity.Model
    , state : StateEntity.Model
    }


setUserSettings : SettingsEntity.Model -> AppModel -> AppModel
setUserSettings userSettings model =
    { model | userSettings = userSettings }


helperAsUserSettingsIn : AppModel -> SettingsEntity.Model -> AppModel
helperAsUserSettingsIn =
    flip setUserSettings


setSettings : SettingsEntity.Model -> AppModel -> AppModel
setSettings settings model =
    { model | settings = settings }


helperAsSettingsIn : AppModel -> SettingsEntity.Model -> AppModel
helperAsSettingsIn =
    flip setSettings


asSettingsIn : Bool -> AppModel -> SettingsEntity.Model -> AppModel
asSettingsIn isUserSettings model settings =
    if isUserSettings then
        helperAsUserSettingsIn model settings
    else
        helperAsSettingsIn model settings


getSettings : Bool -> AppModel -> SettingsEntity.Model
getSettings isUserSettings model =
    if isUserSettings then
        model.userSettings
    else
        model.settings


getState : AppModel -> SettingsEntity.Model
getState model =
    model.state


getSettingsAttributes : Bool -> AppModel -> List Attribute.Model
getSettingsAttributes isUserSettings model =
    getSettings isUserSettings model |> .attributes


getStateAttributes : AppModel -> List Attribute.Model
getStateAttributes model =
    getState model |> .attributes


setState : StateEntity.Model -> AppModel -> AppModel
setState state model =
    { model | state = state }


asStateIn : AppModel -> StateEntity.Model -> AppModel
asStateIn =
    flip setState


reset : AppModel
reset =
    { userSettings = { attributes = [] }
    , settings = { attributes = [] }
    , state = { attributes = replaceAttributeByKey ui_content [ String.join "\n" [ ipsum, ipsum, ipsum ] ] [] }
    }
