import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button className="increment" onClick={increment}>Increment</button>
        <button className="decrement" onClick={decrement}>Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
