import React, { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const res = await fetch("http://localhost:3000/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const submitComment = async () => {
    const res = await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="bg-white text-gray-700 m-20">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="bg-white text-gray-700 m-2"
      />
      <button onClick={submitComment}>Submit</button>
      <br />
      <button onClick={fetchComments}>Load Comments</button>
      {comments &&
        comments.map((c) => (
          <div key={c.id}>
            <h2>{c.text}</h2>
          </div>
        ))}
    </div>
  );
}
