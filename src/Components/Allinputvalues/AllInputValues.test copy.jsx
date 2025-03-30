import { render, fireEvent, screen } from "@testing-library/react";
import AllInputValues from "./AllInputValues";

describe("TodoList", () => {
  // Test case for Textbox (input field for adding todo)
  test("adds a new todo when clicking 'Add Todo'", () => {
    render(<AllInputValues />);

    const input = screen.getByPlaceholderText("Enter todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Buy Milk" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Buy Milk")).toBeInTheDocument();
  });

  // Test case for Textarea (adding a description)
  test("can add a description in the textarea", () => {
    render(<AllInputValues />);

    const textarea = screen.getByPlaceholderText("Enter description");
    fireEvent.change(textarea, { target: { value: "Buy milk at the store" } });

    expect(textarea.value).toBe("Buy milk at the store");
  });

  // Test case for Select (Dropdown)
  test("can select a priority for the todo", () => {
    render(<AllInputValues />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "High" } });

    expect(select.value).toBe("High");
  });

  // Test case for Checkbox (mark todo as important)
  test("can check the checkbox to mark a todo as important", () => {
    render(<AllInputValues />);

    const checkbox = screen.getByLabelText("Mark as Important");
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

  // Test case for Radio Button (mark todo as completed or pending)
  test("can select radio button to mark todo as completed", () => {
    render(<AllInputValues />);

    const radioButtonCompleted = screen.getByLabelText("Completed");
    fireEvent.click(radioButtonCompleted);

    expect(radioButtonCompleted.checked).toBe(true);
  });

  // Test case for Autocomplete (datalist with suggestions)
  test("can select a suggestion from autocomplete list", () => {
    render(<AllInputValues />);

    const autocompleteInput = screen.getByPlaceholderText(
      "Start typing a task..."
    );
    fireEvent.change(autocompleteInput, { target: { value: "Buy Milk" } });

    expect(autocompleteInput.value).toBe("Buy Milk");
  });

  // Test case for Date Picker
  test("can select a date for the todo", () => {
    render(<AllInputValues />);

    const dateInput = screen.getByRole("textbox", { name: /date/i });
    fireEvent.change(dateInput, { target: { value: "2025-03-30" } });

    //     alternative 1
    //     const dateInput = screen.getByLabelText(/Select Date/i); // Modify the label text accordingly
    // fireEvent.change(dateInput, { target: { value: "2025-03-30" } });

    // alternative 2
    // const dateInput = screen.getByPlaceholderText("Select Date"); // Adjust the placeholder if necessary
    // fireEvent.change(dateInput, { target: { value: "2025-03-30" } });
    // alternative 3
    // const dateInput = screen.getByDisplayValue("2025-03-30");  // If you want to get a date picker by its value
    // fireEvent.change(dateInput, { target: { value: "2025-03-30" } });

    expect(dateInput.value).toBe("2025-03-30");
  });

  // Test case to check that removing a todo works
  test("removes a todo when clicking 'Remove'", () => {
    render(<AllInputValues />);

    // Add a todo item
    const input = screen.getByPlaceholderText("Enter todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Buy Milk" } });
    fireEvent.click(addButton);

    // Remove the todo item
    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);

    // Assert that the todo is removed
    expect(screen.queryByText("Buy Milk")).toBeNull();
  });
});
