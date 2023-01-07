import { takeLatest } from 'redux-saga/effects';
import sagaActions from '../../actions/constants';
import { decrementSaga, incrementByNumberSaga, incrementSaga } from './counterSaga';


export function* counterSaga() {
  yield takeLatest(sagaActions.COUNTER_INCREMENT, incrementSaga);
  yield takeLatest(sagaActions.COUNTER_DECREMENT, decrementSaga);
  yield takeLatest(sagaActions.COUNTER_ADD_BY_NUMBER, incrementByNumberSaga);
}
