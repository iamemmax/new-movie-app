import {
    EPISODE_FAIL,
    EPISODE_RESPONSE,
    EPISODE_SUCCESS,
    FETCH_TV_FAIL,
    FETCH_TV_RESPONSE,
    FETCH_TV_SUCCESS,
    LOADMORE_TV_FAIL,
    LOADMORE_TV_RESPONSE,
    LOADMORE_TV_SUCCESS,
    SINGLE_FAIL,
    SINGLE_RESPONSE,
    SINGLE_SUCCESS,
    WATCH_TRAILER_FAIL,
    WATCH_TRAILER_RESPONSE,
    WATCH_TRAILER_SUCCESS,
} from "../constant/constant";

const initialState = {};

export const FetchTvReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TV_RESPONSE:
        case LOADMORE_TV_RESPONSE:
            return { ...state, loading: true };
        case FETCH_TV_SUCCESS:
            return { ...state, loading: false, FilterTv: payload };

        case LOADMORE_TV_SUCCESS:
            return {
                ...state,
                loading: false,
                FilterTv: [...state.FilterTv, ...payload],
            };

        case LOADMORE_TV_FAIL:
            return { ...state, loading: false, error: payload };

        case WATCH_TRAILER_RESPONSE:
            return { ...state, loading: true };

        case WATCH_TRAILER_SUCCESS:
            return { ...state, loading: false, trailer: payload };

        case FETCH_TV_FAIL:
        case WATCH_TRAILER_FAIL:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
};

// video details
let iniState = {};

export const TvDetail = (state = iniState, { type, payload }) => {
    switch (type) {
        case SINGLE_RESPONSE:
            return { ...state, loading: true };

        case EPISODE_RESPONSE:
            return { ...state, loading: true };

        case SINGLE_SUCCESS:
            return { ...state, loading: false, single: payload };

            
        case EPISODE_SUCCESS:
            return { ...state, loading: false, episode: payload };



       
        case SINGLE_FAIL:
            return { ...state, loading: false, error: payload };

        case EPISODE_FAIL:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
