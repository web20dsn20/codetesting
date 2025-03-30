// Import necessary functions from @testing-library/react for testing the component
import { render, fireEvent, screen } from "@testing-library/react";
// Import the TodoList component to test
import TodoList from "./TodoList"; // Assuming file path

// Describe the test suite for the TodoList component
describe("TodoList", () => {
  // Test case to check if the TodoList renders an empty list initially
  test("renders an empty list initially", () => {
    // Render the TodoList component
    render(<TodoList />);

    // Assert that "Todo List" is present in the document, confirming the title of the list is rendered
    expect(screen.getByText("Todo List")).toBeInTheDocument();

    // Assert that "Remove" button is not visible initially (as there are no todos yet)
    expect(screen.queryByText(/Remove/)).toBeNull();
  });

  // Test case to check if a new todo is added when the "Add Todo" button is clicked
  test("adds a new todo when clicking 'Add Todo'", () => {
    // Render the TodoList component
    render(<TodoList />);

    // Get the input field for the todo text (this is where the user enters their todo item)
    const input = screen.getByRole("textbox");
    // Get the "Add Todo" button element (this is the button the user clicks to add a todo item)
    const addButton = screen.getByText("Add Todo");

    // Simulate user typing in the input field (filling in "Buy Milk")
    fireEvent.change(input, { target: { value: "Buy Milk" } });
    // Simulate clicking the "Add Todo" button
    fireEvent.click(addButton);

    // Assert that the todo item ("Buy Milk") is now rendered in the document
    expect(screen.getByText("Buy Milk")).toBeInTheDocument();
  });

  // Test case to check if a todo can be removed when the "Remove" button is clicked
  test("removes a todo when clicking 'Remove'", () => {
    // Render the TodoList component
    render(<TodoList />);

    // Get the input field for the todo text
    const input = screen.getByRole("textbox");
    // Get the "Add Todo" button element
    const addButton = screen.getByText("Add Todo");

    // Simulate user typing in the input field (filling in "Buy Milk")
    fireEvent.change(input, { target: { value: "Buy Milk" } });
    // Simulate clicking the "Add Todo" button
    fireEvent.click(addButton);

    // Get the "Remove" button that corresponds to the added "Buy Milk" todo
    const removeButton = screen.getByText("Remove");
    // Simulate clicking the "Remove" button to remove the todo
    fireEvent.click(removeButton);

    // Assert that the "Buy Milk" todo is no longer in the document (has been removed)
    expect(screen.queryByText("Buy Milk")).toBeNull();
  });

  // Test case to check if an empty todo is not added when the input field is empty
  test("does not add an empty todo", () => {
    // Render the TodoList component
    render(<TodoList />);

    // Get the input field for the todo text
    const input = screen.getByRole("textbox");
    // Get the "Add Todo" button element
    const addButton = screen.getByText("Add Todo");

    // Simulate user typing in the input field (leaving it empty)
    fireEvent.change(input, { target: { value: "" } });
    // Simulate clicking the "Add Todo" button
    fireEvent.click(addButton);

    // Assert that no todo has been added (i.e., no "Buy Milk" text is present)
    expect(screen.queryByText("Buy Milk")).toBeNull();
  });
});
