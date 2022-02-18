import { LOADMORE_MOVIE_FAIL, LOADMORE_MOVIE_RESPONSE, LOADMORE_MOVIE_SUCCESS, SIMILAR_FAIL, SIMILAR_RESPONSE, SIMILAR_SUCCESS, SINGLE_CAST_FAIL, SINGLE_CAST_RESPONSE, SINGLE_CAST_SUCCESS, SINGLE_FAIL, SINGLE_RESPONSE, SINGLE_SUCCESS } from "../constant/constant"

// video details 
let iniState ={
  single:{},
  loading:true,
 
}

export const VideoInfo = (state=iniState, {type, payload}) =>{
    switch (type) {
        case SINGLE_RESPONSE:
        case SINGLE_CAST_RESPONSE:
            return {...state, loading:false }


        case SINGLE_SUCCESS:
            return {...state, loading:false,  single: payload}
            
        case SINGLE_CAST_SUCCESS:
            return {...state, loading:false, casts:payload}


            

        case SINGLE_FAIL:
        case SINGLE_CAST_FAIL:
            return {...state, loading:false, error:payload}
    
        default:
            return state;
    }

}


const similarState ={
    similar : []

}
export const similarReducer = (state=similarState, {type, payload}) => {
    switch (type) {
        case SIMILAR_RESPONSE:
         case LOADMORE_MOVIE_RESPONSE:
                return{...state, loading:true}

        case SIMILAR_SUCCESS:
                 return {...state, loading:false, similar:payload}
         case LOADMORE_MOVIE_SUCCESS:
                    return {...state, loading:false, similar:[...state.similar, ...payload]}
                    // return {...state, movies:[...state.movies, ...payload]}
          
        case SIMILAR_FAIL:
        case LOADMORE_MOVIE_FAIL:
            return {...state, loading:false, error:payload}
        default:
            return state;
    }
}