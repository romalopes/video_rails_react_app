import React from "react";
import { Route, Routes } from "react-router-dom";
import PostList from "../features/posts/PostList";
import PostDetails from "../features/posts/PostDetails";
import NewPostForm from "../features/posts/NewPostForm";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/new" element={< NewPostForm />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
