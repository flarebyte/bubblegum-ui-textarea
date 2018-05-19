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

        Russian ->
            pickSingularOrPlural howMany ( "слово", "слова" )

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

        Danish ->
            pickSingularOrPlural howMany ( "word", "words" )

        Indonesian ->
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

        Hebrew ->
            pickSingularOrPlural howMany ( "word", "words" )

        Romanian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Greek ->
            pickSingularOrPlural howMany ( "word", "words" )

        Ukrainian ->
            pickSingularOrPlural howMany ( "word", "words" )

        Bulgarian ->
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

        Czech ->
            pickSingularOrPlural howMany ( "word", "words" )


translateInfoTag : IsoLanguage -> String
translateInfoTag language =
    case language of
        English ->
            "information tag"

        Russian ->
            "информационный тег"

        German ->
            "Informationstag"

        Spanish ->
            "etiqueta de información"

        Japanese ->
            "情報タグ"

        French ->
            "étiquette d'information"

        Italian ->
            "tag di informazione"

        Chinese ->
            "信息標籤"

        Arabic ->
            "علامة المعلومات"

        Swedish ->
            "information tag"

        Danish ->
            "information tag"

        Indonesian ->
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

        Hebrew ->
            "information tag"

        Romanian ->
            "information tag"

        Greek ->
            "information tag"

        Ukrainian ->
            "information tag"

        Bulgarian ->
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

        Czech ->
            "information tag"


translateSuccessTag : IsoLanguage -> String
translateSuccessTag language =
    case language of
        English ->
            "tag indicating success"

        Russian ->
            "тег указывающий успех"

        German ->
            "Tag der den Erfolg anzeigt"

        Spanish ->
            "etiqueta que indica el éxito"

        Japanese ->
            "成功を示すタグ"

        French ->
            "étiquette indiquant le succès"

        Italian ->
            "tag che indica il successo"

        Chinese ->
            "成功標籤"

        Arabic ->
            "العلامة التي تشير إلى النجاح"

        Swedish ->
            "tag indicating success"

        Danish ->
            "tag indicating success"

        Indonesian ->
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

        Hebrew ->
            "tag indicating success"

        Romanian ->
            "tag indicating success"

        Greek ->
            "tag indicating success"

        Ukrainian ->
            "tag indicating success"

        Bulgarian ->
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

        Czech ->
            "tag indicating success"


translateWarningTag : IsoLanguage -> String
translateWarningTag language =
    case language of
        English ->
            "tag indicating warning"

        Russian ->
            "тег указывающий предупреждение"

        German ->
            "Tag der die Warnung anzeigt"

        Spanish ->
            "etiqueta que indica advertencia"

        Japanese ->
            "警告を示すタグ"

        French ->
            "étiquette indiquant l'avertissement"

        Italian ->
            "tag che indica avvertimento"

        Chinese ->
            "警告標籤"

        Arabic ->
            "العلامة التي تشير إلى التحذير"

        Swedish ->
            "tag indicating warning"

        Danish ->
            "tag indicating warning"

        Indonesian ->
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

        Hebrew ->
            "tag indicating warning"

        Romanian ->
            "tag indicating warning"

        Greek ->
            "tag indicating warning"

        Ukrainian ->
            "tag indicating warning"

        Bulgarian ->
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

        Czech ->
            "tag indicating warning"


translateDangerTag : IsoLanguage -> String
translateDangerTag language =
    case language of
        English ->
            "tag indicating danger"

        Russian ->
            "тег указывающий опасность"

        German ->
            "Tag der die Gefahr anzeigt"

        Spanish ->
            "etiqueta que indica peligro"

        Japanese ->
            "危険を示すタグ"

        French ->
            "étiquette indiquant le danger"

        Italian ->
            "tag che indica pericolo"

        Chinese ->
            "危險標籤"

        Arabic ->
            "العلامة التي تشير إلى الخطر"

        Swedish ->
            "tag indicating danger"

        Danish ->
            "tag indicating danger"

        Indonesian ->
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

        Hebrew ->
            "tag indicating danger"

        Romanian ->
            "tag indicating danger"

        Greek ->
            "tag indicating danger"

        Ukrainian ->
            "tag indicating danger"

        Bulgarian ->
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

        Czech ->
            "tag indicating danger"


translateUnit : IsoLanguage -> String
translateUnit language =
    case language of
        English ->
            "unit"

        Russian ->
            "единица"

        German ->
            "Einheit"

        Spanish ->
            "unidad"

        Japanese ->
            "単位"

        French ->
            "unité"

        Italian ->
            "unità"

        Chinese ->
            "單位"

        Arabic ->
            "الوحدة"

        Swedish ->
            "unit"

        Danish ->
            "unit"

        Indonesian ->
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

        Hebrew ->
            "unit"

        Romanian ->
            "unit"

        Greek ->
            "unit"

        Ukrainian ->
            "unit"

        Bulgarian ->
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

        Czech ->
            "unit"


translateNumberOfChars : IsoLanguage -> String
translateNumberOfChars language =
    case language of
        English ->
            "number of characters"

        Russian ->
            "количество символов"

        German ->
            "Anzahl der Zeichen"

        Spanish ->
            "número de caracteres"

        Japanese ->
            "文字数"

        French ->
            "nombre de caractères"

        Italian ->
            "numero di caratteri"

        Chinese ->
            "字符數"

        Arabic ->
            "عدد الأحرف"

        Swedish ->
            "number of characters"

        Danish ->
            "number of characters"

        Indonesian ->
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

        Hebrew ->
            "number of characters"

        Romanian ->
            "number of characters"

        Greek ->
            "number of characters"

        Ukrainian ->
            "number of characters"

        Bulgarian ->
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

        Czech ->
            "number of characters"


translateNumberOfWords : IsoLanguage -> String
translateNumberOfWords language =
    case language of
        English ->
            "number of words"

        Russian ->
            "количество слов"

        German ->
            "Anzahl der Wörter"

        Spanish ->
            "número de palabras"

        Japanese ->
            "単語数"

        French ->
            "nombre de mots"

        Italian ->
            "numero di parole"

        Chinese ->
            "字數"

        Arabic ->
            "عدد الكلمات"

        Swedish ->
            "number of words"

        Danish ->
            "number of words"

        Indonesian ->
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

        Hebrew ->
            "number of words"

        Romanian ->
            "number of words"

        Greek ->
            "number of words"

        Ukrainian ->
            "number of words"

        Bulgarian ->
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

        Czech ->
            "number of words"
