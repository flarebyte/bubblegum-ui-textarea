module PackageJson exposing (Model)


type alias Model =
    { version : String
    , summary : String
    , repository : String
    , license : String
    , exposed : String
    }
