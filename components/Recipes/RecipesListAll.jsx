"use client";
import HttpKit from "@/common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import Modal from "../Modal";
import Pagination from "../Pagination";
import RecipeSubmissionForm from "../RecipeSubmission/RecipeSubmissionForm";
import IconButton from "../IconButton";
import Link from "next/link";

const RecipesListAll = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  const { data, isLoading, error } = useQuery({
    queryKey: ["allRecipes", searchQuery],
    queryFn: () =>
      searchQuery
        ? HttpKit.searchRecipesByName(searchQuery)
        : HttpKit.getAllRecipes(),
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setCurrentPage(1); // Reset
  };

  const handleDetailsOpen = (id) => {
    setOpenDetails(true);
    setRecipeId(id);
  };
  // Calculate pagination
  const totalPages = data ? Math.ceil(data.length / recipesPerPage) : 0;
  const paginatedRecipes = data
    ? data.slice(
        (currentPage - 1) * recipesPerPage,
        currentPage * recipesPerPage
      )
    : [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading recipes...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        Error loading recipes: {error.message}
      </div>
    );

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-yellow-900 text-center mb-8">
          Explore All Recipes
        </h1>
        {/* Search form */}
        <div className="flex justify-center mb-6">
          <form onSubmit={handleSearch} className="w-full max-w-lg">
            <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
              <input
                placeholder="Search recipes..."
                className="w-full p-4 rounded-full outline-none bg-transparent text-gray-700"
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
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 5.5 0 1 1-11 0 5.5 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        {/* Recipe add */}
        <div className="flex justify-end mr-12">
          <Link href="/recipesubmission">
            <IconButton
              icon="Plus"
              label="Add Recipe"
              className="py-4 px-4 bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 text-yellow-900 font-semibold text-sm"
            />
          </Link>
        </div>

        <div className="relative py-10">
          <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
              {paginatedRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe?.idMeal}
                  recipe={recipe}
                  handleDetailsOpen={handleDetailsOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pass recipeId */}
      <Modal
        isOpen={openDetails}
        setIsOpen={setOpenDetails}
        recipeId={recipeId}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default RecipesListAll;
