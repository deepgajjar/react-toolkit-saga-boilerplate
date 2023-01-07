import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import sagaActions from "../redux/actions/constants";
import { decrementAction, incrementAction, incrementByAction } from "../redux/actions/counterActions";
import {
  selectCount,
} from "../redux/slices/counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() =>{ 
            dispatch(incrementAction())
            // dispatch({ type: sagaActions.COUNTER_INCREMENT })
          }}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrementAction())
            // dispatch({ type: sagaActions.COUNTER_DECREMENT })
        }}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementByAction(Number(incrementAmount) || 0))
            // dispatch({
            //   type: sagaActions.COUNTER_ADD_BY_NUMBER,
            //   payload: Number(incrementAmount) || 0,
            // });
          }}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
