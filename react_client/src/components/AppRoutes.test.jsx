import { render, screen } from "@testing-library/react";
import { Link, MemoryRouter } from "react-router-dom"; // To mock 'Link' components from 'react-router-dom'
import { AppRoutes } from "./AppRoutes";

jest.mock("../features/posts/PostList");
jest.mock("../features/posts/PostDetails");
jest.mock("../features/posts/NewPostForm");
jest.mock("../features/posts/EditPostForm");
jest.mock("../constants");

describe("Routes testing component", () => {
  test("root path renders postList()", () => {
    render(<AppRoutes />, { wrapper: MemoryRouter });
    expect(screen.getByText("Posts List")).toBeInTheDocument();
  });
  test("new path renders newPostForm()", () => {});
  test("edit path renders editPostForm()", () => {});
  ``;
});
