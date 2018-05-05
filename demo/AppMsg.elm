module AppMsg exposing (AppMsg(..))


type AppMsg
    = OnInputContent String
    | OnSelectSetting Bool String String
    | OnActivateSetting Bool String
