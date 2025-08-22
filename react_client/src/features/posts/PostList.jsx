import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";
import { fetchAllPosts, fetchDeletePost } from "../../api_services/postService";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(null);

  // useEffect(() => {
  //   async function loadPosts() {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (response.ok) {
  //         const json = await response.json();
  //         setPosts(json);
  //       } else {
  //         throw response;
  //       }
  //     } catch (e) {
  //       setError("Error occurred..." + e);
  //       console.log("Error occurred..." + e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadPosts();
  // }, []);
  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchAllPosts();
        setPosts(data);
      } catch (e) {
        setError("Error occurred..." + e);
        console.log("Error occurred..." + e);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!posts) return <p>Post not found</p>;

  const deletePost = async (id) => {
    try {
      await fetchDeletePost(id);
      // Delete the post from the server using a DELETE request http://localhost:3000/api/v1posts/:id
      // await fetch(`${API_URL}/${id}`, {
      //   method: "DELETE",
      // });
      // console.log("Deleted with success");
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      // setPosts(posts.filter((post) => post.id !== id));
    } catch (e) {
      setError("Error occurred..." + e);
      console.error("Error occurred..." + e);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <div className="post-links">
            <Link to={`/posts/${post.id}/edit`}> Edit post </Link>
            <button onClick={() => deletePost(post.id)}>Delete Post</button>
          </div>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
