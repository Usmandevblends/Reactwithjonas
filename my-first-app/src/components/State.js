import React, { useState } from "react";
function State() {
  const [isVisible, setIsVisible] = useState(false);
  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }
  return (
    <>
      <div>
        <button onClick={handleToggleVisibility} className="mt-5 rounded-5">Show/Hide Text</button>
        {isVisible && <p className="py-2">This is the magic of use State</p>}
      </div>
    </>
  );
}

export default State;
