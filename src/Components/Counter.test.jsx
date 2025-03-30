// Import necessary functions from @testing-library/react for rendering, simulating events, and querying the DOM
import { render, fireEvent } from "@testing-library/react";
// Import the Counter component to test
import Counter from "./Counter"; // Assuming file path

// Describe the test suite for the Counter component
describe(Counter, () => {
  // Test case to check if the counter displays the correct initial value
  it("counter displays correct initial", () => {
    // Render the Counter component with an initial count of 0
    const { getByTestId } = render(<Counter initialCount={0} />);
    // Retrieve the current count value by accessing the element with the test ID "count"
    const countValue = Number(getByTestId("count").textContent);
    // Assert that the count value is 0 initially
    expect(countValue).toEqual(0);
  });

  // Test case to check if the count increments by 1 when the increment button is clicked
  it("count should increment by 1 if the increment button is clicked", () => {
    // Render the Counter component with an initial count of 0
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    // Retrieve the increment button by its role and name (button with text "Increment")
    const increment = getByRole("button", { name: "Increment" });
    // Get the initial count value
    const countValue = Number(getByTestId("count").textContent);
    // Assert that the count is 0 before clicking the button
    expect(countValue).toEqual(0);

    // Simulate a click event on the increment button
    fireEvent.click(increment);
    // Get the updated count value after the click
    const countValue1 = Number(getByTestId("count").textContent);
    // Assert that the count is now 1 after incrementing
    expect(countValue1).toEqual(1);
  });

  // Test case to check if the count decrements by 1 when the decrement button is clicked
  it("count should decrement by 1 if the decrement button is clicked", () => {
    // Render the Counter component with an initial count of 0
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    // Retrieve the decrement button by its role and name (button with text "Decrement")
    const decrement = getByRole("button", { name: "Decrement" });
    // Get the initial count value
    const countValue = Number(getByTestId("count").textContent);
    // Assert that the count is 0 before clicking the button
    expect(countValue).toEqual(0);

    // Simulate a click event on the decrement button
    fireEvent.click(decrement);
    // Get the updated count value after the click
    const countValue1 = Number(getByTestId("count").textContent);
    // Assert that the count is now -1 after decrementing
    expect(countValue1).toEqual(-1);
  });

  // Test case to check if the count resets to 0 when the reset button is clicked
  it("count should be 0 if the reset button is clicked", () => {
    // Render the Counter component with an initial count of 50
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    // Retrieve the reset button by its role and name (button with text "Restart")
    const restartbutton = getByRole("button", { name: "Restart" });
    // Get the initial count value
    const countValue = Number(getByTestId("count").textContent);
    // Assert that the count is 50 before clicking the reset button
    expect(countValue).toEqual(50);

    // Simulate a click event on the reset button
    fireEvent.click(restartbutton);
    // Get the updated count value after the click
    const countValue1 = Number(getByTestId("count").textContent);
    // Assert that the count is now 0 after resetting
    expect(countValue1).toEqual(0);
  });

  // Test case to check if the count reverses its sign when the "Switch signs" button is clicked
  it("count should reverse sign if switch signs button is clicked", () => {
    // Render the Counter component with an initial count of 50
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    // Retrieve the "Switch signs" button by its role and name
    const reversebutt = getByRole("button", { name: "Switchsigns" });
    // Get the initial count value
    const countValue = Number(getByTestId("count").textContent);
    // Assert that the count is 50 before clicking the button
    expect(countValue).toEqual(50);

    // Simulate a click event on the "Switch signs" button
    fireEvent.click(reversebutt);
    // Get the updated count value after switching the sign
    const countValue1 = Number(getByTestId("count").textContent);
    // Assert that the count is now -50 after switching the sign
    expect(countValue1).toEqual(-50);

    // Simulate another click event on the "Switch signs" button
    fireEvent.click(reversebutt);
    // Get the updated count value after switching the sign back to positive
    const countValue2 = Number(getByTestId("count").textContent);
    // Assert that the count is now 50 after switching the sign again
    expect(countValue2).toEqual(50);
  });
});
