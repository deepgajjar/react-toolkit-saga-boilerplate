import { createAction } from '@reduxjs/toolkit'
import sagaActionsType from './constants'

export const incrementAction = createAction(sagaActionsType.COUNTER_INCREMENT);
export const decrementAction = createAction(sagaActionsType.COUNTER_DECREMENT);
export const incrementByAction = createAction(sagaActionsType.COUNTER_ADD_BY_NUMBER);


