import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders greeting from React", () => {
  render(<App />);
  const headerElement = screen.getByText(/Hello, React!/i);
  expect(headerElement).toBeInTheDocument();
});
