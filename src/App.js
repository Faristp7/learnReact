import "./App.css";
import { FunctionalCounter } from "./components/FunctionalCounter";

function App() {
  return (
    <div className="mt-10">
      <FunctionalCounter button="plus" buttonDec="minus" id={["faris", "mariya"]}/>
      {/* <FunctionalCounter button="increment" buttonDec="decrement" id={["addam", "mariya"]}/> */}
    </div>
  );
}

export default App;
