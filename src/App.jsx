import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(10);
  const clickfninc = () => {
    setcounter(counter + 1);
    if (counter > 19) setcounter(20);
    //console.log("Counter value ", counter);
  };
  const clickfndec = () => {
    setcounter(counter - 1);
    if (counter < 1) setcounter(0);
    // console.log("Counter Value ", counter);
  };
  return (
    <>
      <h1>Sanyam Here</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={clickfninc}>Increment</button>
      <br />
      <button onClick={clickfndec}>Decrement</button>
    </>
  );
}

export default App;
