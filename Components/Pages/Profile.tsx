import React, { useContext, useEffect, useState } from "react";
import Register from "./Register";
import "../../Styles/Profile.css";
import axios from "axios";
function Profile(): JSX.Element {
  const [users, setUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/user/getUsers");

        setUser(response.data);
      } catch (error) {
        console.error("Error fetching users: " + error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div id="first">
        <table>
          <thead>
            <tr>Name</tr>
            <tr>Email</tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Profile;
