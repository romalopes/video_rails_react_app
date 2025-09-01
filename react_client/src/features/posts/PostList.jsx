import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchDeletePost } from "../../api_services/postService";
import "./PostDetails.css";
import "./SearchBar";
import Pagination from "./Pagination";

import usePostsData from "../../hooks/usePostData";
import useURLSearchParam from "../../hooks/useURLSearchParam";
import SearchBar from "./SearchBar";

function PostList() {
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useURLSearchParam("search");
  const [debouncedSearchTerm, setDebouncedSearchTerm] =
    useURLSearchParam("search");

  const [searchParams, setSearchParams] = useSearchParams();

  const initialPageFromURL = Number(searchParams.get("page") || "1");
  const [currentPage, setCurrentPage] = useState(initialPageFromURL);

  const {
    posts: fetchedPosts,
    totalPosts: totalPosts,
    loading: loading,
    error: error,
    perPage: perPage,
  } = usePostsData(debouncedSearchTerm, currentPage); // Note the change here
  console.log("perPage", perPage);
  useEffect(() => {
    setPosts(fetchedPosts);
  }, [fetchedPosts]);

  // useEffect(() => {
  //   async function loadPosts() {
  //     try {
  //       const data = await fetchAllPosts();
  //       setPosts(data);
  //     } catch (e) {
  //       setError("Error occurred..." + e);
  //       console.log("Error occurred..." + e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadPosts();
  // }, []);

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
    const initialSearchTerm = searchParams.get("search") || "";
    setSearchTerm(initialSearchTerm);

    const pageFromURL = searchParams.get("page") || "1";
    setCurrentPage(Number(pageFromURL));
  }, [searchParams]);

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

  const handleImmediateSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const handleDebounceSearchChange = (searchValue) => {
    setDebouncedSearchTerm(searchValue);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Update the URL to include the page number
    setSearchParams({ search: debouncedSearchTerm, page: page });
  };

  if (loading) return <p>Loading...</p>;
  if (!posts) return <p>Post not found</p>;
  if (error) return <p>{error}</p>;
  console.log("posts", perPage);
  return (
    <div>
      <SearchBar
        value={searchTerm}
        onSearchChange={handleDebounceSearchChange}
        onImmediateChange={handleImmediateSearchChange}
      />

      <Pagination
        currentPage={currentPage}
        totalPosts={totalPosts}
        postsPerPage={perPage}
        onPageChange={handlePageChange}
      />
      <div>Total Posts: {totalPosts}</div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>
            <Link to={`/posts/${post.id}`}>
              {post.id} - {post.title}
            </Link>
          </h2>
          <div>
            {post.image_url ? (
              // {post.image_url && (
              <img
                src={post.image_url}
                alt={post.title}
                className="post-image"
              />
            ) : (
              <div className="post-imag-stub" />
            )}
          </div>
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
