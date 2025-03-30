import { render, fireEvent, screen } from "@testing-library/react"; // Import necessary testing functions from @testing-library/react: render to render the component, fireEvent to simulate user interactions, and screen to query the DOM
import ContactForm from "./ContactForm"; // Import the component that is being tested (ContactForm in this case)

describe("ContactForm", () => {
  // Begin a test suite for the ContactForm component

  // Test case to check that form inputs are rendered
  test("renders form inputs", () => {
    render(<ContactForm />); // Render the ContactForm component

    // Check that the form has an input with placeholder text "Name"
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument(); // Verifies that the "Name" input field is in the document

    // Check that the form has an input with placeholder text "Email"
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument(); // Verifies that the "Email" input field is in the document
  });

  // Test case to check that an error message is shown when the "Name" input is missing
  test("shows error if name is missing", () => {
    render(<ContactForm />); // Render the ContactForm component
    const submitButton = screen.getByText("Submit"); // Find the Submit button by its text

    // Simulate a click event on the submit button
    fireEvent.click(submitButton); // Simulates the click action of the submit button

    // Check if the error message for missing "Name" is displayed
    expect(screen.getByText("Name is required")).toBeInTheDocument(); // Verifies that the "Name is required" error message is in the document
  });

  // Test case to check that an error message is shown when the "Email" input is missing
  test("shows error if email is missing", () => {
    render(<ContactForm />); // Render the ContactForm component

    const inputName = screen.getByPlaceholderText("Name"); // Get the input field for "Name" by placeholder text
    const submitButton = screen.getByText("Submit"); // Get the Submit button by its text

    // Simulate the user typing a name into the "Name" input field
    fireEvent.change(inputName, { target: { value: "John" } }); // Simulates the change event for "Name" input field with a value of "John"

    // Simulate a click event on the submit button
    fireEvent.click(submitButton); // Simulates the click action of the submit button

    // Check if the error message for missing "Email" is displayed
    expect(screen.getByText("Email is required")).toBeInTheDocument(); // Verifies that the "Email is required" error message is in the document
  });

  // Test case to check form submission when both fields are filled
  test("submits form when both fields are filled", () => {
    // Mock console.log to spy on form submission and prevent actual logging during the test
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {}); // Spy on console.log and mock its implementation to prevent actual output

    render(<ContactForm />); // Render the ContactForm component

    // Get input elements by placeholder text
    const inputName = screen.getByPlaceholderText("Name"); // Get the "Name" input field by placeholder text
    const inputEmail = screen.getByPlaceholderText("Email"); // Get the "Email" input field by placeholder text
    const submitButton = screen.getByText("Submit"); // Get the Submit button by its text

    // Simulate the user typing a name into the "Name" input field
    fireEvent.change(inputName, { target: { value: "John" } }); // Simulates the change event for the "Name" input field with the value "John"

    // Simulate the user typing an email into the "Email" input field
    fireEvent.change(inputEmail, { target: { value: "john@example.com" } }); // Simulates the change event for the "Email" input field with the value "john@example.com"

    // Simulate a click event on the submit button
    fireEvent.click(submitButton); // Simulates the click action of the submit button

    // Check if console.log was called with the correct arguments (i.e., form submitted successfully with the name and email values)
    expect(logSpy).toHaveBeenCalledWith("Form submitted", {
      name: "John", // Expected name value
      email: "john@example.com", // Expected email value
    });

    // Clean up the mock after the test to restore the original console.log behavior
    logSpy.mockRestore(); // Restores the original behavior of console.log after the test is finished
  });
});
