import React, { createContext, ReactNode, useState } from "react";
interface RecipeData {
  title:string;
  description:string
  ingredients:string[];
  steps:string[];
  servings: number;
  preparationTime:number;
}
interface RecipeContextProps {
  recipeData: RecipeData | null;
  setRecipeData: React.Dispatch<
    React.SetStateAction<RecipeData | null>
  >;
}
interface RecipeProviderProps {
  children: ReactNode;
}
export const RecipeContext = createContext<RecipeContextProps>({
  recipeData: null,
  setRecipeData: () => {},
});

export const RecipeProvider: React.FC<RecipeProviderProps> = ({
  children,
}) => {
  const [recipeData, setRecipeData] =
    useState<RecipeData | null>(null);

  return (
    <RecipeContext.Provider
      value={{ recipeData, setRecipeData }}
    >
      {children}
    </RecipeContext.Provider>
  );
};