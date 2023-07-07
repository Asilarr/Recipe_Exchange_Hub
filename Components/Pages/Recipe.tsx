import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../Styles/Recipe.css"

interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
}

interface RecipeDetailsParams {
  id: string;
  [key: string]: string;
}
const Recipe: React.FC = () => {
  const { id } = useParams<RecipeDetailsParams>();

  const recipes: Recipe[] = [
    {
      id: "1",
      title: "Recipe 1",
      description: "Recipe 1 description",
      ingredients: [
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
      ],
    },
    {
      id: "2",
      title: "Recipe 2",
      description: "Recipe 2 description",
      ingredients: [
        "ingredient 3",
        "ingredient 4",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
      ],
    },
    {
      id: "3",
      title: "Recipe 3",
      description: "Recipe 3 description",
      ingredients: [
        "ingredient 5",
        "ingredient 6",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
      ],
    },
    {
      id: "4",
      title: "Recipe 4",
      description: "Recipe 4 description",
      ingredients: [
        "ingredient 7",
        "ingredient 8",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
      ],
    },
    {
      id: "5",
      title: "Recipe 5",
      description: "Recipe 5 description",
      ingredients: [
        "ingredient 9",
        "ingredient 10",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
        "ingredient 1",
        "ingredient 2",
        "ingredient 3",
      ],
    },
  ];
  const [recipees,setRecipees]=useState([]);
  useEffect(() => {
    rec();
  }, []);

  const rec = async () => {
    const res = await axios.get("http://localhost:8080/recipe/getRecipes");
    setRecipees(res.data);
  };

  
  return (
    <>
    <table>
      <thead><tr>
        <th scope="col">#</th>
        <th scope="col"><h1>Title</h1></th>
        <th scope="col"><h3>Description</h3></th>
        <th scope="col"><h3>ingredients</h3></th>
        <th scope="col"><h3>steps</h3></th>
        <th scope="col"><h3>servings</h3></th>
        <th scope="col"><h3>prep time</h3></th>
        </tr></thead>
        <tbody>
          {recipees.map((recipee, index)=>(
            <tr>
              <th scope="row" key={index}>
                  {index+1}
              </th>
              
              <td>{recipee.id}</td>
              <td>{recipee.title}</td>
              <td>{recipee.description}</td>
              <td>{recipee.ingredients}</td>
              <td>{recipee.steps}</td>
              <td>{recipee.servings}</td>
              <td>{recipee.preparationTime}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
    
  );
};

export default Recipe;
