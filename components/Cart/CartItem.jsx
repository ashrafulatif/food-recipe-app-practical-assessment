"use client";

import React from "react";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import IconButton from "@/components/IconButton";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row">
      <div className="relative h-48 sm:h-auto sm:w-48 flex-shrink-0">
        <Image
          src={item.strMealThumb}
          alt={item.strMeal}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {item.strMeal}
          </h3>
          <p className="text-gray-500 mb-4">A delicious meal waiting for you</p>
        </div>
        <div className="flex justify-end">
          <IconButton
            onClick={() => removeFromCart(item.idMeal)}
            className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center transition-colors duration-200"
            icon="Trash2"
            label="Remove"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
