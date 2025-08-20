import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// import "./PostList.css"; // Assuming you have some styles for the PostList
import { API_URL } from "../../constants";

function PostDetails() {
  const { id } = useParams(); // ✅ pega o id da URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(null);

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

  return (
    <div>
      <h2>{post.id}</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/"> Back to posts </Link>
    </div>
  );
}

export default PostDetails;
