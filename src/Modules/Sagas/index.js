import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';
import triplist from '../../Contants/triplist';
import { setInitialTrips, setMoreTrips } from '../Reducers/List/actions';
import { stopLoading, setLoading } from '../Reducers/Loading/actions';

function* watchLoadMoreTrips() {
  yield takeLatest('loadMoreTrips', loadMoreTrips);
}

function* loadMoreTrips(action) {
  yield put(setLoading());
  const { page } = action.payload;
  const trips = yield triplist.slice(page * 10, page * 10 + 10);
  yield delay(1000);
  yield put(setMoreTrips({ page, trips }));
  yield put(stopLoading());
}

function* loadInitialTrips() {
  yield put(setLoading());
  const trips = yield triplist.slice(0, 10);
  yield delay(1000);
  yield put(setInitialTrips({ trips }));
  yield put(stopLoading());
}

function* watchLoadInitialTrips() {
  yield takeLatest('loadInitialTrips', loadInitialTrips);
}

//FIXME: e등록하기
export default function* globalSaga() {
  yield all([fork(watchLoadInitialTrips), fork(watchLoadMoreTrips)]);
}
