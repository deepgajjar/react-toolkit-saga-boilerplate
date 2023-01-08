import { put,call } from "redux-saga/effects";
import axiosInstance from "../../../api";
import API from "../../../api/Api";
import { decrement, increment, incrementByAmount } from "../../slices/counterSlice";
const getPosts = (uri) => axiosInstance.get(uri)


export function* incrementSaga({type,payload}) {
    console.log("incrementSaga ==>>",type,payload)
    try {
       const response =  yield call(API.get,"posts/1")
        console.log("success response ==>> ",response)
    } catch (error) {
        console.log("error response ==>> ",error)
    }
  
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