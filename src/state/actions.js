const action = (type, payload = {}, error = false, meta = {}) => ({ type, payload, error, meta });

export const FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST';
export const fetchInfoRequest = () => action(FETCH_INFO_REQUEST);
export const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS';
export const fetchInfoSuccess = info => action(FETCH_INFO_SUCCESS, info);
export const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE';
export const fetchInfoFailure = message => action(FETCH_INFO_FAILURE, { message }, true);