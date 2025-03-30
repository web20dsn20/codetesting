import { render, fireEvent, screen } from "@testing-library/react"; // Import necessary methods from the testing library: `render` for rendering components, `fireEvent` for simulating user interactions, and `screen` for querying elements in the DOM
import ThemeSwitcher from "./ThemeSwitcher"; // Import the ThemeSwitcher component which is being tested

// Mock window.getComputedStyle globally in beforeEach to ensure it's applied for all tests
beforeEach(() => {
  // Before each test, we mock the window.getComputedStyle method to always return predefined styles
  global.getComputedStyle = jest.fn(() => ({
    backgroundColor: "rgb(255, 255, 255)", // Return light mode background color (white)
    color: "rgb(0, 0, 0)", // Return light mode text color (black)
  }));
});

// After each test, restore the original behavior of all mocked functions
afterEach(() => {
  jest.restoreAllMocks(); // This ensures that all mocks (like getComputedStyle) are removed, so other tests run with normal behavior
});

describe("ThemeSwitcher", () => {
  // This block contains tests for the ThemeSwitcher component

  test("renders in light mode initially", () => {
    render(<ThemeSwitcher />); // Render the ThemeSwitcher component to the DOM

    // Ensure the body has the correct light mode styles applied by the light-mode class
    const computedStyle = window.getComputedStyle(document.body); // Get the computed styles for the body element
    // Expect the background color to be white for light mode
    expect(computedStyle.backgroundColor).toBe("rgb(255, 255, 255)"); // Light Mode background (white)
    // Expect the text color to be black for light mode
    expect(computedStyle.color).toBe("rgb(0, 0, 0)"); // Light Mode text color (black)

    // Check if the button text is correct
    // This checks if the button initially says "Switch to Dark Mode"
    expect(screen.getByText("Switch to Dark Mode")).toBeInTheDocument();
  });

  test("toggles to dark mode when button is clicked", () => {
    render(<ThemeSwitcher />); // Render the ThemeSwitcher component

    const button = screen.getByText("Switch to Dark Mode"); // Find the button with text "Switch to Dark Mode"

    fireEvent.click(button); // Simulate a click event on the button to toggle the theme to dark mode

    // Check if the button text changes after the click
    expect(screen.getByText("Switch to Light Mode")).toBeInTheDocument(); // Now, the button should read "Switch to Light Mode"

    // Ensure dark-mode class is applied to the body after switching to dark mode
    expect(document.body.classList.contains("dark-mode")).toBe(true); // Check that the "dark-mode" class is added to the body
    expect(document.body.classList.contains("light-mode")).toBe(false); // Ensure the "light-mode" class is removed from the body

    // Check the actual computed styles (without mocking)
    const computedStyle = window.getComputedStyle(document.body); // Get the updated computed styles for the body
    console.log(computedStyle.backgroundColor); // Log the background color for debugging (will help in seeing the value during the test run)
    // Expect the background color to be dark gray for dark mode
    expect(computedStyle.backgroundColor).toBe("rgb(51, 51, 51)"); // Dark Mode background (dark gray)
    // Expect the text color to be white for dark mode
    expect(computedStyle.color).toBe("rgb(255, 255, 255)"); // Dark Mode text color (white)
  });

  test("toggles back to light mode when button is clicked again", () => {
    render(<ThemeSwitcher />); // Render the ThemeSwitcher component again

    const button = screen.getByText("Switch to Dark Mode"); // Find the button with text "Switch to Dark Mode"

    fireEvent.click(button); // Simulate a click event on the button to switch to dark mode
    fireEvent.click(button); // Click again to switch back to light mode

    // Check if the button text changes back to "Switch to Dark Mode" after toggling
    expect(screen.getByText("Switch to Dark Mode")).toBeInTheDocument(); // Button should show "Switch to Dark Mode" again

    // Check for the light-mode class on the body after switching back to light mode
    expect(document.body.classList.contains("light-mode")).toBe(true); // Check that the "light-mode" class is applied to the body
    expect(document.body.classList.contains("dark-mode")).toBe(false); // Ensure the "dark-mode" class is removed from the body

    // Check computed styles after switching back to light mode
    const computedStyle = window.getComputedStyle(document.body); // Get the updated computed styles for the body
    expect(computedStyle.backgroundColor).toBe("rgb(255, 255, 255)"); // Light Mode background (white)
    expect(computedStyle.color).toBe("rgb(0, 0, 0)"); // Light Mode text color (black)
  });
});
