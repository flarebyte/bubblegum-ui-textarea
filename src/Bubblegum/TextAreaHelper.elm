module Bubblegum.TextAreaHelper exposing (..)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.TextAreaVocabulary exposing(..)
import Bubblegum.Entity.Attribute as Attribute
import Bubblegum.Entity.Outcome as Outcome exposing(..)
import Bubblegum.Entity.Validation as Validation
import Maybe exposing(..)

titleCharRange = (1, 70) -- The new title length is 70 characters before Google will truncate the title with ellipses
keywordCharRange = (1, 30)
charRange=(0, 60000)
wordRange = (0, 12000)

{-| The core representation of a field.
-}
calculateRatio: Int -> Int -> Int
calculateRatio target value =
    (toFloat value / toFloat target ) * 100 |> round

findIntRange: (String, String) -> List Attribute.Model -> Outcome (Int, Int)
findIntRange keyTuple attributes =
    Attribute.findOutcomeByKeyTuple keyTuple attributes 
    |> Validation.asTuple
    |> Validation.asIntTuple
    |> Validation.asIntRange
        
findString: String -> List Attribute.Model -> Outcome String
findString key attributes =
    Attribute.findOutcomeByKey key attributes |> Validation.asSingle

getSuccessCharRange: SettingsEntity.Model ->  Outcome (Int, Int)
getSuccessCharRange settings =
    findIntRange (ui_successMinChars,ui_successMaxChars)  settings.attributes 
    |> Validation.withinIntRange charRange

getDangerCharRange: SettingsEntity.Model -> Outcome (Int, Int)
getDangerCharRange settings =
    findIntRange (ui_dangerMinChars, ui_dangerMaxChars) settings.attributes
    |> Validation.withinIntRange charRange
    
getSuccessWordRange: SettingsEntity.Model ->Outcome (Int, Int)
getSuccessWordRange settings =
    findIntRange (ui_successMinWords, ui_successMaxWords) settings.attributes
    |> Validation.withinIntRange wordRange

getDangerWordRange: SettingsEntity.Model -> Outcome (Int, Int)
getDangerWordRange settings =
    findIntRange (ui_dangerMinWords, ui_dangerMaxWords) settings.attributes
    |> Validation.withinIntRange wordRange

getPlaceholder: SettingsEntity.Model -> Outcome String
getPlaceholder settings =
    findString ui_placeholder settings.attributes 
    |> Validation.withinStringCharsRange titleCharRange

getLabel: SettingsEntity.Model -> Outcome String
getLabel settings =
    findString ui_label settings.attributes
    |> Validation.withinStringCharsRange titleCharRange

getHelp: SettingsEntity.Model -> Outcome String
getHelp settings =
    findString ui_help settings.attributes
    |> Validation.withinStringCharsRange titleCharRange

getIcon: SettingsEntity.Model -> Outcome String
getIcon settings =
    findString ui_icon settings.attributes
    |> Validation.withinStringCharsRange keywordCharRange

getInputSize: SettingsEntity.Model -> Outcome String
getInputSize settings =
    findString ui_inputSize settings.attributes 
    |> Validation.matchEnum ["is-small", "is-medium", "is-large"]

getInputState: StateEntity.Model -> Outcome String
getInputState settings =
    findString ui_inputState settings.attributes
    |> Validation.matchEnum ["is-hovered", "is-focused", "is-loading"]

isReadOnly: StateEntity.Model ->Outcome Bool
isReadOnly settings =
    findString ui_readOnly settings.attributes 
    |> Validation.asBool

isDisabled: StateEntity.Model -> Outcome Bool
isDisabled settings =
    findString ui_disabled settings.attributes
    |> Validation.asBool
