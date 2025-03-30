import { render, fireEvent, screen } from "@testing-library/react"; // Import necessary testing utilities from @testing-library/react: `render` to render the component, `fireEvent` to simulate user interactions, and `screen` to query the DOM
import CounterWithValues from "./CounterWithValues"; // Import the CounterWithValues component which is being tested

describe("CounterWithValues", () => {
  // Begin a test suite for the CounterWithValues component

  // Test case to verify that buttons are rendered and values are displayed when the buttons are clicked
  test("renders buttons and displays added values", () => {
    render(<CounterWithValues />); // Render the CounterWithValues component

    // Get the "Add 5" button by its text content
    const add5Button = screen.getByText("Add 5");

    // Get the "Add 10" button by its text content
    const add10Button = screen.getByText("Add 10");

    // Get the "Add 15" button by its text content
    const add15Button = screen.getByText("Add 15");

    // Simulate a click event on the "Add 5" button
    fireEvent.click(add5Button);

    // Simulate a click event on the "Add 10" button
    fireEvent.click(add10Button);

    // Simulate a click event on the "Add 15" button
    fireEvent.click(add15Button);

    // Check if the value "5" is displayed in the document after clicking the "Add 5" button
    expect(screen.getByText("5")).toBeInTheDocument(); // Verifies that "5" is present in the document

    // Check if the value "10" is displayed in the document after clicking the "Add 10" button
    expect(screen.getByText("10")).toBeInTheDocument(); // Verifies that "10" is present in the document

    // Check if the value "15" is displayed in the document after clicking the "Add 15" button
    expect(screen.getByText("15")).toBeInTheDocument(); // Verifies that "15" is present in the document
  });

  // Test case to verify that the values are correctly added to the history (i.e., displayed multiple times)
  test("adds values correctly to history", () => {
    render(<CounterWithValues />); // Render the CounterWithValues component

    // Get the "Add 5" button by its text content
    const add5Button = screen.getByText("Add 5");

    // Simulate a click event on the "Add 5" button
    fireEvent.click(add5Button);

    // Simulate another click event on the "Add 5" button
    fireEvent.click(add5Button);

    // Use getAllByText to get all <li> elements that contain the value "5"
    expect(screen.getAllByText("5")).toHaveLength(2); // Expect two "5" values to appear in the history list (one for each click)
  });
});
