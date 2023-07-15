import "../App.css";
import { useState } from "react";

export const FunctionalCounter = (props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const decrement = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="dark:bg-slate-800 sm:bg-white text-center ">
      <p>{props.id[1]}</p>
      <div className="">
        <div class="text-5xl font-bold sm:text-black dark:text-white">
          Counter Value : <span className="sm:text-red-600">{counter}</span>
        </div>
        <div class="mt-8">
          <button class="btn-green" onClick={increment}>
            {props.button}
          </button>
          <button class="btn-red" onClick={decrement}>
            {props.buttonDec}
          </button>
        </div>
      </div>
    </div>
  );
};
