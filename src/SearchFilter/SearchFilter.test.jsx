import { fireEvent, render, screen } from "@testing-library/react";
import SearchFilter from "./SearchFilter";

describe("search filter", () => {
  test("renders all item initially", () => {
    render(<SearchFilter />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
    expect(screen.getByText("Grapes")).toBeInTheDocument();
    expect(screen.getByText("Pineapple")).toBeInTheDocument();
  });
  test("filters items based on query", () => {
    render(<SearchFilter />);

    const inputvalue = screen.getByRole("textbox");
    fireEvent.change(inputvalue, { target: { value: "apple" } });
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.queryByText("Banana")).toBeNull();
  });
  test("is case sensitive while filteing", () => {
    render(<SearchFilter />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "ORANGE" } });
    expect(screen.getByText("Orange")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).toBeNull();
  });
});
