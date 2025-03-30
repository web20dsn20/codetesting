import { render, fireEvent, screen } from "@testing-library/react"; // Import necessary testing utilities from @testing-library/react: `render` to render the component, `fireEvent` to simulate user interactions, and `screen` to query the DOM
import CounterWithValues from "./CounterWithValues"; // Import the CounterWithValues component which is being tested

describe("CounterWithValues", () => {
  // Begin a test suite for the CounterWithValues component
  test("render buttons and displays added values", () => {
    render(<CounterWithValues />);
    const but1 = screen.getByText('Add 5');
    const but2 = screen.getByText('Add 10');
    const but3 = screen.getByText('Add 15');
    fireEvent.click(but1);
    fireEvent.click(but2);
    fireEvent.click(but3)

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument()
  });
  test('check the length',() => {
    render(<CounterWithValues/>)
    const but1 = screen.getByText('Add 5');
    fireEvent.click(but1);
    fireEvent.click(but1);
    expect(screen.getAllByText('5')).toHaveLength(2)
  })
});
