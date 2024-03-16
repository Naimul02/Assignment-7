import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";

const Recipe = ({ recipe, handleRecipes }) => {
  // console.log(recipe);
  const {
    recipe_img,
    recipe_name,
    short_description,
    ingredients_in_an_array,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="card  bg-base-100 shadow-xl p-4">
      <figure>
        <img src={recipe_img} alt="Recipe image" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p>{short_description}</p>
        <hr />
        <div>
          <h2 className="text-lg font-semibold">
            Ingredients: {ingredients_in_an_array.length}
          </h2>
          <ul>
            {ingredients_in_an_array.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex justify-between">
          <div className="flex gap-1">
            <MdOutlineAccessTime className="text-2xl" />
            <span>{preparing_time}</span>
          </div>
          <div className="flex gap-1">
            <img src="../../../src/assets/Frame.png" alt="img nai" />
            <p>{calories}</p>
          </div>
        </div>
        <div className="card-actions mt-3">
          <button
            className="btn bg-slate-600 text-white hover:text-black px-10  rounded-full"
            onClick={() => handleRecipes(recipe)}
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
