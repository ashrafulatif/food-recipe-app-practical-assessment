"use client";
import HttpKit from "@/common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Modal from "../Modal";
import Pagination from "../Pagination";

const RecipesList = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [recipeId, setRecipeId] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6; // Number of recipes per page
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const paginatedRecipes = recipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  // Fetch recipes based on query or top
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes", searchQuery],
    queryFn: () =>
      searchQuery
        ? HttpKit.searchRecipesByName(searchQuery)
        : HttpKit.getTopRecipes(),
  });

  useEffect(() => {
    if (data) {
      setRecipes(data);
    }
  }, [data]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  const handleDetailsOpen = (id) => {
    setRecipeId(id);
    setOpenDetails(true);
  };

  if (isLoading)
    return <div className="py-10 text-center">Loading recipes...</div>;
  if (error)
    return (
      <div className="py-10 text-center text-red-500">
        Error loading recipes: {error.message}
      </div>
    );

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-yellow-900">Top Recipes</h1>

        {/* Search form */}
        <form onSubmit={handleSearch} className="w-full mt-6">
          <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
            <input
              placeholder="Search your favorite food"
              className="w-full p-4 rounded-full outline-none bg-transparent"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              title="Search recipes"
              className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
            >
              <span className="hidden text-yellow-900 font-semibold md:block">
                Search
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 mx-auto text-yellow-900 md:hidden"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Recipes grid */}
        <div className="py-8">
          {paginatedRecipes.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">No recipes found</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  handleDetailsOpen={handleDetailsOpen}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pass recipeId */}
      <Modal
        isOpen={openDetails}
        setIsOpen={setOpenDetails}
        recipeId={recipeId}
      />
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RecipesList;
