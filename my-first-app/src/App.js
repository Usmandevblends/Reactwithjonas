import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./components/Message";
import State from "./components/State";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    if (count < 10) {
      // Add this conditional statement
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    }
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <>
      <center>
        <h1 className="py-2">{advice}</h1>
        <button onClick={getAdvice} className="py-2 rounded-5">
          Get advice
        </button>
        <Message count={count} />
      </center>
      <State />
    </>
  );
}

export default App;
