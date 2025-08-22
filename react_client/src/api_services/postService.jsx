import { API_URL } from "../constants";

async function fetchAllPosts() {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw response;
    }
  } catch (e) {
    console.log("Error occurred..." + e);
  }
}

async function fetchPost(id) {
  try {
    console.log("Fetching post with id " + id);
    const response = await fetch(`${API_URL}/${id}`);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw response;
    }
  } catch (e) {
    console.log("Error occurred..." + e);
  }
}

async function fetchDeletePost(id) {
  let response;
  try {
    // Delete the post from the server using a DELETE request http://localhost:3000/api/v1posts/:id
    response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    console.log("Deleted with success");
  } catch (e) {
    console.error("Error occurred..." + e);
  }
  // no content
  if (response.status == 204) {
    return null;
  }
  return response.json();
}

async function fetchUpdatePost(id, postData) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(postData),
    });
    if (response.ok) {
      console.log("Edited with success");
      //   const { id } = await response.json();
      //   return { id };
    } else {
      console.log("Response with problem " + response.statusText);
    }
    return response.json();
  } catch (e) {
    console.log("Error occurred..." + e);
  }
}

async function fetchCreatePost(postData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // body: JSON.stringify({ title, body }),
      body: JSON.stringify(postData),
    });
    if (response.ok) {
      const { id } = await response.json();
      console.log("Created with success");
      return { id };
    } else {
      console.log("Response with problem " + response.statusText);
    }
    return response.json();
  } catch (e) {
    console.log("Error occurred..." + e);
  }
}

export {
  fetchAllPosts,
  fetchDeletePost,
  fetchUpdatePost,
  fetchPost,
  fetchCreatePost,
};
