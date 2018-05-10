#!/usr/bin/python

import sys
import csv
from string import Template

filename = "ui-keys.csv"

## Key Description

headerVocabulary = """
module Bubblegum.TextArea.Vocabulary exposing (..)

{-| List of keys used for the settings (generated)

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

{-| List of descriptions for the keys used for the settings (generated)

-}

"""
templateKeyDescription = """
desc$nameCamel: String
desc$nameCamel =
    "$description"    
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
        nameField, descriptionField, signatureField = row
        name = nameField.strip()
        description = descriptionField.strip()
        signature = signatureField.strip()
        namecamel = camelCase(name)
        nameCamel = camelCaseUpper(name)
        return Template(template).substitute(name=name, description=description, signature=signature, namecamel=namecamel, nameCamel=nameCamel)
    

def createVocabulary():
    content = readCsv()
    file = open("../src/Bubblegum/TextArea/Vocabulary.elm", "w")
    file.write(headerVocabulary)
    for row in content:
        if len(row) == 3 :
            file.write(formatTemplate(templateVocabulary, row))
    file.close()    

def createKeyDescription():
    content = readCsv()
    file = open("KeyDescription.elm", "w")
    file.write(headerKeyDescription)
    for row in content:
        if len(row) == 3 :
            file.write(formatTemplate(templateKeyDescription, row))
    file.close()    

def main(argv):
    createVocabulary()
    createKeyDescription()
    

if __name__ == "__main__":
   main(sys.argv[1:])