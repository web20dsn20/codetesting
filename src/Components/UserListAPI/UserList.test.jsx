import { render, screen, waitFor } from "@testing-library/react";
import UserList from "./UserList"; // Assuming file path

// Mocking the fetch API
global.fetch = jest.fn();

describe("UserList", () => {
  test("displays users after API call", async () => {
    // Mock the API call to return a list of users
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
      ]),
    });

    render(<UserList />);

    // Check that loading is happening initially
    expect(screen.getByText("User List")).toBeInTheDocument();

    // Wait for the API call to finish and check if the users are displayed
    await waitFor(() => screen.getByText("John Doe"));
    await waitFor(() => screen.getByText("Jane Doe"));

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  test("displays an error message when the API call fails", async () => {
    // Mock the API call to reject with an error
    fetch.mockRejectedValueOnce(new Error("Failed to fetch"));

    render(<UserList />);

    // Wait for the error message to appear
    await waitFor(() => screen.getByRole("alert"));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Failed to fetch users"
    );
  });
});
