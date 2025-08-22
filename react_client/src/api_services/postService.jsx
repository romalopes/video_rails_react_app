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
  try {
    // Delete the post from the server using a DELETE request http://localhost:3000/api/v1posts/:id
    const response = await fetch(`${API_URL}/${id}`, {
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

export { fetchAllPosts, fetchDeletePost, fetchPost };
