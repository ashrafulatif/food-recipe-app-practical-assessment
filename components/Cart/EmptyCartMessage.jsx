import React from "react";
import Link from "next/link";

const EmptyCartMessage = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Your cart feels lonely
      </h2>
      <p className="text-gray-500 max-w-md mx-auto mb-6">
        Add some delicious recipes to get started on your culinary adventure!
      </p>
      <Link href="/all-recipes">
        <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
          Explore Recipes
        </button>
      </Link>
    </div>
  );
};

export default EmptyCartMessage;
