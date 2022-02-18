import axios from "axios"
import { LOADMORE_MOVIE_FAIL, LOADMORE_MOVIE_RESPONSE, LOADMORE_MOVIE_SUCCESS, SIMILAR_FAIL, SIMILAR_RESPONSE, SIMILAR_SUCCESS, SINGLE_CAST_FAIL, SINGLE_CAST_RESPONSE, SINGLE_CAST_SUCCESS, SINGLE_FAIL, SINGLE_RESPONSE, SINGLE_SUCCESS } from "../constant/constant";

let accessKey = process.env.REACT_APP_ACCESSKEY_V3;
let url = "https://api.themoviedb.org/3"
// get Video details
export const VideoDetail = (id) => async (dispatch) =>{
    dispatch({type:SINGLE_RESPONSE})

    try {
    const response = await axios.get(`${url}/movie/${id}?api_key=${accessKey}&append_to_response=videos`)
 
        dispatch({type:SINGLE_SUCCESS, payload:response.data})
    } catch (error) {
        dispatch({type:SINGLE_FAIL, payload:error.message})
    }
}

// movies cast

export const movieCast = (id) => async (dispatch) =>{
    dispatch({type:SINGLE_CAST_RESPONSE})

    try {
    const response = await axios.get(`${url}/movie/${id}/credits?api_key=${accessKey}`)
        dispatch({type:SINGLE_CAST_SUCCESS, payload:response.data})
    } catch (error) {
        dispatch({type:SINGLE_CAST_FAIL, payload:error.message})
    }
}

// get similar movies
export const SimilarMovies = (id) => async (dispatch) =>{
    dispatch({type:SIMILAR_RESPONSE})

    try {
    const response = await axios.get(`${url}/movie/${id}/recommendations?api_key=${accessKey}&page=1&append_to_response=videos`)
        dispatch({type:SIMILAR_SUCCESS, payload:response.data.results})
    } catch (error) {
        dispatch({type:SIMILAR_FAIL, payload:error.message})
    }
}
// loadmore similar movies
export const LoadMoreSimilarMovies = (id, page) => async (dispatch) =>{

    dispatch({type:LOADMORE_MOVIE_RESPONSE})

    try {
        
    const response = await axios.get(`${url}/movie/${id}/similar?api_key=${accessKey}&page=${page}&append_to_response=videos`)
        dispatch({type:LOADMORE_MOVIE_SUCCESS, payload:response.data.results})
    } catch (error) {
        dispatch({type:LOADMORE_MOVIE_FAIL, payload:error.message})
    }
}
