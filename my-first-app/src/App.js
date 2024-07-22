import React from "react";
import "./style.css";
function App() {
  async function getadvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
  }
  return (
    <>
      <center>
        <h1>Hello This is first react app</h1>
        <button onClick={getadvice}>Get advice</button>
      </center>
    </>
  );
}

export default App;
