import React from "react";
import RecipesListAll from "@/components/Recipes/RecipesListAll";

const AllRecipes = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <RecipesListAll />
    </div>
  );
};

export default AllRecipes;

export const metadata = {
  title: "All Recipes",
  description: "Explore all available recipes",
};
