
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

        Swedish ->
            translateWord English howMany --TODO

        Vietnamese ->
            translateWord English howMany --TODO

        Romanian ->
            translateWord English howMany --TODO

        Dutch ->
            translateWord English howMany --TODO

        Korean ->
            translateWord English howMany --TODO

        Danish ->
            translateWord English howMany --TODO

        Indonesian ->
            translateWord English howMany --TODO

        Hungarian ->
            translateWord English howMany --TODO

        Ukrainian ->
            translateWord English howMany --TODO

        Turkish ->
            translateWord English howMany --TODO

        Norwegian ->
            translateWord English howMany --TODO

        Russian ->
            translateWord English howMany --TODO

        Thai ->
            translateWord English howMany --TODO

        Finnish ->
            translateWord English howMany --TODO

        Bulgarian ->
            translateWord English howMany --TODO

        Greek ->
            translateWord English howMany --TODO

        Portuguese ->
            translateWord English howMany --TODO

        Czech ->
            translateWord English howMany --TODO

        Persian ->
            translateWord English howMany --TODO

        Slovak ->
            translateWord English howMany --TODO

        Hebrew ->
            translateWord English howMany --TODO

        Polish ->
            translateWord English howMany --TODO

