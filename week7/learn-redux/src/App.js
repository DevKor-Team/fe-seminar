import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions/index';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>
        counter {counter}
      </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogged
          ? (
            <h3>
              valuable information i shoudn't see
            </h3>
          )
          : (
            <h3>
              login please
            </h3>
          )}
    </div>
  );
}

export default App;
