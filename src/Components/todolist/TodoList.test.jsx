// Import necessary functions from @testing-library/react for testing the component
import { render, fireEvent, screen } from "@testing-library/react";
// Import the TodoList component to test
import TodoList from "./TodoList"; // Assuming file path

// Describe the test suite for the TodoList component
describe("TodoList", () => {
  test('renders an empty list initially', () => {
    render(<TodoList/>);
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
    expect(screen.queryByAltText(/Remove/)).toBeNull()
  });
  test('add a new value to todo list',() => {
    render(<TodoList/>)
    const textbx = screen.getByRole('textbox');
    const btn = screen.getByText('Add Todo');

    fireEvent.change(textbx,{target:{value:'Add milk'}});
    fireEvent.click(btn);
    expect(screen.getByText('Add milk')).toBeInTheDocument()

  })
  test('remove added value to todo list',() => {
    render(<TodoList/>)
    const textbx = screen.getByRole('textbox');
    const btn = screen.getByText('Add Todo');

    fireEvent.change(textbx,{target:{value:'Add milk'}});
    fireEvent.click(btn);
    const removebtut = screen.getByText('Remove');
    fireEvent.click(removebtut);
    expect(screen.queryByText('Add milk')).toBeNull()

  })
  test('does not add an empty todo',() => {
    render(<TodoList/>)
    const textbx = screen.getByRole('textbox');
    const btn = screen.getByText('Add Todo');

    fireEvent.change(textbx,{target:{value:''}});
    fireEvent.click(btn);

    expect(screen.queryByText('Add milk')).toBeNull()

  })
});
