
module Bubblegum.TextArea.Internationalization exposing (..)

{-| Utility to translate some of the text used by the widget
 
    **Generated** by generate-translation.py

-}

import Tuple exposing (first, second)
import Bubblegum.TextArea.IsoLanguage exposing (IsoLanguage(..))

pickSingularOrPlural: Int -> (String, String) -> String
pickSingularOrPlural howMany singularOrPlural =
    if howMany < 2 then
        first singularOrPlural
    else
        second singularOrPlural
