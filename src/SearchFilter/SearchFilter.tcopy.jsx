// Import necessary functions from @testing-library/react for rendering components, simulating user events, and querying the DOM
import { render, fireEvent, screen } from "@testing-library/react";
// Import the SearchFilter component to be tested
import SearchFilter from "./SearchFilter"; // Assuming file path

// Describe the test suite for the SearchFilter component
describe("SearchFilter", () => {
  // Test case to check if all items are rendered initially
  test("renders all items initially", () => {
    // Render the SearchFilter component
    render(<SearchFilter />);

    // Check if all expected items are rendered in the document
    expect(screen.getByText("Apple")).toBeInTheDocument(); // Check for Apple
    expect(screen.getByText("Banana")).toBeInTheDocument(); // Check for Banana
    expect(screen.getByText("Orange")).toBeInTheDocument(); // Check for Orange
    expect(screen.getByText("Grapes")).toBeInTheDocument(); // Check for Grapes
    expect(screen.getByText("Pineapple")).toBeInTheDocument(); // Check for Pineapple
  });

  // Test case to check if items are filtered based on the query entered in the search input
  test("filters items based on query", () => {
    // Render the SearchFilter component
    render(<SearchFilter />);

    // Get the search input field
    const input = screen.getByRole("textbox");

    // Simulate the user typing "apple" into the search input
    fireEvent.change(input, { target: { value: "apple" } });

    // Check if "Apple" is still displayed
    expect(screen.getByText("Apple")).toBeInTheDocument();
    // Check if "Banana" is NOT displayed after filtering
    expect(screen.queryByText("Banana")).toBeNull();
  });

  // Test case to ensure the search filter is case-insensitive
  test("is case-insensitive while filtering", () => {
    // Render the SearchFilter component
    render(<SearchFilter />);

    // Get the search input field
    const input = screen.getByRole("textbox");

    // Simulate the user typing "ORANGE" (in uppercase) into the search input
    fireEvent.change(input, { target: { value: "ORANGE" } });

    // Check if "Orange" is still displayed
    expect(screen.getByText("Orange")).toBeInTheDocument();
    // Check if "Apple" is NOT displayed after filtering
    expect(screen.queryByText("Apple")).toBeNull();
  });
});
