module WidgetTestData exposing (..)

{-| Setting key

-}

import Html exposing (..)
import Expect exposing (Expectation)
import Test.Html.Selector as Selector
import Bubblegum.TextArea.Adapter as Adapter
import Bubblegum.TextArea.Widget as Widget
import Bubblegum.Entity.SettingsEntity as SettingsEntity
import Bubblegum.Entity.StateEntity as StateEntity
import Bubblegum.Entity.Attribute as Attribute
import Fuzz exposing (Fuzzer, int, list, string, intRange)
import Test.Html.Query as Query
import Test.Html.Selector as Selector exposing(Selector)
import Bubblegum.TextArea.Vocabulary exposing (..)


type TestMsg
    = OnInputContent String

defaultAdapter : Adapter.Model TestMsg
defaultAdapter =
    { onInput = OnInputContent
    }
 

defaultUserSettings: SettingsEntity.Model
defaultUserSettings = {
    attributes = [
    ]
 }

defaultSettings: SettingsEntity.Model
defaultSettings = {
    attributes = [
    ]
 }          

defaultState: StateEntity.Model
defaultState = {
    attributes = [
        attr ui_content ipsum
    ]
 }          

withStateContent: String -> StateEntity.Model
withStateContent value =
    {
        attributes = [
            attr ui_content value
        ]
    }          


viewWidget : SettingsEntity.Model -> StateEntity.Model -> Html.Html TestMsg
viewWidget settings state = 
    Widget.view defaultAdapter defaultUserSettings settings state


findComponent:  List Selector-> Html.Html TestMsg -> Expectation 
findComponent selectors html= 
    html |> Query.fromHtml |> Query.findAll selectors |> Query.count (Expect.equal 1)

findWarningDiv: Html.Html TestMsg -> Expectation 
findWarningDiv html = 
    html |> Query.fromHtml |> Query.findAll [ Selector.class "warning" ] |> Query.count (Expect.atLeast 1)

-- The minimum number of characters needed for successful content
withSettingsSuccessMinimumChars: Int -> SettingsEntity.Model
withSettingsSuccessMinimumChars value = {
    attributes = [
        attr ui_successMinimumChars (value |> toString)
        , attr ui_successMaximumChars (value + 100 |> toString)
    ]
 }

fuzzySuccessMinimumChars : Fuzzer Int
fuzzySuccessMinimumChars=intRange 1 10000  

fuzzyNotSuccessMinimumChars : Fuzzer Int
fuzzyNotSuccessMinimumChars= Fuzz.oneOf [
        intRange -70000 -1
        , intRange 70000 1000000
    ]

selectorsSuccessMinimumChars : List Selector
selectorsSuccessMinimumChars = [ Selector.tag "progress" ]

-- The maximum number of characters needed for successful content
withSettingsSuccessMaximumChars: Int -> SettingsEntity.Model
withSettingsSuccessMaximumChars value = {
    attributes = [
        attr ui_successMinimumChars (value |> toString)
        , attr ui_successMaximumChars (value + 100 |> toString)
    ]
 }

fuzzySuccessMaximumChars : Fuzzer Int
fuzzySuccessMaximumChars=intRange 1 10000  

fuzzyNotSuccessMaximumChars : Fuzzer Int
fuzzyNotSuccessMaximumChars= Fuzz.oneOf [
        intRange -70000 -1
        , intRange 70000 1000000
    ]

selectorsSuccessMaximumChars : List Selector
selectorsSuccessMaximumChars = [ Selector.tag "progress" ]

-- Warning when under the minimum number of characters
withSettingsDangerMinimumChars: Int -> SettingsEntity.Model
withSettingsDangerMinimumChars value = {
    attributes = [
        attr ui_dangerMinimumChars (value |> toString)
        , attr ui_dangerMaximumChars (value + 100 |> toString)
    ]
 }

fuzzyDangerMinimumChars : Fuzzer Int
fuzzyDangerMinimumChars=intRange 1 10000  

fuzzyNotDangerMinimumChars : Fuzzer Int
fuzzyNotDangerMinimumChars= Fuzz.oneOf [
        intRange -70000 -1
        , intRange 70000 1000000
    ]

selectorsDangerMinimumChars : List Selector
selectorsDangerMinimumChars = [ Selector.tag "progress" ]

-- Warning when over the maximum number of characters
withSettingsDangerMaximumChars: Int -> SettingsEntity.Model
withSettingsDangerMaximumChars value = {
    attributes = [
        attr ui_dangerMinimumChars (value |> toString)
        , attr ui_dangerMaximumChars (value + 100 |> toString)
    ]
 }

fuzzyDangerMaximumChars : Fuzzer Int
fuzzyDangerMaximumChars=intRange 1 10000  

fuzzyNotDangerMaximumChars : Fuzzer Int
fuzzyNotDangerMaximumChars= Fuzz.oneOf [
        intRange -70000 -1
        , intRange 70000 1000000
    ]

selectorsDangerMaximumChars : List Selector
selectorsDangerMaximumChars = [ Selector.tag "progress" ]

-- The minimum number of words needed for successful content
withSettingsSuccessMinimumWords: Int -> SettingsEntity.Model
withSettingsSuccessMinimumWords value = {
    attributes = [
        attr ui_successMinimumWords (value |> toString)
        , attr ui_successMaximumWords (value + 100 |> toString)
    ]
 }

fuzzySuccessMinimumWords : Fuzzer Int
fuzzySuccessMinimumWords=intRange 1 10000  

fuzzyNotSuccessMinimumWords : Fuzzer Int
fuzzyNotSuccessMinimumWords= Fuzz.oneOf [
        intRange -70000 -1
        , intRange 70000 1000000
    ]

selectorsSuccessMinimumWords : List Selector
selectorsSuccessMinimumWords = [ Selector.tag "progress" ]

-- The maximum number of words needed for successful content
withSettingsSuccessMaximumWords: Int -> SettingsEntity.Model
withSettingsSuccessMaximumWords value = {
    attributes = [
        attr ui_successMinimumWords (value |> toString)
        , attr ui_successMaximumWords (value + 100 |> toString)
    ]
 }

fuzzySuccessMaximumWords : Fuzzer Int
fuzzySuccessMaximumWords=intRange 1 10000  

fuzzyNotSuccessMaximumWords : Fuzzer Int
fuzzyNotSuccessMaximumWords= Fuzz.oneOf [
        intRange -70000 -1
        , intRange 70000 1000000
    ]

selectorsSuccessMaximumWords : List Selector
selectorsSuccessMaximumWords = [ Selector.tag "progress" ]

-- Warning when under the minimum number of words
withSettingsDangerMinimumWords: Int -> SettingsEntity.Model
withSettingsDangerMinimumWords value = {
    attributes = [
        attr ui_dangerMinimumWords (value |> toString)
        , attr ui_dangerMaximumWords (value + 100 |> toString)
    ]
 }

fuzzyDangerMinimumWords : Fuzzer Int
fuzzyDangerMinimumWords=intRange 1 10000  

fuzzyNotDangerMinimumWords : Fuzzer Int
fuzzyNotDangerMinimumWords= Fuzz.oneOf [
        intRange -70000 -1
        , intRange 70000 1000000
    ]

selectorsDangerMinimumWords : List Selector
selectorsDangerMinimumWords = [ Selector.tag "progress" ]

-- Warning when over the maximum number of words
withSettingsDangerMaximumWords: Int -> SettingsEntity.Model
withSettingsDangerMaximumWords value = {
    attributes = [
        attr ui_dangerMinimumWords (value |> toString)
        , attr ui_dangerMaximumWords (value + 100 |> toString)
    ]
 }

fuzzyDangerMaximumWords : Fuzzer Int
fuzzyDangerMaximumWords=intRange 1 10000  

fuzzyNotDangerMaximumWords : Fuzzer Int
fuzzyNotDangerMaximumWords= Fuzz.oneOf [
        intRange -70000 -1
        , intRange 70000 1000000
    ]

selectorsDangerMaximumWords : List Selector
selectorsDangerMaximumWords = [ Selector.tag "progress" ]

-- Short hint describing the expected content
withSettingsPlaceholder: Int -> SettingsEntity.Model
withSettingsPlaceholder value = {
    attributes = [
        attr ui_placeholder (createString value)
    ]
 }

fuzzyPlaceholder : Fuzzer Int
fuzzyPlaceholder=intRange 1 50 

fuzzyNotPlaceholder : Fuzzer Int
fuzzyNotPlaceholder= intRange 300 500 

selectorsPlaceholder : List Selector
selectorsPlaceholder = [ Selector.tag "progress" ]

-- Label related to the field
withSettingsLabel: Int -> SettingsEntity.Model
withSettingsLabel value = {
    attributes = [
        attr ui_label (createString value)
    ]
 }

fuzzyLabel : Fuzzer Int
fuzzyLabel=intRange 10 50  

fuzzyNotLabel : Fuzzer Int
fuzzyNotLabel= intRange 300 400 

selectorsLabel : List Selector
selectorsLabel = [ Selector.tag "progress" ]

-- Some help tip related to the field
withSettingsHelp: Int -> SettingsEntity.Model
withSettingsHelp value = {
    attributes = [
        attr ui_help (createString value)
    ]
 }

fuzzyHelp : Fuzzer Int
fuzzyHelp=intRange 10 50 

fuzzyNotHelp : Fuzzer Int
fuzzyNotHelp= intRange 300 400 

selectorsHelp : List Selector
selectorsHelp = [ Selector.tag "progress" ]

-- Tag used to describe the field
withSettingsTag: Int -> SettingsEntity.Model
withSettingsTag value = {
    attributes = [
        attr ui_tag (createString value)
    ]
 }

fuzzyTag : Fuzzer Int
fuzzyTag=intRange 10 50

fuzzyNotTag : Fuzzer Int
fuzzyNotTag= intRange 300 400

selectorsTag : List Selector
selectorsTag = [ Selector.tag "progress" ]

-- private

attr: String -> String -> Attribute.Model
attr key value =
     { id = Nothing
    , key = key
    , facets = []
    , values = [value]
    }  

ipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris dolor, suscipit at nulla a, molestie scelerisque lectus. Nullam quis leo a felis auctor mollis ac vel turpis. Praesent eleifend ut sem et hendrerit. Vivamus sagittis tortor ipsum, eu suscipit lectus accumsan a. Vivamus elit ante, ornare vitae sem at, ornare eleifend nibh. Mauris venenatis nunc sit amet leo aliquam, in ornare quam vehicula. Morbi consequat ante sed felis semper egestas. Donec efficitur suscipit ipsum vitae ultrices. Quisque eget vehicula odio. Aliquam vitae posuere mauris. Nulla ac pulvinar felis. Integer odio libero, vulputate in erat in, tristique cursus erat."

createString: Int -> String
createString size  =
    String.left size ipsum