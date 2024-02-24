import { SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS, SET_ALERT, SET_LOADING, REMOVE_ALERT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false,
            };
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_ALERT:
            return {
                ...state,
            };
        default:
            return state;
    }
};
