module Bubblegum.TextArea.Internationalization exposing (..)

{-| Utility to translate some of the text used by the widget

    **generated** with make generate

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
        Arabic ->
            pickSingularOrPlural howMany ( "كلم", "كلم" )

        Chinese ->
            pickSingularOrPlural howMany ( "字", "字" )

        English ->
            pickSingularOrPlural howMany ( "word", "word" )

        French ->
            pickSingularOrPlural howMany ( "mot", "mot" )

        German ->
            pickSingularOrPlural howMany ( "wort", "wort" )

        Italian ->
            pickSingularOrPlural howMany ( "parola", "parola" )

        Japanese ->
            pickSingularOrPlural howMany ( "ワード", "ワード" )

        Russian ->
            pickSingularOrPlural howMany ( "слово", "слово" )

        Spanish ->
            pickSingularOrPlural howMany ( "palabra", "palabra" )


translateLanguage : IsoLanguage -> String
translateLanguage language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateWord : IsoLanguage -> String
translateWord language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateWords : IsoLanguage -> String
translateWords language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateInfoTag : IsoLanguage -> String
translateInfoTag language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateSuccessTag : IsoLanguage -> String
translateSuccessTag language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateWarningTag : IsoLanguage -> String
translateWarningTag language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateDangerTag : IsoLanguage -> String
translateDangerTag language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateUnit : IsoLanguage -> String
translateUnit language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateNumberOfChars : IsoLanguage -> String
translateNumberOfChars language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateNumberOfWords : IsoLanguage -> String
translateNumberOfWords language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateMinimumChars : IsoLanguage -> String
translateMinimumChars language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"


translateMinimumWords : IsoLanguage -> String
translateMinimumWords language =
    case language of
        Arabic ->
            "[object Object]"

        Chinese ->
            "[object Object]"

        English ->
            "[object Object]"

        French ->
            "[object Object]"

        German ->
            "[object Object]"

        Italian ->
            "[object Object]"

        Japanese ->
            "[object Object]"

        Russian ->
            "[object Object]"

        Spanish ->
            "[object Object]"
