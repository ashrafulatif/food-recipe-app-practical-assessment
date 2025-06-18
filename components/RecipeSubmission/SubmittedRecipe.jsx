"use client";
import React, { useEffect, useState } from "react";
import IconButton from "../IconButton";
import toast from "react-hot-toast";

const SubmittedRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  const handleDelete = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
    toast.success("Recipe deleted successfully!");
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-yellow-900 text-center mb-8">
          Submitted Recipes
        </h2>
        {recipes.length === 0 ? (
          <p className="text-center text-gray-500">No recipes submitted yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md border relative"
              >
                <h3 className="text-xl font-semibold text-yellow-900 mb-2">
                  {recipe.name}
                </h3>
                <p className="text-gray-700">
                  <strong>Category:</strong> {recipe.category}
                </p>
                <p className="text-gray-700">
                  <strong>Ingredients:</strong> {recipe.ingredients}
                </p>
                <p className="text-gray-700">
                  <strong>Instructions:</strong> {recipe.instructions}
                </p>
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="mt-2 max-h-40 rounded border border-yellow-200"
                  />
                )}
                <div className="absolute top-2 right-2">
                  <IconButton
                    icon="Trash"
                    label=""
                    className="bg-red-500 text-white hover:bg-red-600"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmittedRecipe;
