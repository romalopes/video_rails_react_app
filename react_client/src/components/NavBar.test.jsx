// NavBar.test.jsx
import React from "react";
import { mount, shallow } from "enzyme";
import { render, screen } from "../setupTests";
import { expect } from "chai";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  test("renders the component", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
  // it("renders the navigation bar", () => {
  //   const wrapper = shallow(<NavBar />);
  //   expect(wrapper.find("nav")).to.have.lengthOf(1);
  // });

  // it("responds to click events on nav links", () => {
  //   const wrapper = mount(<NavBar />);
  //   const link = wrapper.find("a").first();
  //   link.simulate("click");
  //   expect(link).to.have.attr("aria-current", "page");
  // });

  // Add more tests as needed
});
