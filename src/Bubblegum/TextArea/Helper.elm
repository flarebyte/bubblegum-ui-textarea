module Bubblegum.TextArea.Helper exposing (..)

{-| Setting key

@docs Model

-}

import Bubblegum.Entity.Outcome as Outcome exposing (..)
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.Validation as Validation
import Bubblegum.TextArea.EntityHelper exposing (..)
import Bubblegum.TextArea.VocabularyHelper exposing (getContentLanguage, getUserLanguage)
import List
import Maybe exposing (..)
import String exposing (lines, words)
import Tuple exposing (first, second)


successRange : Int -> ( Int, Int ) -> Bool
successRange size range =
    (size >= first range) && (size < second range)


dangerRange : Int -> ( Int, Int ) -> Bool
dangerRange size range =
    not (successRange size range)


successRatio : Int -> ( Int, Int ) -> String
successRatio size range =
    calculateRatio (first range) size |> toString


tupleify : a -> b -> ( a, b )
tupleify a b =
    ( a, b )


titleCharRange : ( Int, Int )
titleCharRange =
    ( 1, 70 )


{-| rows = number of lines + lines of with an average 80 chars
-}
calculateRows : String -> String
calculateRows content =
    let
        carriageReturns =
            content |> lines |> List.length

        numberOfChars =
            content |> String.length

        numberOfAvgLines =
            numberOfChars // 80

        numberOfLines =
            carriageReturns + numberOfAvgLines + 1
    in
    toString
        (if numberOfLines < 40 then
            numberOfLines
         else
            40
        )



-- The new title length is 70 characters before Google will truncate the title with ellipses


limit100 : Int -> Int
limit100 value =
    if value > 100 then
        100
    else
        value


numberOfWords : String -> Int
numberOfWords someText =
    String.words someText |> List.length


themeProgress : Outcome Bool -> Outcome Bool -> Outcome String
themeProgress a b =
    Outcome.or
        (a |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-success")
        (b |> Outcome.checkOrNone identity |> Outcome.trueMapToConstant "is-danger")
        |> Outcome.withDefault "is-info"


{-| The core representation of a field.
-}
calculateRatio : Int -> Int -> Int
calculateRatio target value =
    (toFloat value / toFloat target) * 100 |> round |> limit100


getUserLanguageOrEnglish : SettingsEntity.Model -> String
getUserLanguageOrEnglish settings =
    getUserLanguage settings
        |> Outcome.toMaybe
        |> Maybe.withDefault "en-GB"


getContentLanguageOrEnglish : SettingsEntity.Model -> String
getContentLanguageOrEnglish settings =
    getContentLanguage settings
        |> Outcome.toMaybe
        |> Maybe.withDefault "en-GB"
