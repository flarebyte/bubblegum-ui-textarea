module Bubblegum.TextAreaHelper exposing (..)

{-| Setting key

@docs Model

-}

import Bubblegum.SettingsEntity as SettingsEntity
import Bubblegum.SettingsState as SettingsState
import Bubblegum.TextAreaVocabulary exposing(..)
import Bubblegum.SettingsAttribute exposing(..)


{-| The core representation of a field.
-}
calculateRatio: Int -> Int -> Int
calculateRatio target value =
    (toFloat value / toFloat target ) * 100 |> round

getSuccessMinChars: SettingsEntity.Model -> Maybe Int
getSuccessMinChars settings =
    findIntByKey ui_successMinChars settings.attributes

getSuccessMaxChars: SettingsEntity.Model -> Maybe Int
getSuccessMaxChars settings =
    findIntByKey ui_successMaxChars settings.attributes

getDangerMinChars: SettingsEntity.Model -> Maybe Int
getDangerMinChars settings =
    findIntByKey ui_dangerMinChars settings.attributes

getDangerMaxChars: SettingsEntity.Model -> Maybe Int
getDangerMaxChars settings =
    findIntByKey ui_dangerMaxChars settings.attributes
    
getSuccessMinWords: SettingsEntity.Model -> Maybe Int
getSuccessMinWords settings =
    findIntByKey ui_successMinWords settings.attributes

getSuccessMaxWords: SettingsEntity.Model -> Maybe Int
getSuccessMaxWords settings =
    findIntByKey ui_successMaxWords settings.attributes

getDangerMinWords: SettingsEntity.Model -> Maybe Int
getDangerMinWords settings =
    findIntByKey ui_dangerMinWords settings.attributes

getDangerMaxWords: SettingsEntity.Model -> Maybe Int
getDangerMaxWords settings =
    findIntByKey ui_dangerMaxWords settings.attributes
    