import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/CreateRecipe.css";
import { RecipeContext } from "../../Context/RecipeContext";
import axios from "axios";
const CreateRecipe: React.FC = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { setRecipeData } = useContext(RecipeContext);
  const [description, setDescription] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [step, setStep] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [servings, setServings] = useState(0);
  const [preparationTime, setPreparationTime] = useState(0);

  const recipe = {
    title,
    description,

    ingredients,
    steps,
    servings,
    preparationTime,
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleServingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setServings(newValue);
  };

  const handlePreparationTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newVal = parseInt(event.target.value, 10);
    setPreparationTime(newVal);
  };
  const RemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };
  const RemoveStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (ingredient.trim() !== "") {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
    if (step.trim() !== "") {
      setSteps([...steps, step]);
      setStep("");
    }
    if (
      !title ||
      !description ||
      !steps ||
      !servings ||
      !ingredients ||
      !preparationTime
    ) {
      console.log("Please fill in all fields!");
      return;
    }

    const recipe = {
      title,
      description,
      ingredients,
      steps,
      servings,
      preparationTime,
    };
    await axios.post("http://localhost:8080/recipe/saveRecipe", recipe);

    //get
    // useEffect(() => {
    //   rec();
    // }, []);

    // const rec = async () => {
    //   const res = await axios.get("http://localhost:8080/recipe/getRecipes");
    //   console.log(res);
    // };
    //savin
    setRecipeData({
      title,
      description,
      ingredients,
      steps,
      servings,
      preparationTime,
    });
    console.log(title);
    console.log(description);
    console.log(ingredients);
    console.log(steps);
    console.log(servings);
    console.log(preparationTime);

    setTitle("");
    setDescription("");
    setIngredients([]);
    setSteps([]);
    setServings(0);
    setPreparationTime(0);
  };

  return (
    <div id="Big">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1 id="create">Create Recipe</h1>
        <br />
        <br />
        <br />
        <label htmlFor="title">Title</label>

        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>

        <textarea
          name="desc"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />

        <br />
        <br />

        <label htmlFor="ingredients">Ingredients</label>
        <input
          type="text"
          value={ingredient}
          onChange={(event) => setIngredient(event.target.value)}
        />
        <button onClick={(e) => setIngredient(ingredient)}>Add</button>
        <div id="got">
          <ul>
            {ingredients.map((s, index) => (
              <li key={index}>
                {s}
                <button onClick={() => RemoveIngredient(index)}>-</button>
              </li>
            ))}
          </ul>
        </div>

        <br />

        <label htmlFor="steps">Steps</label>

        <input
          type="text"
          id="steps"
          value={step}
          onChange={(event) => setStep(event.target.value)}
        />
        <button onClick={(e) => setStep(step)}>Add</button>
        <div id="gotit">
          <ul>
            {steps.map((s, index) => (
              <li key={index}>
                {s}
                <button onClick={() => RemoveStep(index)}>-</button>
              </li>
            ))}
          </ul>
        </div>

        <br />

        
        
        <label htmlFor="servings">Servings</label>

        <input
          type="text"
          id="servings"
          value={servings}
          onChange={handleServingsChange}
        />

        <br />
        <br />
        <label htmlFor="preparationTime">Prep Time</label>

        <input
          type="text"
          id="preparationTime"
          value={preparationTime}
          onChange={handlePreparationTimeChange}
        />

        <br />
        <br />
        <button type="submit">Upload Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
