import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

function EditPostForm() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState("");
  const [, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fechCurrentPost = async () => {
      try {
        // const response = await fetch("${API_URL}/${id}");
        const response = await fetch(`${API_URL}/${id}`); // ✅ usa id aqui
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("Error occurred..." + e);
        console.log("Error occurred..." + e);
      } finally {
        setLoading(false);
      }
    };
    fechCurrentPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        // body: JSON.stringify(post),
        body: JSON.stringify({
          title: post.title,
          body: post.body,
        }),
      });
      if (response.ok) {
        const { id } = await response.json();
        console.log("Edited with success");
        navigate(`/posts/${id}`);
      } else {
        console.log("Response with problem " + response.statusText);
      }
    } catch (e) {}
  };

  return (
    <div>
      <h2>Edit post form.</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleInput">Title:</label>
          <input
            type="text"
            id="post-title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="bodyInput">Body:</label>
          <textarea
            value={post.body}
            id="post-body"
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            required
          />
        </div>
        <div>
          <button type="submit">Update Post</button>
        </div>
      </form>
    </div>
  );
}

export default EditPostForm;
