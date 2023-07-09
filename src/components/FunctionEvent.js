
export function FunctionEvent() {
  function handleClick() {
    console.log("button Clicked");
  }

  return (
    <div>
      Functional components
      <button onClick={handleClick}>click here</button>
    </div>
  );
}
