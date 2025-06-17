import Image from "next/image";
import React, { useState } from "react";
import { useCart } from "@/context/cart-context";
import IconButton from "../IconButton";

const RecipeCard = ({ recipe, handleDetailsOpen }) => {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="group relative border border-gray-100 rounded-3xl bg-white px-4 py-4 text-center shadow hover:cursor-pointer hover:shadow-xl transition duration-200 shadow-gray-600/10 flex flex-col h-full">
      {/* Wishlist*/}
      <div className="absolute top-6 right-6 z-10">
        <IconButton
          icon="Heart"
          onClick={toggleWishlist}
          className={`p-2 bg-white/80 rounded-full backdrop-blur-sm ${
            isWishlisted
              ? "text-red-500 hover:bg-red-50"
              : "text-gray-400 hover:bg-gray-100"
          }`}
          iconProps={{
            fill: isWishlisted ? "currentColor" : "none",
            strokeWidth: 2,
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          variant="ghost"
        />
      </div>

      {/* Recipe Image and Details */}
      <div
        onClick={() => handleDetailsOpen(recipe?.idMeal)}
        className="flex-1 cursor-pointer"
      >
        <Image
          className="mx-auto rounded-2xl"
          src={recipe?.strMealThumb}
          alt={recipe?.strMeal}
          loading="lazy"
          width={500}
          height={500}
        />
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 mt-4">
          {recipe?.strMeal}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
          Discover the taste of {recipe?.strMeal}.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100 gap-2 mt-auto">
        <IconButton
          icon="Eye"
          label="Details"
          onClick={(e) => {
            e.stopPropagation();
            handleDetailsOpen(recipe?.idMeal);
          }}
          className="flex-1 text-gray-600 hover:text-yellow-700 transition-colors justify-center"
          variant="ghost"
        />

        <IconButton
          icon="ShoppingCart"
          label="Add to Cart"
          onClick={(e) => {
            e.stopPropagation();
            addToCart(recipe);
          }}
          className="flex-1 bg-yellow-300 text-yellow-900 hover:bg-yellow-400"
          variant="solid"
        />
      </div>
    </div>
  );
};

export default RecipeCard;
