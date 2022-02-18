import {combineReducers} from "redux"
import {TrendingReducer, MovieReducer,  Searchquery, TrailerReducer} from "./HomeReducer"
import { VideoInfo, similarReducer} from "./SingleReducer"
import { FetchTvReducer, TvDetail} from "./TvReducer"


const allReducer = combineReducers({
    Trending: TrendingReducer,
    Movies:MovieReducer,
    similar:similarReducer,
    query:Searchquery,
    Single:VideoInfo,
    Tv:FetchTvReducer,
    Trailer:TrailerReducer,
    TvInfo:TvDetail,

})


export default allReducer