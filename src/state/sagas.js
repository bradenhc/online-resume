import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'api/request';
import { fetchInfoSuccess, fetchInfoFailure, FETCH_INFO_REQUEST } from 'state/actions';

function* fetchInfo() {
    try {
        const res = yield call(api.get, '/info');
        yield put(fetchInfoSuccess(res.content));
    } catch (err) {
        yield put(fetchInfoFailure(err.message));
    }
}

function* saga() {
    yield takeLatest(FETCH_INFO_REQUEST, fetchInfo);
}

export default saga;
