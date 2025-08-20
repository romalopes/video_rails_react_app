import React, { useState, useEffect } from "react";
import "./PostList.css"; // Assuming you have some styles for the PostList
import { API_URL } from "../../constants";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("Error occurred..." + e);
        console.log("Error occurred..." + e);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;

// import { API_URL } from '../../constants';
// import React, { useState, useEffect } from 'react';
// import './PostList.css'; // Assuming you have some styles for the PostList <component></component>

// export default function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch(API_URL)
//       .then(response => response.json())
//       .then(data => setPosts(data))
//       .catch(error => console.error('Error fetching posts:', error));
//   }, []);

//   return (
//     <div className="post-list">
//       <h1>Posts</h1>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
