"use client";
import React from "react";
import { useCart } from "@/context/cart-context";
import IconButton from "@/components/IconButton";
import Link from "next/link";

const SummaryPanel = () => {
  const { cart, clearCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
        Order Summary
      </h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">
            {cart.length} {cart.length === 1 ? "item" : "items"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total</span>
          <span className="text-xl font-bold text-yellow-700">
            Free Recipes
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <IconButton
          onClick={clearCart}
          className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full flex items-center justify-center transition-colors duration-200"
          icon="BrushCleaning"
          label="Clear Cart"
        />
        <button className="w-full px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold rounded-full shadow-md transform hover:scale-[1.02] transition-all duration-200">
          Proceed to Checkout
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-sm text-gray-500 text-center">
          Love cooking?{" "}
          <Link href="/all-recipes" className="text-yellow-600 hover:underline">
            Browse more recipes
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SummaryPanel;
