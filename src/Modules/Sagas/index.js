import { all, fork, takeLatest, put, call } from 'redux-saga/effects';

//action names
// import {} from '../reducers/actionNames/user';

//axios request module
// import { apiRequest } from '../Http';

//TODO: 로그인
function loadHello(loginData) {
  // return apiRequest.post('/user/login', loginData, {
  //   withCredentials: true
  // });
}
function* hello(action) {
  try {
    const result = yield call(loadHello, action.data);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: {
        ...result.data,
        Post: [],
        Followers: [],
        Followings: [],
      },
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: 'LOG_IN_FAILURE',
      error,
    });
  }
}
function* watchHello() {
  yield takeLatest('Heool', hello);
}

//FIXME: e등록하기
export default function* globalSaga() {
  yield all([fork(watchHello)]);
}
