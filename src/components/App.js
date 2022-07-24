import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([]);
  const [isShowing, setIsShowing] = useState(true);

  //GET POEMS
  const POEMS = "http://localhost:8004/poems";

  useEffect(() => {
    fetch(POEMS)
      .then((r) => r.json())
      .then((poemData) => {
        setPoems(poemData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //DELETE POEMS

  function handleDeletePoem(deletedPoem) {
    const updatedPoems = poems.filter((poem) => poem.id !== deletedPoem.id);
    console.log(updatedPoems);
    setPoems(updatedPoems);
  }

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
      <PoemsContainer onHandldeDeletePoem={handleDeletePoem} poems={poems} />
    </div>
  );
}

export default App;
