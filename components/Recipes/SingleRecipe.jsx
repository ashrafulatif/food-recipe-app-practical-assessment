import HttpKit from "@/common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const SingleRecipe = ({ id, setIsOpen }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipe-details", id],
    queryFn: () => HttpKit.getRecipeDetails(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe details</div>;
  if (!data) return <div>No recipe data found</div>;

  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = data[`strIngredient${i + 1}`];
    const measure = data[`strMeasure${i + 1}`];
    return ingredient && measure ? `${measure} ${ingredient}` : null;
  }).filter(Boolean);

  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={() => setIsOpen(false)}
        className="self-end text-gray-500 hover:text-gray-700"
      >
        Close
      </button>
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={data.strMealThumb}
          alt={data.strMeal}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="text-2xl font-semibold">{data.strMeal}</h2>
      <div className="space-y-4">
        <section>
          <h3 className="font-medium text-lg">Instructions</h3>
          <p className="text-gray-600">{data.strInstructions}</p>
        </section>
        <section>
          <h3 className="font-medium text-lg">Ingredients</h3>
          <ul className="list-disc pl-5 text-gray-600">
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SingleRecipe;
