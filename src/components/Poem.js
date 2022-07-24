import React, { useState } from "react";

function Poem({ title, author, content }) {
  const [isRead, setIsRead] = useState(false);

  function handleMarkAsReadButton() {
    setIsRead((isRead) => !isRead);
  }

  return (
    <div>
      <h3>{title}</h3>

      <p>{content}</p>

      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleMarkAsReadButton}>
        {isRead ? "Mark as read" : "Mark as unread"}
      </button>
    </div>
  );
}

export default Poem;
