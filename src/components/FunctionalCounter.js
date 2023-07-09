import "../App.css";
import { useState } from "react";

export const FunctionalCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const decrement = () => { 
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <div class="text-5xl font-bold font-">Counter Value : {counter}</div>
      <div class="mt-8">
        <button class="btn-green" onClick={increment}>
          Increment
        </button>
        <button class="btn-red" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};
