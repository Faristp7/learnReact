import "../App.css";
import { useState } from "react";

const Conditional = () => {
  const [display, setDisplay] = useState(true);

  return display ? (
    <div>
      <h3 class="text-4xl">This is a Conditional compnoenet</h3>
    </div>
  ) : (
    <div>
      <h3 class="text-3xl">Nothing to see here</h3>
    </div>
  );
};

export default Conditional;
