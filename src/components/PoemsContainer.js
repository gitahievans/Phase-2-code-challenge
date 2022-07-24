import React, { useEffect, useState } from "react";
import Poem from "./Poem";

function PoemsContainer() {
  const [poems, setPoems] = useState([]);

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

  let poemList = poems.map((poem) => {
    return (
      <Poem
        key={poem.id}
        title={poem.title}
        author={poem.author}
        content={poem.content}
      />
    );
  });

  return <div className="poems-container">{poemList}</div>;
}

export default PoemsContainer;
