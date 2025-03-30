// Import necessary functions from @testing-library/react for testing the component
import { render, fireEvent, screen } from "@testing-library/react";
// Import the UserProfile component that we are going to test
import UserProfile from "./UserProfile"; // Assuming file path

// Describe the test suite for the UserProfile component
describe("UserProfile", () => {
  // Test case to check if the initial user data is rendered correctly
  test("renders user profile with initial data", () => {
    // Render the UserProfile component to the DOM
    render(<UserProfile />);

   expect(screen.getByText('Name: John Doe')).toBeInTheDocument()
   expect(screen.getByText('Age: 25')).toBeInTheDocument()
   expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument()
  });

  // Test case to check if the user name is updated when 'Update Name' button is clicked
  test("updates user name when 'Update Name' is clicked", () => {
    // Render the UserProfile component to the DOM
    render(<UserProfile />);

    const updatebut = screen.getByText('Update Name');
    fireEvent.click(updatebut);
    expect(screen.getByText('Name: Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('Age: 25')).toBeInTheDocument()
    expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument()
   
   
  });

  // Test case to ensure that only the name is updated and other details are not affected
  test("does not update other user details when updating name", () => {
    // Render the UserProfile component to the DOM
    render(<UserProfile />);

    const updatebut = screen.getByText('Update Name');
    fireEvent.click(updatebut);

    expect(screen.getByText('Age: 25')).toBeInTheDocument()
    expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument()
    });
});
