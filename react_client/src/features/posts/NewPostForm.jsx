// import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCreatePost } from "../../api_services/postService";
import PostForm from "./PostForm";

function NewPostForm() {
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleCreateSubmit = async (rawData) => {
    // try {
    //   e.preventDefault();
    //   const postData = { title, body };

    //   // const { id } = await fetchCreatePost(postData);
    //   // navigate(`/posts/${id}`);
    //   const json = await fetchCreatePost(postData);
    //   navigate(`/posts/${json.id}`);
    //   // const response = await fetch(API_URL, {
    //   //   method: "POST",
    //   //   headers: { "content-type": "application/json" },
    //   //   // body: JSON.stringify({ title, body }),
    //   //   body: JSON.stringify(postData),
    //   // });
    //   // if (response.ok) {
    //   //   const { id } = await response.json();
    //   //   console.log("Created with success");
    // } catch (e) {
    //   console.error("Error trying to create post " + e);
    // }
    const formData = new FormData();
    formData.append("post[title]", rawData.title);
    formData.append("post[body]", rawData.body);
    console.log("rawData.image", rawData);
    formData.append("post[image]", rawData.image);

    try {
      console.log("1");
      // const postData = { formData };
      const json = await fetchCreatePost(formData);
      console.log("2");
      navigate(`/posts/${json.id}`);
      console.log("3");
    } catch (e) {
      console.error("Error trying to create post " + e);
    }
  };
  return (
    <div>
      <PostForm
        // post={null}
        headerText="New Post Form"
        buttonText="Create Post"
        onSubmit={handleCreateSubmit}
      />
    </div>
    // <div>
    //   <h2>New Post Form</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="titleInput">Title:</label>
    //       <input
    //         type="text"
    //         id="post-title"
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="bodyInput">Body:</label>
    //       <textarea
    //         value={body}
    //         id="post-body"
    //         onChange={(e) => setBody(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <button type="submit">Create Post</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default NewPostForm;

// // import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchCreatePost } from "../../api_services/postService";
// import PostForm from "./PostForm";
// // import { objectToFormData } from "../../utils/formDataHelper";

// function NewPostForm() {
//   const navigate = useNavigate();

//   const handleCreateSubmit = async (formData) => {
//     try {
//       // const formData = objectToFormData({ post: rawData });
//       const response = await fetchCreatePost(formData);
//       navigate(`/posts/${response.id}`);
//     } catch (e) {
//       console.error("Failed to create post: ", e);
//     }
//   };

//   return (
//     <PostForm
//       headerText="Create a New Post"
//       onSubmit={handleCreateSubmit}
//       buttonText="Create Post"
//     />
//   );
// }

// export default NewPostForm;
