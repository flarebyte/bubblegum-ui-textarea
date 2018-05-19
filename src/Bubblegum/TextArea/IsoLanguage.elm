
module Bubblegum.TextArea.IsoLanguage exposing (IsoLanguage(..), toIsoLanguage)

{-| Utility to identify ISO languages

    See https://en.wikipedia.org/wiki/Languages_used_on_the_Internet
    And https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

    **Generated** by generate-translation.py
-}

import String exposing (left)

getLanguageCode : String -> String
getLanguageCode language =
    left 2 language

toIsoLanguage: String -> IsoLanguage
toIsoLanguage language =
    case (getLanguageCode language) of

        "en" ->
            English

        "ru" ->
            Russian

        "de" ->
            German

        "es" ->
            Spanish

        "ja" ->
            Japanese

        "fr" ->
            French

        "pt" ->
            Portuguese

        "it" ->
            Italian

        "zh" ->
            Chinese

        "fa" ->
            Persian

        "pl" ->
            Polish

        "nl" ->
            Dutch

        "tr" ->
            Turkish

        "cs" ->
            Czech

        "ko" ->
            Korean

        "ar" ->
            Arabic

        "vi" ->
            Vietnamese

        "sv" ->
            Swedish

        "el" ->
            Greek

        "hu" ->
            Hungarian

        "ro" ->
            Romanian

        "in" ->
            Indonesian

        "sk" ->
            Slovak

        "da" ->
            Danish

        "fi" ->
            Finnish

        "th" ->
            Thai

        "bg" ->
            Bulgarian

        "uk" ->
            Ukrainian

        "iw" ->
            Hebrew

        "no" ->
            Norwegian

        _ ->
            English

type IsoLanguage = English 
  | Russian 
  | German 
  | Spanish 
  | Japanese 
  | French 
  | Portuguese 
  | Italian 
  | Chinese 
  | Persian 
  | Polish 
  | Dutch 
  | Turkish 
  | Czech 
  | Korean 
  | Arabic 
  | Vietnamese 
  | Swedish 
  | Greek 
  | Hungarian 
  | Romanian 
  | Indonesian 
  | Slovak 
  | Danish 
  | Finnish 
  | Thai 
  | Bulgarian 
  | Ukrainian 
  | Hebrew 
  | Norwegian