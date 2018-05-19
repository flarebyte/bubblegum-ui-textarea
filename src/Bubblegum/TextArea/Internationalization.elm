module Bubblegum.TextArea.Internationalization exposing (..)

{-| Utility to translate some of the text used by the widget

    **Generated** by generate-translation.py

-}

import Bubblegum.TextArea.IsoLanguage exposing (IsoLanguage(..))
import Tuple exposing (first, second)


pickSingularOrPlural : Int -> ( String, String ) -> String
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
            pickSingularOrPlural howMany ( "word", "words" )

        Vietnamese ->
            pickSingularOrPlural howMany ( "word", "words" )

        Romanian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Dutch ->
            pickSingularOrPlural howMany ( "word", "words" )

        Korean ->
            pickSingularOrPlural howMany ( "word", "words" )

        Danish ->
            pickSingularOrPlural howMany ( "word", "words" )

        Indonesian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Hungarian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Ukrainian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Turkish ->
            pickSingularOrPlural howMany ( "word", "words" )

        Norwegian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Russian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Thai ->
            pickSingularOrPlural howMany ( "word", "words" )

        Finnish ->
            pickSingularOrPlural howMany ( "word", "words" )

        Bulgarian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Greek ->
            pickSingularOrPlural howMany ( "word", "words" )

        Portuguese ->
            pickSingularOrPlural howMany ( "word", "words" )

        Czech ->
            pickSingularOrPlural howMany ( "word", "words" )

        Persian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Slovak ->
            pickSingularOrPlural howMany ( "word", "words" )

        Hebrew ->
            pickSingularOrPlural howMany ( "word", "words" )

        Polish ->
            pickSingularOrPlural howMany ( "word", "words" )


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

        Swedish ->
            "information tag"

        Vietnamese ->
            "information tag"

        Romanian ->
            "information tag"

        Dutch ->
            "information tag"

        Korean ->
            "information tag"

        Danish ->
            "information tag"

        Indonesian ->
            "information tag"

        Hungarian ->
            "information tag"

        Ukrainian ->
            "information tag"

        Turkish ->
            "information tag"

        Norwegian ->
            "information tag"

        Russian ->
            "information tag"

        Thai ->
            "information tag"

        Finnish ->
            "information tag"

        Bulgarian ->
            "information tag"

        Greek ->
            "information tag"

        Portuguese ->
            "information tag"

        Czech ->
            "information tag"

        Persian ->
            "information tag"

        Slovak ->
            "information tag"

        Hebrew ->
            "information tag"

        Polish ->
            "information tag"
