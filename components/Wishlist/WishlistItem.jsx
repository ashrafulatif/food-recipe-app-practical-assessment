"use client";
import React from "react";
import { useAuth } from "@/context/auth-context";
import Image from "next/image";
import IconButton from "../IconButton";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useAuth();

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
        <IconButton
          icon="Heart"
          className="text-gray-300 mb-4"
          iconProps={{ size: 48, strokeWidth: 1 }}
        />
        <h3 className="text-lg text-gray-500">Your wishlist is empty</h3>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <h2 className="text-xl font-medium mb-6 mt-24 text-yellow-950">
        Saved Recipes ({wishlist.length})
      </h2>
      <ul className="space-y-3">
        {wishlist.map((item) => (
          <li
            key={item.idMeal}
            className="flex items-center gap-4 p-3 border-b border-gray-100 hover:bg-gray-50"
          >
            <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={item.strMealThumb}
                alt={item.strMeal}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-grow min-w-0">
              <h3 className="font-medium truncate">{item.strMeal}</h3>
            </div>
            <IconButton
              icon="Trash"
              onClick={() => removeFromWishlist(item.idMeal)}
              className="text-red-500 hover:text-red-600"
              iconProps={{ fill: "currentColor" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
