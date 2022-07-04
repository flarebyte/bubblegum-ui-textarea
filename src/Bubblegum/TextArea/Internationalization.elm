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
        Arabic ->
            pickSingularOrPlural howMany ( "كلمة", "كلمات" )

        Chinese ->
            pickSingularOrPlural howMany ( "字", "话" )

        English ->
            pickSingularOrPlural howMany ( "word", "words" )

        French ->
            pickSingularOrPlural howMany ( "mot", "mots" )

        German ->
            pickSingularOrPlural howMany ( "wort", "wörter" )

        Italian ->
            pickSingularOrPlural howMany ( "parola", "parole" )

        Japanese ->
            pickSingularOrPlural howMany ( "ワード", "言葉" )

        Russian ->
            pickSingularOrPlural howMany ( "слово", "слова" )

        Spanish ->
            pickSingularOrPlural howMany ( "palabra", "palabras" )

        Swedish ->
            pickSingularOrPlural howMany ( "word", "words" )

        Danish ->
            pickSingularOrPlural howMany ( "word", "words" )

        Bulgarian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Portuguese ->
            pickSingularOrPlural howMany ( "word", "words" )

        Vietnamese ->
            pickSingularOrPlural howMany ( "word", "words" )

        Finnish ->
            pickSingularOrPlural howMany ( "word", "words" )

        Hungarian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Turkish ->
            pickSingularOrPlural howMany ( "word", "words" )

        Czech ->
            pickSingularOrPlural howMany ( "word", "words" )

        Romanian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Greek ->
            pickSingularOrPlural howMany ( "word", "words" )

        Ukrainian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Indonesian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Norwegian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Persian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Slovak ->
            pickSingularOrPlural howMany ( "word", "words" )

        Dutch ->
            pickSingularOrPlural howMany ( "word", "words" )

        Polish ->
            pickSingularOrPlural howMany ( "word", "words" )

        Korean ->
            pickSingularOrPlural howMany ( "word", "words" )

        Thai ->
            pickSingularOrPlural howMany ( "word", "words" )

        Hebrew ->
            pickSingularOrPlural howMany ( "word", "words" )


translateInfoTag : IsoLanguage -> String
translateInfoTag language =
    case language of
        Arabic ->
            "علامة المعلومات"

        Chinese ->
            "信息標籤"

        English ->
            "information tag"

        French ->
            "étiquette d'information"

        German ->
            "Informationstag"

        Italian ->
            "tag di informazione"

        Japanese ->
            "情報タグ"

        Russian ->
            "информационный тег"

        Spanish ->
            "etiqueta de información"

        Swedish ->
            "information tag"

        Danish ->
            "information tag"

        Bulgarian ->
            "information tag"

        Portuguese ->
            "information tag"

        Vietnamese ->
            "information tag"

        Finnish ->
            "information tag"

        Hungarian ->
            "information tag"

        Turkish ->
            "information tag"

        Czech ->
            "information tag"

        Romanian ->
            "information tag"

        Greek ->
            "information tag"

        Ukrainian ->
            "information tag"

        Indonesian ->
            "information tag"

        Norwegian ->
            "information tag"

        Persian ->
            "information tag"

        Slovak ->
            "information tag"

        Dutch ->
            "information tag"

        Polish ->
            "information tag"

        Korean ->
            "information tag"

        Thai ->
            "information tag"

        Hebrew ->
            "information tag"


translateSuccessTag : IsoLanguage -> String
translateSuccessTag language =
    case language of
        Arabic ->
            "العلامة التي تشير إلى النجاح"

        Chinese ->
            "成功標籤"

        English ->
            "tag indicating success"

        French ->
            "étiquette indiquant le succès"

        German ->
            "Tag der den Erfolg anzeigt"

        Italian ->
            "tag che indica il successo"

        Japanese ->
            "成功を示すタグ"

        Russian ->
            "тег указывающий успех"

        Spanish ->
            "etiqueta que indica el éxito"

        Swedish ->
            "tag indicating success"

        Danish ->
            "tag indicating success"

        Bulgarian ->
            "tag indicating success"

        Portuguese ->
            "tag indicating success"

        Vietnamese ->
            "tag indicating success"

        Finnish ->
            "tag indicating success"

        Hungarian ->
            "tag indicating success"

        Turkish ->
            "tag indicating success"

        Czech ->
            "tag indicating success"

        Romanian ->
            "tag indicating success"

        Greek ->
            "tag indicating success"

        Ukrainian ->
            "tag indicating success"

        Indonesian ->
            "tag indicating success"

        Norwegian ->
            "tag indicating success"

        Persian ->
            "tag indicating success"

        Slovak ->
            "tag indicating success"

        Dutch ->
            "tag indicating success"

        Polish ->
            "tag indicating success"

        Korean ->
            "tag indicating success"

        Thai ->
            "tag indicating success"

        Hebrew ->
            "tag indicating success"


translateWarningTag : IsoLanguage -> String
translateWarningTag language =
    case language of
        Arabic ->
            "العلامة التي تشير إلى التحذير"

        Chinese ->
            "警告標籤"

        English ->
            "tag indicating warning"

        French ->
            "étiquette indiquant l'avertissement"

        German ->
            "Tag der die Warnung anzeigt"

        Italian ->
            "tag che indica avvertimento"

        Japanese ->
            "警告を示すタグ"

        Russian ->
            "тег указывающий предупреждение"

        Spanish ->
            "etiqueta que indica advertencia"

        Swedish ->
            "tag indicating warning"

        Danish ->
            "tag indicating warning"

        Bulgarian ->
            "tag indicating warning"

        Portuguese ->
            "tag indicating warning"

        Vietnamese ->
            "tag indicating warning"

        Finnish ->
            "tag indicating warning"

        Hungarian ->
            "tag indicating warning"

        Turkish ->
            "tag indicating warning"

        Czech ->
            "tag indicating warning"

        Romanian ->
            "tag indicating warning"

        Greek ->
            "tag indicating warning"

        Ukrainian ->
            "tag indicating warning"

        Indonesian ->
            "tag indicating warning"

        Norwegian ->
            "tag indicating warning"

        Persian ->
            "tag indicating warning"

        Slovak ->
            "tag indicating warning"

        Dutch ->
            "tag indicating warning"

        Polish ->
            "tag indicating warning"

        Korean ->
            "tag indicating warning"

        Thai ->
            "tag indicating warning"

        Hebrew ->
            "tag indicating warning"


translateDangerTag : IsoLanguage -> String
translateDangerTag language =
    case language of
        Arabic ->
            "العلامة التي تشير إلى الخطر"

        Chinese ->
            "危險標籤"

        English ->
            "tag indicating danger"

        French ->
            "étiquette indiquant le danger"

        German ->
            "Tag der die Gefahr anzeigt"

        Italian ->
            "tag che indica pericolo"

        Japanese ->
            "危険を示すタグ"

        Russian ->
            "тег указывающий опасность"

        Spanish ->
            "etiqueta que indica peligro"

        Swedish ->
            "tag indicating danger"

        Danish ->
            "tag indicating danger"

        Bulgarian ->
            "tag indicating danger"

        Portuguese ->
            "tag indicating danger"

        Vietnamese ->
            "tag indicating danger"

        Finnish ->
            "tag indicating danger"

        Hungarian ->
            "tag indicating danger"

        Turkish ->
            "tag indicating danger"

        Czech ->
            "tag indicating danger"

        Romanian ->
            "tag indicating danger"

        Greek ->
            "tag indicating danger"

        Ukrainian ->
            "tag indicating danger"

        Indonesian ->
            "tag indicating danger"

        Norwegian ->
            "tag indicating danger"

        Persian ->
            "tag indicating danger"

        Slovak ->
            "tag indicating danger"

        Dutch ->
            "tag indicating danger"

        Polish ->
            "tag indicating danger"

        Korean ->
            "tag indicating danger"

        Thai ->
            "tag indicating danger"

        Hebrew ->
            "tag indicating danger"


translateUnit : IsoLanguage -> String
translateUnit language =
    case language of
        Arabic ->
            "الوحدة"

        Chinese ->
            "單位"

        English ->
            "unit"

        French ->
            "unité"

        German ->
            "Einheit"

        Italian ->
            "unità"

        Japanese ->
            "単位"

        Russian ->
            "единица"

        Spanish ->
            "unidad"

        Swedish ->
            "unit"

        Danish ->
            "unit"

        Bulgarian ->
            "unit"

        Portuguese ->
            "unit"

        Vietnamese ->
            "unit"

        Finnish ->
            "unit"

        Hungarian ->
            "unit"

        Turkish ->
            "unit"

        Czech ->
            "unit"

        Romanian ->
            "unit"

        Greek ->
            "unit"

        Ukrainian ->
            "unit"

        Indonesian ->
            "unit"

        Norwegian ->
            "unit"

        Persian ->
            "unit"

        Slovak ->
            "unit"

        Dutch ->
            "unit"

        Polish ->
            "unit"

        Korean ->
            "unit"

        Thai ->
            "unit"

        Hebrew ->
            "unit"


translateNumberOfChars : IsoLanguage -> String
translateNumberOfChars language =
    case language of
        Arabic ->
            "عدد الأحرف"

        Chinese ->
            "字符數"

        English ->
            "number of characters"

        French ->
            "nombre de caractères"

        German ->
            "Anzahl der Zeichen"

        Italian ->
            "numero di caratteri"

        Japanese ->
            "文字数"

        Russian ->
            "количество символов"

        Spanish ->
            "número de caracteres"

        Swedish ->
            "number of characters"

        Danish ->
            "number of characters"

        Bulgarian ->
            "number of characters"

        Portuguese ->
            "number of characters"

        Vietnamese ->
            "number of characters"

        Finnish ->
            "number of characters"

        Hungarian ->
            "number of characters"

        Turkish ->
            "number of characters"

        Czech ->
            "number of characters"

        Romanian ->
            "number of characters"

        Greek ->
            "number of characters"

        Ukrainian ->
            "number of characters"

        Indonesian ->
            "number of characters"

        Norwegian ->
            "number of characters"

        Persian ->
            "number of characters"

        Slovak ->
            "number of characters"

        Dutch ->
            "number of characters"

        Polish ->
            "number of characters"

        Korean ->
            "number of characters"

        Thai ->
            "number of characters"

        Hebrew ->
            "number of characters"


translateNumberOfWords : IsoLanguage -> String
translateNumberOfWords language =
    case language of
        Arabic ->
            "عدد الكلمات"

        Chinese ->
            "字數"

        English ->
            "number of words"

        French ->
            "nombre de mots"

        German ->
            "Anzahl der Wörter"

        Italian ->
            "numero di parole"

        Japanese ->
            "単語数"

        Russian ->
            "количество слов"

        Spanish ->
            "número de palabras"

        Swedish ->
            "number of words"

        Danish ->
            "number of words"

        Bulgarian ->
            "number of words"

        Portuguese ->
            "number of words"

        Vietnamese ->
            "number of words"

        Finnish ->
            "number of words"

        Hungarian ->
            "number of words"

        Turkish ->
            "number of words"

        Czech ->
            "number of words"

        Romanian ->
            "number of words"

        Greek ->
            "number of words"

        Ukrainian ->
            "number of words"

        Indonesian ->
            "number of words"

        Norwegian ->
            "number of words"

        Persian ->
            "number of words"

        Slovak ->
            "number of words"

        Dutch ->
            "number of words"

        Polish ->
            "number of words"

        Korean ->
            "number of words"

        Thai ->
            "number of words"

        Hebrew ->
            "number of words"


translateMinimumChars : IsoLanguage -> String
translateMinimumChars language =
    case language of
        Arabic ->
            "الحد الأدنى لعدد الأحرف المتوقع"

        Chinese ->
            "最少预期字符数"

        English ->
            "minimum number of characters expected"

        French ->
            "nombre minimum de caractères attendus"

        German ->
            "Mindestanzahl der erwarteten Zeichen"

        Italian ->
            "numero minimo di caratteri previsto"

        Japanese ->
            "期待される最小文字数"

        Russian ->
            "минимальное количество ожидаемых символов"

        Spanish ->
            "número mínimo de caracteres esperado"

        Swedish ->
            "minimum number of characters expected"

        Danish ->
            "minimum number of characters expected"

        Bulgarian ->
            "minimum number of characters expected"

        Portuguese ->
            "minimum number of characters expected"

        Vietnamese ->
            "minimum number of characters expected"

        Finnish ->
            "minimum number of characters expected"

        Hungarian ->
            "minimum number of characters expected"

        Turkish ->
            "minimum number of characters expected"

        Czech ->
            "minimum number of characters expected"

        Romanian ->
            "minimum number of characters expected"

        Greek ->
            "minimum number of characters expected"

        Ukrainian ->
            "minimum number of characters expected"

        Indonesian ->
            "minimum number of characters expected"

        Norwegian ->
            "minimum number of characters expected"

        Persian ->
            "minimum number of characters expected"

        Slovak ->
            "minimum number of characters expected"

        Dutch ->
            "minimum number of characters expected"

        Polish ->
            "minimum number of characters expected"

        Korean ->
            "minimum number of characters expected"

        Thai ->
            "minimum number of characters expected"

        Hebrew ->
            "minimum number of characters expected"


translateMinimumWords : IsoLanguage -> String
translateMinimumWords language =
    case language of
        Arabic ->
            "الحد الأدنى لعدد الكلمات المتوقع"

        Chinese ->
            "预计最少字数"

        English ->
            "minimum number of words expected"

        French ->
            "nombre minimum de mots attendus"

        German ->
            "Mindestanzahl der erwarteten Wörter"

        Italian ->
            "numero minimo di parole previsto"

        Japanese ->
            "予想される単語の最小数"

        Russian ->
            "минимальное количество ожидаемых слов"

        Spanish ->
            "número mínimo de palabras esperado"

        Swedish ->
            "minimum number of words expected"

        Danish ->
            "minimum number of words expected"

        Bulgarian ->
            "minimum number of words expected"

        Portuguese ->
            "minimum number of words expected"

        Vietnamese ->
            "minimum number of words expected"

        Finnish ->
            "minimum number of words expected"

        Hungarian ->
            "minimum number of words expected"

        Turkish ->
            "minimum number of words expected"

        Czech ->
            "minimum number of words expected"

        Romanian ->
            "minimum number of words expected"

        Greek ->
            "minimum number of words expected"

        Ukrainian ->
            "minimum number of words expected"

        Indonesian ->
            "minimum number of words expected"

        Norwegian ->
            "minimum number of words expected"

        Persian ->
            "minimum number of words expected"

        Slovak ->
            "minimum number of words expected"

        Dutch ->
            "minimum number of words expected"

        Polish ->
            "minimum number of words expected"

        Korean ->
            "minimum number of words expected"

        Thai ->
            "minimum number of words expected"

        Hebrew ->
            "minimum number of words expected"
