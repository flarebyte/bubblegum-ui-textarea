
module Bubblegum.TextArea.Internationalization exposing (..)

{-| Utility to translate some of the text used by the widget
 
    **Generated** by generate-translation.py

-}

import String exposing (left)
import Tuple exposing (first, second)
import Bubblegum.TextArea.IsoLanguage exposing (IsoLanguage(..))

pickSingularOrPlural: Int -> (String, String) -> String
pickSingularOrPlural howMany singularOrPlural =
    if howMany < 2 then
        first singularOrPlural
    else
        second singularOrPlural

translateWord : IsoLanguage -> Int -> String
translateWord language howMany =
     case language of

       English ->
            pickSingularOrPlural howMany ( "word", "words" )

       German ->
            pickSingularOrPlural howMany ( "wort", "wörter" )

       Spanish ->
            pickSingularOrPlural howMany ( "palabra", "palabras" )

       Japanese ->
            pickSingularOrPlural howMany ( "ワード", "言葉" )

       French ->
            pickSingularOrPlural howMany ( "mot", "mots" )

       Italian ->
            pickSingularOrPlural howMany ( "parola", "parole" )

       Chinese ->
            pickSingularOrPlural howMany ( "字", "话" )

       Arabic ->
            pickSingularOrPlural howMany ( "كلمة", "كلمات" )

       other ->
        ""

translateInfoTag : IsoLanguage -> String
translateInfoTag language =
     case language of

       English ->
             "information tag"

       German ->
             "information tag"

       Spanish ->
             "information tag"

       Japanese ->
             "information tag"

       French ->
             "Etiquette informative"

       Italian ->
             "information tag"

       Chinese ->
             "information tag"

       Arabic ->
             "information tag"

        _ ->
            "aaa aa"
