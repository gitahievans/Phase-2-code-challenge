import React, { useState } from "react";

function NewPoemForm({ onAddNewPoem }) {
  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState(" ");
  const [author, setAuthor] = useState(" ");

  function handleAddNewPoem(e) {
    e.preventDefault();
    fetch("http://localhost:8004/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        author: author,
      }),
    })
      .then((res) => res.json())
      .then((newPoem) => onAddNewPoem(newPoem));
  }

  return (
    <form className="new-poem-form" onSubmit={handleAddNewPoem}>
      <input
        value={title}
        onChangeplaceholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={author}
        placeholder="Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Write your masterpiece here..."
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
