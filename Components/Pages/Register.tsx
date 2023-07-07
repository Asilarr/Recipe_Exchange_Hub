import React, { useContext, useEffect, useState } from "react";
import "../../Styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { RegistrationContext } from "../../Context/RegistrationContext";
export function Register(): JSX.Element {
  const { setRegistrationData } = useContext(RegistrationContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [confirm, setConfirm] = useState("");
  const [register, setRegister] = useState([]);
  const user = { name, email, password,confirm };
  
  
    
  useEffect(()=>{
    regist();
  },[])

  const regist= async()=>{
    const result= await axios.get("http://localhost:8080/recipe/getRecipes")
  }
  
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirm(event.target.value);
  };
  const usehandleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (password !== confirm) {
      console.log("Passwords do not match!");
      return;
    }

    await axios.post("http://localhost:8080/user/add",user);
    //storing registration data
    setRegistrationData({name, email, password,confirm});

    //checking
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("confirmPassword: ", confirm);

    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");

    //navigate to the login page
    navigate("/login/");
  };

  return (
    <div className="div">
      <form onSubmit={usehandleSubmit}>
        <h1 id="om">REGISTER</h1>
        <br />
        <br />
        <label>
          Username <br />
          <input
            type={"text"}
            value={name}
            onChange={handleNameChange}
            placeholder={"Name"}
            required

          />
        </label>
        <br />
        <br />
        <label>
          Email <br />
          <input
            type={"email"}
            value={email}
            onChange={handleEmailChange}
            placeholder={"Email"}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Password <br />
          <input
            id="one"
            type={"password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder={"Password"}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Confirm Password <br />
          <input
            id="two"
            type={"password"}
            value={confirm}
            onChange={handleConfPasswordChange}
            placeholder={"Confirm"}
            required
          />
        </label>
        <br />
        <br />
        <button type={"submit"} id="but">
          Register
        </button>
        <br />

        <Link id="login" to={"/login"}>
          Already have an account?
        </Link>
        <br />
        <br />
      </form>
    </div>
  );
}
export default Register;
