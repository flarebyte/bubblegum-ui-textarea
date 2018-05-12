#!/usr/bin/python

import sys
import csv
from string import Template

filename = "ui-keys.csv"

def checkRangeRestriction(extra):
    if "small!" in extra:
        return "limitSmallRangeNotEmpty"
    elif "small" in extra:
        return "limitSmallRange"
    elif "medium!" in extra:
        return "limitMediumRangeNotEmpty"
    elif "medium" in extra:
        return "limitMediumRange"
    elif "very-large!" in extra:
        return "limitVeryLargeRangeNotEmpty"
    elif "very-large" in extra:
        return "limitVeryLargeRange"
    else:
        return None


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

import Bubblegum.TextArea.EntityHelper exposing (..)
import Bubblegum.TextArea.HelperLimits exposing (..)

"""
templateVocabularyHelperString = """
{-|  $description -}
get$nameCamel : SettingsEntity.Model -> Outcome String
get$nameCamel settings =
    findString ui_$nameCamel settings.attributes
        |> Validation.withinStringCharsRange $rangeRestriction
           
"""

templateVocabularyHelperBool = """
{-|  $description -}
get$nameCamel : SettingsEntity.Model -> Outcome Bool
get$nameCamel settings =
    findBool ui_$nameCamel settings.attributes

"""

def camelCase(st):
    output = ''.join(x for x in st.strip().title() if x.isalpha())
    return output[0].lower() + output[1:]

def camelCaseUpper(st):
    camel = camelCase(st.strip())
    return camel[0].upper() + camel[1:]

def readCsv(): 
    results = []
    with open(filename) as data_file:    
        csvreader = csv.reader(data_file)
        for row in csvreader:
            results.append(row)
    return results

def formatTemplate(template, row):
        nameField, descriptionField, signatureField, extra = row
        name = nameField.strip()
        description = descriptionField.strip()
        signature = signatureField.strip()
        namecamel = camelCase(name)
        nameCamel = camelCaseUpper(name)
        rangeRestriction=checkRangeRestriction(extra)
        return Template(template).substitute(
            name=name,
            description=description,
            signature=signature,
            namecamel=namecamel,
            nameCamel=nameCamel,
            rangeRestriction=rangeRestriction
            )
    

def createVocabulary():
    content = readCsv()
    file = open("../src/Bubblegum/TextArea/Vocabulary.elm", "w")
    file.write(headerVocabulary)
    for row in content:
        if len(row) > 2 :
            file.write(formatTemplate(templateVocabulary, row))
    file.close()    

def createKeyDescription():
    content = readCsv()
    file = open("KeyDescription.elm", "w")
    file.write(headerKeyDescription)
    for row in content:
        if len(row) > 2 :
            file.write(formatTemplate(templateKeyDescription, row))
    file.close()    

def createVocabularyHelper():
    content = readCsv()
    file = open("../src/Bubblegum/TextArea/VocabularyHelper.elm", "w")
    file.write(headerVocabularyHelper)
    for row in content:
        if len(row) > 2 :
            nameField, descriptionField, signatureField, extra = row
            if  signatureField.strip() == "Bool":
                file.write(formatTemplate(templateVocabularyHelperBool, row))
            if  signatureField.strip() == "String":
                file.write(formatTemplate(templateVocabularyHelperString, row))
                
    file.close()    

def main(argv):
    createVocabulary()
    createKeyDescription()
    createVocabularyHelper()
    

if __name__ == "__main__":
   main(sys.argv[1:])