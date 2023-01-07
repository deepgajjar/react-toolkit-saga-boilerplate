import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './sagas/rootSaga';
import counter from './slices/counterSlice';

// import counterReducer from '../features/counter/counterSlice';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        counter
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store
