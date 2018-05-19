#!/usr/bin/python

import sys
import csv
from string import Template
from generator_helper import camelCase, camelCaseUpper, quoteArray, readCsv
from translation_template import * 

languages_csv = "languages.csv"
translations_csv = "translations.csv"

def formatTemplateLanguage(template, row):
        nameField, isoCodeField = row
        name = nameField.strip()
        isoCode = isoCodeField.strip()
        return Template(template).substitute(
            name=name,
            isoCode=isoCode,
            )

def formatTemplateI18n(template, row, indice, name):
        language = row[0].strip()
        translation = row[indice].strip()
        translation2 = ""
        if ";" in translation:
            a, b = translation.split(";", 2)
            translation = a.strip()
            translation2 = b.strip()            
        return Template(template).substitute(
            language=language,
            translation=translation,
            translation2=translation2,
            nameCamelUpper = name
            )

def formatTemplateI18nMethod(template, name):
        return Template(template).substitute(
            nameCamelUpper = name
        )


def getLanguageName(row):
    return row[0].strip()

def createIsolanguageType(languageNames):
    return "type IsoLanguage = " + " \n  | ".join(languageNames) 

def createIsoLanguage():
    content = readCsv(languages_csv)
    file = open("../src/Bubblegum/TextArea/IsoLanguage.elm", "w")
    file.write(headerLanguage)
    languageNames = []
    for row in content:
        if len(row) > 1 :
            file.write(formatTemplateLanguage(templateLanguage, row))
            languageNames.append(getLanguageName(row))
    file.write(footerLanguage)        
    file.write(createIsolanguageType(languageNames))
    file.close()

def createI18n():
    content = readCsv(translations_csv)
    file = open("../src/Bubblegum/TextArea/Internationalization.elm", "w")
    file.write(headerI18n)
    names = ["Word", "InfoTag"]
    templatesMethod = [templateI18nWithPluralMethod, templateI18nMethod]
    templatesMethodEnd = [templateI18nWithPluralMethodEnd, templateI18nMethodEnd]
    templateslanguage = [templateI18nWithPluralLanguage, templateI18nLanguage]
    maxIndice = len(names)
    codeParts = [formatTemplateI18nMethod(templatesMethod[i], names[i]) for i in range(0, maxIndice)]
    for row in content:
        if len(row) > 1 :
            for indice in range(0, maxIndice):
                temp = formatTemplateI18n(templateslanguage[indice], row, indice+1, names[indice])
                codeParts[indice] += temp
    
    codePartsEnd = [formatTemplateI18nMethod(templatesMethodEnd[i], names[i]) for i in range(0, maxIndice)]
    for i in range(0, maxIndice):
       codeParts[i] += codePartsEnd[i]
    file.write("\n\n".join(codeParts))        
    file.close()
        

def main(argv):
    createIsoLanguage()
    createI18n()
    
if __name__ == "__main__":
   main(sys.argv[1:])