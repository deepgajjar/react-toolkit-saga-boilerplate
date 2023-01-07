import { put } from "redux-saga/effects";
import { incrementAction } from "../../actions/counterActions";
import { decrement, increment, incrementByAmount } from "../../slices/counterSlice";

export function* incrementSaga({type,payload}) {

    console.log("incrementSaga ==>>",type,payload)
    yield put(increment())
}

export function* decrementSaga({type,payload}) {
    console.log("decrementSaga ==>>")
    yield put(decrement())
}

export function* incrementByNumberSaga({type,payload}) {
    console.log("incrementByNumberSaga ==>>",payload)
    yield put(incrementByAmount(payload))
}