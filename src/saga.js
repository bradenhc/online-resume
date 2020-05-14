import { call, put, takeLatest } from 'redux-saga/effects';
import ResumeFetcher from 'api/resume-fetcher';
import { resumeFetchResponse, FETCH } from './state';


function* fetchInfo() {
    try {
        const fetcher = new ResumeFetcher();
        yield call(fetcher.fetch.bind(fetcher), '/resume.toml');
        yield put(resumeFetchResponse(fetcher.resume()));
    } catch (err) {
        yield put(resumeFetchResponse(err.message, true));
    }
}

function* saga() {
    yield takeLatest(FETCH, fetchInfo);
}

export default saga;
