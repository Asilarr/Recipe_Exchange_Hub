import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { RegistrationProvider } from "./Context/RegistrationContext";
import Register from "./Components/Pages/Register";
import { RecipeProvider } from "./Context/RecipeContext";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Recipe from "./Components/Pages/Recipe";
import CreateRecipe from "./Components/Pages/CreateRecipe";
import Profile from "./Components/Pages/Profile";

function App(): JSX.Element {
  return (
    <Router>
      
      <RegistrationProvider>
        <Routes>
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/recipe/" element={<Recipe />} />
          <Route path="/create-recipe/" element={<CreateRecipe />} />
          <Route path="/profile/" element={<Profile />} />
        </Routes>
      </RegistrationProvider>
    </Router>
  );
}

export default App;
