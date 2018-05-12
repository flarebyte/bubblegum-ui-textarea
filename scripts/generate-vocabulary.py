#!/usr/bin/python

import sys
import csv
from string import Template

ui_keys_csv = "ui-keys.csv"
ui_range_keys_csv = "ui-range-keys.csv"

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


textAreaWidgetDoc : WidgetDoc
textAreaWidgetDoc =
    { meta = WidgetPackageJson.meta
    , userSettings = [
"""


templateWidgetDocDataString = """ createKey ui_$namecamel ZeroOrOne [ $examples ] desc$nameCamel
"""
def camelCase(st):
    output = ''.join(x for x in st.strip().title() if x.isalpha())
    return output[0].lower() + output[1:]

def camelCaseUpper(st):
    camel = camelCase(st.strip())
    return camel[0].upper() + camel[1:]

def quoteArray(values):
    return ",".join(['"'+x+'"' for x in values])

def readCsv(filename): 
    results = []
    with open(filename) as data_file:    
        csvreader = csv.reader(data_file)
        for row in csvreader:
            results.append(row)
    return results

def generateExamples(suggested, signature):
    if (signature == "Bool"):
        return quoteArray(["true", "false", "other"])
    elif (signature == "Int"):
        return quoteArray(["0", "20", "40", "80", "160", "320", "-5"])
    elif (suggested is not None):
        suggestions = suggested.strip().split(";")
        suggestions.append("other")
        return quoteArray(suggestions)
    else:
        return quoteArray(["some text"])


def formatTemplate(template, row):
        nameField, descriptionField, signatureField, extra, examplesField = row
        name = nameField.strip()
        description = descriptionField.strip()
        signature = signatureField.strip()
        namecamel = camelCase(name)
        nameCamel = camelCaseUpper(name)
        rangeRestriction=checkRangeRestriction(extra)
        examples = generateExamples(examplesField, signature)
        return Template(template).substitute(
            name=name,
            description=description,
            signature=signature,
            namecamel=namecamel,
            nameCamel=nameCamel,
            rangeRestriction=rangeRestriction,
            examples = examples
            )

def formatRangeTemplate(template, row):
        kindField, unitField, descriptionField = row
        kind = kindField.strip()
        unit = unitField.strip()
        return Template(template).substitute(
            methodName="get{}{}Range".format(camelCaseUpper(kind),camelCaseUpper(unit)),
            minKey="ui_{}Minimum{}s".format(camelCase(kind),camelCaseUpper(unit)),
            maxKey="ui_{}Maximum{}s".format(camelCase(kind),camelCaseUpper(unit)),
            description=descriptionField.strip(),
            )
    

def createVocabulary():
    content = readCsv(ui_keys_csv)
    file = open("../src/Bubblegum/TextArea/Vocabulary.elm", "w")
    file.write(headerVocabulary)
    for row in content:
        if len(row) > 2 :
            file.write(formatTemplate(templateVocabulary, row))
    file.close()    

def createKeyDescription():
    content = readCsv(ui_keys_csv)
    file = open("../demo/KeyDescription.elm", "w")
    file.write(headerKeyDescription)
    for row in content:
        if len(row) > 2 :
            file.write(formatTemplate(templateKeyDescription, row))
    file.close()    

def createVocabularyHelper():
    content = readCsv(ui_keys_csv)
    rangeContent = readCsv(ui_range_keys_csv)
    file = open("../src/Bubblegum/TextArea/VocabularyHelper.elm", "w")
    file.write(headerVocabularyHelper)
    for row in content:
        if len(row) > 2 :
            nameField, descriptionField, signatureField, extraField, examplesField = row
            if  signatureField.strip() == "Bool":
                file.write(formatTemplate(templateVocabularyHelperBool, row))
            if  signatureField.strip() == "String":
                file.write(formatTemplate(templateVocabularyHelperString, row))
    for row in rangeContent:
        if len(row) > 2 :
            file.write(formatRangeTemplate(templateVocabularyHelperIntRange, row))
                
    file.close()    

def prefixWithComa(keyword, yes, text):
    if yes:
        return text.replace(keyword, ", "+keyword)
    else:
        return text

def createWidgetDocData():
    content = readCsv(ui_keys_csv)
    file = open("../demo/WidgetDocData.elm", "w")
    file.write(headerWidgetDocData)
    withComa = False
    for row in content:        
        if len(row) > 2:
            nameField, descriptionField, signatureField, extraField, examplesField = row
            if "user" in nameField:
                content = prefixWithComa("createKey", withComa, formatTemplate(templateWidgetDocDataString, row))
                file.write(content)
                withComa = True
    file.write(", settings = [\n")     
    content = readCsv(ui_keys_csv)   
    withComa = False
    for row in content:
        if len(row) > 2:
            nameField, descriptionField, signatureField, extraField, examplesField = row
            if not "user" in nameField:
                content = prefixWithComa("createKey", withComa, formatTemplate(templateWidgetDocDataString, row))
                file.write(content)
                withComa = True

    file.write("        ]\n    }")        
    file.close()    


def main(argv):
    createVocabulary()
    createKeyDescription()
    createVocabularyHelper()
    createWidgetDocData()
    
if __name__ == "__main__":
   main(sys.argv[1:])