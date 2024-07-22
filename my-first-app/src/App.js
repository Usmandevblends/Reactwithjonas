import React, { useState } from "react";
import "./style.css";
function App() {
const [advice, setAdvice] = useState('');
const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
    
  }
  return (
    <>
      <center>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get advice</button>
        <p>You have read <strong>{count}</strong> pieces of advice</p>
      </center>
    </>
  );
}

export default App;
