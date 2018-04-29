module Bubblegum.SettingsValue exposing (..)

{-| Setting key

@docs Model

-}
import Result

type Positivity = Positive | Negative | StrictlyPositive |  StrictlyNegative | NonZero

type SettingsValue =
    Yes
    | No
    | None
    | AnyInt Int
    | PositiveInt Int
    | AnyFloat Float
    | PositiveFloat
    | AnyDateTime String
    | AnyDate String
    | AnyTime String
    | AnyDuration String
    | AnyString String
    | NormalizedString String
    | StringEnum String (List String)
    | AnyUri String
    | AnyUrl String
    | CompactUri String
    | CompactUriEnum String (List String)
    | Pair SettingsValue SettingsValue
    | Triple SettingsValue SettingsValue SettingsValue
    | UniqueList (List SettingsValue)


a = Pair (AnyInt 1) (AnyInt 1)






