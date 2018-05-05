module Bubblegum.TextAreaInternationalization exposing (translateWord)

{-| Setting key

@docs Model

-}

import String exposing (left)
import Tuple exposing (first, second)


translateWord : String -> Int -> String
translateWord language howMany =
    let
        languageCode =
            left 2 language

        pickTranslation singularOrPlural =
            if howMany < 2 then
                first singularOrPlural
            else
                second singularOrPlural
    in
    case languageCode of
        "en" ->
            pickTranslation ( "word", "words" )

        "ja" ->
            pickTranslation ( "ワード", "言葉" )

        "ar" ->
            pickTranslation ( "كلمة", "كلمات" )

        "fr" ->
            pickTranslation ( "mot", "mots" )

        "es" ->
            pickTranslation ( "palabra", "palabras" )

        "it" ->
            pickTranslation ( "parola", "parole" )

        "de" ->
            pickTranslation ( "wort", "wörter" )

        "zh" ->
            pickTranslation ( "字", "话" )

        _ ->
            pickTranslation ( "word", "words" )
