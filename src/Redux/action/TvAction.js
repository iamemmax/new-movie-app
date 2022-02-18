import { EPISODE_FAIL, EPISODE_RESPONSE, EPISODE_SUCCESS, FETCH_TV_FAIL, FETCH_TV_RESPONSE, FETCH_TV_SUCCESS, LOADMORE_TV_FAIL, LOADMORE_TV_RESPONSE, LOADMORE_TV_SUCCESS, SINGLE_FAIL, SINGLE_RESPONSE, SINGLE_SUCCESS, WATCH_TRAILER_FAIL, WATCH_TRAILER_RESPONSE, WATCH_TRAILER_SUCCESS } from "../constant/constant";
import axios from "axios"
let accessKey = process.env.REACT_APP_ACCESSKEY_V3;
let Apiurl = "https://api.themoviedb.org/3"


// @DESC fetching tv videos
//@ACCESS PUBLIC
export const GetTvAction = (filter, query) => async (dispatch) =>{
    dispatch({type:FETCH_TV_RESPONSE})
    let url
    try {
        let  mainUrl = `${Apiurl}/tv/${filter}?api_key=${accessKey}&language=en-US&page=1&append_to_response=videos`
        let  queryUrl = `${Apiurl}/search/tv?api_key=${accessKey}&language=en-US&page=1&query=${query}`
        query ? url =queryUrl : url = mainUrl
        const response  = await axios.get(url)
        console.log(response);
        dispatch({type:FETCH_TV_SUCCESS, payload:response.data.results})
    } catch (error) {
        dispatch({type:FETCH_TV_FAIL, error:error.message})
    }
}

// @DESC loading More tv videos
//@ACCESS PUBLIC
export const LoadMoreTv = (filter, page, query,) => async (dispatch) =>{
    console.log("filter", filter);
    console.log("page", page);
    console.log("query", query);
    dispatch({type:LOADMORE_TV_RESPONSE})
    let url
    try {
        let  mainUrl = `${Apiurl}/tv/${filter}?api_key=${accessKey}&language=en-US&page=${page}`
        let  queryUrl = `${Apiurl}/search/tv?api_key=${accessKey}&language=en-US&page=${page}&query=${query}`
        query ? url= queryUrl : url = mainUrl
        const response  = await axios.get(url)
        console.log(response);
        dispatch({type:LOADMORE_TV_SUCCESS, payload:response.data.results})
    } catch (error) {
        dispatch({type:LOADMORE_TV_FAIL, error:error.message})
    }

}

export const TvTrailer = (id) => async (dispatch) =>{
    dispatch({type:WATCH_TRAILER_RESPONSE})
    console.log(id);
    try {
    let url = `${Apiurl}/tv/${id}/videos?api_key=${accessKey}&language=en-US`
    const response = await  axios.get(url)
    console.log(response);
    let trailerVideo = response.data.results.find(data => data.name === "Official Trailer" || data.type === "Trailer")

    dispatch({type:WATCH_TRAILER_SUCCESS, payload:trailerVideo})
} catch (error) {
    dispatch({type:WATCH_TRAILER_FAIL, payload:error.message})
    
}
}

export const TvDetail = (id) => async (dispatch) =>{
    dispatch({type:SINGLE_RESPONSE})

    try {
    const response = await axios.get(`${Apiurl}/tv/${id}?api_key=${accessKey}&append_to_response=videos`)
 
        dispatch({type:SINGLE_SUCCESS, payload:response.data})
    } catch (error) {
        dispatch({type:SINGLE_FAIL, payload:error.message})
    }
}

// @DESC  get episode by season number
export const TvEpisodes = (id, number) => async (dispatch) =>{
    console.log(id, number);
    dispatch({type:EPISODE_RESPONSE})

    try {
    const response = await axios.get(`${Apiurl}/tv/${id}/season/${number}?api_key=${accessKey}&append_to_response=videos`)
    // https://api.themoviedb.org/3/tv/60574/season/1?api_key=5616527c72a97873fdb1898484287dee&language=en-US&append_to_response=videosz
        dispatch({type:EPISODE_SUCCESS, payload:response.data})
    } catch (error) {
        dispatch({type:EPISODE_FAIL, payload:error.message})
    }
}