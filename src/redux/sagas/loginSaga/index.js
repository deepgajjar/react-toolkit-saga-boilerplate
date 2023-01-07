import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/constants';
import { initialize } from './loginSaga';

export function* loginSaga() {
  yield takeLatest(sagaActions.LOGIN_SAGA_ACTIONS, initialize);
}
