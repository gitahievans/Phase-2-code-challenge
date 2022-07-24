import React, { useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([]);
  const [isShowing, setIsShowing] = useState(true);

  function handleClick() {
    setIsShowing((isShowing) => !isShowing);
  }

  function updatePoems(newPoem) {
    setPoems([...poems, newPoem]);
  }
  console.log(poems);

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleClick}>
          {isShowing ? "Hide new poem form" : "Show new poem form"}
        </button>
        {isShowing ? <NewPoemForm onAddNewPoem={updatePoems} /> : null}
      </div>
      <PoemsContainer />
    </div>
  );
}

export default App;
