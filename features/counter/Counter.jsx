import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  //HOOKS
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  //Actions
  const incrementCount = () => {
    return dispatch(increment());
  };
  const decrementCount = () => {
    return dispatch(decrement());
  };
  const resetCount = () => {
    return dispatch(reset());
  };
  const incrementByAmountCount = () => {
    return dispatch(incrementByAmount(addValue));
  };

  //  EVENT HANDLING
  const handleIncrementByAmount = (e) => {
    return setIncrementAmount(e.target.value);
  };
  const handleSubmitIncrementByAmount = () => {
    return incrementByAmountCount();
  };
  const resetAll = () => {
    setIncrementAmount(0);
    resetCount();
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={handleIncrementByAmount}
      />
      <div>
        <button onClick={handleSubmitIncrementByAmount}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
