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

        _ ->
            pickTranslation ( "word", "words" )
