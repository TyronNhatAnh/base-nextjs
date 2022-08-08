import "@testing-library/jest-dom";

import {render, screen} from "@testing-library/react";

import Home from "./index";

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});
