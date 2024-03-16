import { useEffect, useState } from "react";
import Cooks from "../Cooks/Cooks";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleRecipes = (recipe) => {
    const newRecipe = [...selectedRecipes, recipe];
    setSelectedRecipes(newRecipe)
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="text-center max-w-[700px] mx-auto space-y-4">
        <h1 className="text-5xl font-semibold">Our Recipes</h1>
        <p>
          A recipe is a set of instructions that describes how to prepare or
          make something, especially a dish of prepared food.A sub-recipe or
          subrecipe is a recipe.
        </p>
      </div>

      <div className="flex gap-4 mt-6">
        <div className="recipe-container grid gap-4 grid-cols-1 lg:grid-cols-2 lg:w-2/3">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleRecipes={handleRecipes}
            ></Recipe>
          ))}
        </div>

        <Cooks
          selectedRecipes={selectedRecipes}
        ></Cooks>
      </div>
    </div>
  );
};

export default Recipes;
