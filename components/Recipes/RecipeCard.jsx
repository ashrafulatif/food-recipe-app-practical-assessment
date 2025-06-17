import Image from "next/image";
import React from "react";
import { useCart } from "@/context/cart-context";

const RecipeCard = ({ recipe, handleDetailsOpen }) => {
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => handleDetailsOpen(recipe?.idMeal)}
      className="group space-y-6 border border-gray-100 rounded-3xl bg-white px-4 py-4 text-center shadow hover:cursor-pointer hover:shadow-xl transition duration-200 shadow-gray-600/10"
    >
      <Image
        className="mx-auto rounded-2xl"
        src={recipe?.strMealThumb}
        alt={recipe?.strMeal}
        loading="lazy"
        width={500}
        height={500}
      />
      <h3 className="text-lg font-semibold text-gray-800">{recipe?.strMeal}</h3>
      <p className="text-sm text-gray-500">
        Discover the taste of {recipe?.strMeal}. Click below for details or add
        to cart!
      </p>
      <div className="relative mx-auto flex items-center justify-center space-x-4 pb-4">
        <button
          className="text-primary underline"
          onClick={(e) => {
            e.stopPropagation();
            handleDetailsOpen(recipe?.idMeal);
          }}
        >
          View details
        </button>
        <button
          className="py-2 px-4 rounded-full bg-yellow-300 text-yellow-900 font-semibold hover:bg-yellow-400 transition"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(recipe);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
