import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// import "./PostList.css"; // Assuming you have some styles for the PostList
import {
  fetchDeletePost as fetchDeletePost_by_id,
  fetchPost as fetchPost_by_id,
} from "../../api_services/postService";

function PostDetails() {
  const { id } = useParams(); // ✅ pega o id da URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fechCurrentPost = async () => {
      try {
        // const response = await fetch("${API_URL}/${id}");
        // const response = await fetch(`${API_URL}/${id}`); // ✅ usa id aqui
        // if (response.ok) {
        //   const json = await response.json();
        //   setPost(json);
        // } else {
        //   throw response;
        // }
        const json = await fetchPost_by_id(id);
        setPost(json);
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

  const deletePost = async (id) => {
    try {
      // Delete the post from the server using a DELETE request http://localhost:3000/api/v1posts/:id
      // await fetch(`${API_URL}/${id}`, {
      //   method: "DELETE",
      // });
      await fetchDeletePost_by_id(id);
      navigate(`/`);
    } catch (e) {
      setError("Error occurred..." + e);
      console.error("Error occurred..." + e);
    }
  };

  return (
    <div>
      <h2>{post.id}</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/"> Back to posts </Link>
      {" | "}
      <Link to={`/posts/${post.id}/edit`}> Edit post </Link>
      {" | "}
      <button onClick={() => deletePost(post.id)} style={{ color: "red" }}>
        Delete post{"1 "}
      </button>
      <button onClick={deletePost}>Delete 2</button>
    </div>
  );
}

export default PostDetails;
