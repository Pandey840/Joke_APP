import { call, put, takeEvery } from 'redux-saga/effects';
import Action from './action';
import { fetchJokeApi } from '../Api';



function* fetchJoke(action) {
  
  try {
    const res = yield call(fetchJokeApi);

    yield put({ 
        type: Action.FETCH_SUCCESS, 
        payload: { joke: res.joke } });
  }

  catch (e) {
    yield put({
      type: Action.FETCH_FAILED,
      payload: { message: e.message },
    });
  }
}


function* mySaga() {
  yield takeEvery(Action.FETCH_REQUEST, fetchJoke);
}

export default mySaga;
