import { render, screen } from "@testing-library/react";
import BoxerActions from "./BoxerActions";

test("Renders Title of the application", () => {
  render(<BoxerActions />);
  const linkElement = screen.getByText(/ Boxing Academy Admission in React/i);
  expect(linkElement).toBeInTheDocument();
});
