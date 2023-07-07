import React, { useState, useEffect } from "react";

const UserEmailsComponent = () => {
  const [userEmails, setUserEmails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/follower/getFollowers")
      .then((response) => response.json())
      .then((data) => setUserEmails(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>User Emails</h2>
      <ul>
        {userEmails.map((email) => (
          <li key={email}>{email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserEmailsComponent;
