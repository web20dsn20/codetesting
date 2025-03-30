import React, { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
  });

  const updateUser = () => {
    setUser({ ...user, name: "Jane Doe" });
  };

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateUser}>Update Name</button>
    </div>
  );
};

export default UserProfile;
