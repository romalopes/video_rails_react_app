import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const postData = { title, body };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        // body: JSON.stringify({ title, body }),
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        const { id } = await response.json();
        console.log("Created with success");
        navigate(`/posts/${id}`);
      } else {
        console.log("Response with problem " + response.statusText);
      }
    } catch (e) {}
  };
  return (
    <div>
      <h2>New Post Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleInput">Title:</label>
          <input
            type="text"
            id="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bodyInput">Body:</label>
          <textarea
            value={body}
            id="post-body"
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
}

export default NewPostForm;
