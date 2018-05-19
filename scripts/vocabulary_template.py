#!/usr/bin/python


## Vocabulary

headerVocabulary = """
module Bubblegum.TextArea.Vocabulary exposing (..)

{-| List of keys used for the settings

    **Generated** by generate-vocabulary.py

-}

"""
templateVocabulary = """
{-|  $description. ($signature) -}
ui_$namecamel: String
ui_$namecamel =
    "ui:$name"
"""

## Key Description

headerKeyDescription = """
module KeyDescription exposing (..)

{-| List of descriptions for the keys used for the settings

    **Generated** by generate-vocabulary.py

-}

"""
templateKeyDescription = """
desc$nameCamel: String
desc$nameCamel =
    "$description"    
"""

## Vocabulary Helper

headerVocabularyHelper = """
module Bubblegum.TextArea.VocabularyHelper exposing (..)

{-| Helpers for accessing settings
 
    **Generated** by generate-vocabulary.py

-}

import Bubblegum.Entity.Validation as Validation
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.TextArea.EntityHelper exposing (..)
import Bubblegum.TextArea.HelperLimits exposing (..)
import Bubblegum.TextArea.Vocabulary exposing (..)

"""
templateVocabularyHelperString = """
{-|  $description -}
get$nameCamel : SettingsEntity.Model -> Outcome String
get$nameCamel settings =
    findString ui_$namecamel settings.attributes
        |> Validation.withinStringCharsRange $rangeRestriction
           
"""

templateVocabularyHelperListString = """
{-|  $description -}
get$nameCamel : SettingsEntity.Model -> Outcome (List String)
get$nameCamel settings =
    findListString ui_$namecamel settings.attributes
"""

templateVocabularyHelperBool = """
{-|  $description -}
is$nameCamel : SettingsEntity.Model -> Outcome Bool
is$nameCamel settings =
    findBool ui_$namecamel settings.attributes

"""

templateVocabularyHelperIntRange = """
{-|  $description -}

$methodName: SettingsEntity.Model -> Outcome ( Int, Int )
$methodName settings =
    findIntRange ( $minKey, $maxKey ) settings.attributes
        |> Validation.withinIntRange limitVeryLargeRangeNotEmpty


"""

# Widget Doc Data

headerWidgetDocData = """
module WidgetDocData exposing (textAreaWidgetDoc)

import AttributeDoc exposing (AttributeDoc, Cardinality(..), createKey)
import Bubblegum.TextArea.Vocabulary exposing (..)
import KeyDescription exposing (..)
import WidgetDoc exposing (..)
import WidgetPackageJson

{-| Some examples of settings for the demo.
 
    **Generated** by generate-vocabulary.py

-}

textAreaWidgetDoc : WidgetDoc
textAreaWidgetDoc =
    { meta = WidgetPackageJson.meta
    , userSettings = [
"""


templateWidgetDocDataString = """  createKey ui_$namecamel ZeroOrOne [ $examples ] desc$nameCamel
"""

# WidgetCreateTests

headerWidgetCreateTests = """module WidgetCreateTests exposing (..)

{-| Unit tests for testing the view of the Widget

    **Generated** by generate-vocabulary.py
    
-}
import Test exposing (..)
import WidgetTestData exposing (..)


suite : Test
suite =
    describe "The Widget module"
        [ describe "Widget.view"
            [
"""

templateWidgetCreateTestsSettingsCorrect = """
                fuzz fuzzy$nameCamel "Correct settings for $description" <|
                \\value -> viewWidgetWithSettings (withSettings$nameCamel value)
                    |> findComponent selectors$nameCamel
"""
templateWidgetCreateTestsSettingsWrong = """
              , fuzz fuzzyNot$nameCamel "Wrong settings for $description" <|
                \\value -> viewWidgetWithSettings (withSettings$nameCamel value)
                    |> findWarningDiv           
"""

templateWidgetCreateTestsSettingsWrongAttr = """
             , fuzz fuzzyNot$nameCamel "Wrong settings for $description" <|
                \\value -> viewWidgetWithSettings (withSettings$nameCamel value)
                    |> findComponent selectorsNot$nameCamel
"""

templateWidgetCreateTestsUserSettingsCorrect = """
                fuzz fuzzy$nameCamel "Correct settings for $description" <|
                \\value -> viewWidgetWithUserSettings (withUserSettings$nameCamel value)
                    |> findComponent selectors$nameCamel
"""
templateWidgetCreateTestsUserSettingsWrong = """
              , fuzz fuzzyNot$nameCamel "Wrong settings for $description" <|
                \\value -> viewWidgetWithUserSettings (withUserSettings$nameCamel value)
                    |> findWarningDiv           
"""

templateWidgetCreateTestsUserSettingsWrongAttr = """
             , fuzz fuzzyNot$nameCamel "Wrong settings for $description" <|
                \\value -> viewWidgetWithUserSettings (withUserSettings$nameCamel value) 
                    |> findComponent selectorsNot$nameCamel
"""

templateWidgetCreateTestsStateCorrect = """
                fuzz fuzzy$nameCamel "Correct settings for $description" <|
                \\value -> viewWidgetWithState (withState$nameCamel value)
                    |> findComponent selectors$nameCamel
"""
templateWidgetCreateTestsStateWrong = """
              , fuzz fuzzyNot$nameCamel "Wrong settings for $description" <|
                \\value -> viewWidgetWithState (withState$nameCamel value)
                    |> findWarningDiv           
"""

templateWidgetCreateTestsStateWrongAttr = """
             , fuzz fuzzyNot$nameCamel "Wrong settings for $description" <|
                \\value -> viewWidgetWithState (withState$nameCamel value) 
                    |> findComponent selectorsNot$nameCamel
"""

templateTemp = """
-- $description
withState$nameCamel: Int -> SettingsEntity.Model
withState$nameCamel value = {
    attributes = [
        attr ui_tag (createString value)
    ]
 }

fuzzy$nameCamel : Fuzzer Int
fuzzy$nameCamel=intRange 1 30

fuzzyNot$nameCamel : Fuzzer Int
fuzzyNot$nameCamel= intRange 300 400

selectors$nameCamel : List Selector
selectors$nameCamel = [ Selector.attribute (attribute "title" "tag") ]

"""


footerWidgetCreateTests = """
            ]
        ]
"""
