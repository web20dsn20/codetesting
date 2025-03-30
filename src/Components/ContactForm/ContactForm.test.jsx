import { render, fireEvent, screen } from "@testing-library/react"; // Import necessary testing functions from @testing-library/react: render to render the component, fireEvent to simulate user interactions, and screen to query the DOM
import ContactForm from "./ContactForm"; // Import the component that is being tested (ContactForm in this case)

describe("ContactForm", () => {
  test("renders form input", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });
  test("shows error if name is missing", () => {
    render(<ContactForm />);
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
    expect(screen.getByText("Name is required")).toBeInTheDocument();
  });
  test("shows error if email is missing", () => {
    render(<ContactForm />);
    const submitButton = screen.getByText("Submit");
    const input = screen.getByPlaceholderText("Name");
    fireEvent.change(input, { target: { value: "John" } });
    fireEvent.click(submitButton);
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });
  test("submits form when both fields are filled", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<ContactForm />);

    const submitButton = screen.getByText("Submit");
    const inputname = screen.getByPlaceholderText("Name");
    const inputemail = screen.getByPlaceholderText("Email");
    fireEvent.change(inputname, { target: { value: "john" } });
    fireEvent.change(inputemail, { target: { value: "john@gmail.com" } });
    fireEvent.click(submitButton);
    expect(logSpy).toHaveBeenCalledWith("Form submitted", {
      name: "john",
      email: "john@gmail.com",
    });
    logSpy.mockRestore();
  });
});
