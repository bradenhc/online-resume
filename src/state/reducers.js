import initialState from './initial-state';
import { FETCH_INFO_REQUEST, FETCH_INFO_SUCCESS, FETCH_INFO_FAILURE } from './actions';

function merge(state, obj) {
    return Object.assign({}, state, obj);
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_INFO_REQUEST:
            return merge(state, { isFetching: true });

        case FETCH_INFO_SUCCESS:
            return merge(state, { isFetching: false, error: false, message: null, ...action.payload });

        case FETCH_INFO_FAILURE:
            return merge(state, { isFetching: false, error: true, message: action.payload.message });

        default:
            return state;
    }
}
