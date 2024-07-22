import React, { useEffect, useState } from "react";
import "./style.css";
import Message from "./components/Message";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <>
      <center>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get advice</button>
        <Message count={count} />
      </center>
    </>
  );
}

export default App;
