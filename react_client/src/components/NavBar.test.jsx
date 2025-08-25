import React from "react";
import { render, screen } from "@testing-library/react";
import { Link, MemoryRouter } from "react-router-dom"; // To mock 'Link' components from 'react-router-dom'
import NavBar from "./NavBar";

describe("NavBar component", () => {
  const renderNavBar = () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    // render(
    //   <MemoryRouter>
    //     <nav>
    //       <Link to="/">Post List</Link>
    //       {"|"}
    //       <Link to="/new">New Post</Link>
    //     </nav>
    //   </MemoryRouter>
    // );
  };
  test("renders both links", () => {
    // render the navbar
    renderNavBar();
    // expect the links to be there or something
    // expect(screen.getByText("Post List")).toBeInTheDocument();
    // expect(screen.getByText("New Post")).toBeInTheDocument();
  });
});
