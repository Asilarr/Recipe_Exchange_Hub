import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { RegistrationContext } from "../../Context/RegistrationContext";
import "../../Styles/Login.css";
function Login(): JSX.Element {
  const { registrationData } = useContext(RegistrationContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!registrationData) {
      console.log(registrationData);
      return;
    }
    if (
      name !== registrationData.name ||
      password !== registrationData.password
    ) {
      console.log("Invalid credentials");
      return;
    }

    setName("");
    setPassword("");

    console.log(name);
    console.log(password);
    const user={name,password}
    
      

    navigate("/Home");
  };

  return (
    <div>
    <img src="" />
    <div className="other">
     
      <form onSubmit={handleSubmit}>
        <br />
        <h1 id="im">LOGIN</h1>

        <br />
        <br />
        <label>
          Username <br />
          <input
            type={"text"}
            value={name}
            placeholder="Username"
            onChange={handleNameChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Password <br />
          <input
            type={"password"}
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />
        <br />
        <button id="Log">Login</button>
        
        <br />
      </form>
    </div>


    </div>
    
  );
}
export default Login;
