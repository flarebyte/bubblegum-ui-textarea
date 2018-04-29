module Bubblegum.TextAreaHelper exposing (..)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.TextAreaVocabulary exposing(..)
import Bubblegum.Entity.Attribute as Attribute
import Bubblegum.Entity.Outcome as Outcome exposing(..)
import Maybe exposing(..)

{-| The core representation of a field.
-}
calculateRatio: Int -> Int -> Int
calculateRatio target value =
    (toFloat value / toFloat target ) * 100 |> round

findIntRange: (String, String) -> List Model -> Maybe (Int, Int)
findIntRange keyTuple attributes =
    let
        found = findIntTupleByKeyTuple keyTuple attributes
    in
       case found of
        (Nothing, Nothing) ->
            Nothing
        (Nothing, Just b) ->
            Just (b, b)
        (Just a, Nothing) ->
            Just (a, a)
        (Just a, Just b) ->
            Just (a, b)    
        
    
getSuccessCharRange: SettingsEntity.Model ->  Outcome (Int, Int)
getSuccessCharRange settings =
    findIntRange (ui_successMinChars,ui_successMaxChars)  settings.attributes

getDangerCharRange: SettingsEntity.Model -> Maybe (Int, Int)
getDangerCharRange settings =
    findIntRange (ui_dangerMinChars, ui_dangerMaxChars) settings.attributes
    
getSuccessWordRange: SettingsEntity.Model -> Maybe (Int, Int)
getSuccessWordRange settings =
    findIntRange (ui_successMinWords, ui_successMaxWords) settings.attributes

getDangerWordRange: SettingsEntity.Model -> Maybe (Int, Int)
getDangerWordRange settings =
    findIntRange (ui_dangerMinWords, ui_dangerMaxWords) settings.attributes

getPlaceholder: SettingsEntity.Model -> Maybe String
getPlaceholder settings =
    findStringByKey ui_placeholder settings.attributes

getLabel: SettingsEntity.Model -> Maybe String
getLabel settings =
    findStringByKey ui_label settings.attributes

getHelp: SettingsEntity.Model -> Maybe String
getHelp settings =
    findStringByKey ui_help settings.attributes

getIcon: SettingsEntity.Model -> Maybe String
getIcon settings =
    findStringByKey ui_icon settings.attributes

getInputSize: SettingsEntity.Model -> Maybe String
getInputSize settings =
    findStringByKey ui_inputSize settings.attributes

getInputState: SettingsState.Model -> Maybe String
getInputState settings =
    findStringByKey ui_inputState settings.attributes

isReadOnly: SettingsState.Model -> Bool
isReadOnly settings =
    findBoolByKey ui_readOnly settings.attributes |> Maybe.withDefault False

isDisabled: SettingsState.Model -> Bool
isDisabled settings =
    findBoolByKey ui_disabled settings.attributes |> Maybe.withDefault False
