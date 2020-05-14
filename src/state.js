import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

const action = (type, payload = null, error = false) => ({ type, payload, error });

export const FETCH = 'resume/fetch';
export const resumeFetch = () => action(FETCH);
export const FETCH_RESPONSE = 'resume/fetch-response';
export const resumeFetchResponse = (resume, error = false) => action(FETCH_RESPONSE, { resume }, error);

const defaultState = {
  error: false,
  message: null,
  resume: null,
  isFetching: false,
};

export const reduce = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_RESPONSE:
      const next = { ...state, isFetching: false };
      if (action.error) {
        next.error = true;
        next.message = action.payload.message;
      } else {
        next.error = false;
        next.message = 'Successfully fetched resume';
        next.resume = action.payload.resume;
      }
      return next;

    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export const store = createStore(reduce, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(saga);
