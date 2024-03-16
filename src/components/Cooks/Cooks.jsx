import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

const Cooks = ({ selectedRecipes }) => {
  console.log(selectedRecipes);
  return (
    <div className="border-2 p-10 lg:w-[40%] rounded-xl">
      <h2 className="text-2xl font-semibold text-center">
        Want to cook : {selectedRecipes.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {selectedRecipes.map((selectedRecipe, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{selectedRecipe.recipe_name}</td>
                  <td>{selectedRecipe.preparing_time}</td>
                  <td>{selectedRecipe.calories}</td>
                  <td>
                    <button className="btn bg-green-400 hover:text-black text-white">
                      Preparing
                    </button>
                    <Toaster position="top-right" reverseOrder={false} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cooks;
