"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { recipeSchema } from "./recipeValSchema";

export default function RecipeSubmissionForm() {
  const [step, setStep] = useState(1);
  const [previewImage, setPreviewImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(recipeSchema),
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setValue("image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    localStorage.setItem("recipes", JSON.stringify([...recipes, data]));
    setStep(1);
    setPreviewImage("");
    toast.success("Recipe submitted successfully!");
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-yellow-900 text-center mb-8 mt-12">
          Submit Your Recipe
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border border-yellow-200"
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-yellow-900">
                Step 1: Recipe Details
              </h2>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Recipe Name
                </label>
                <input
                  {...register("name")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter recipe name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Category
                </label>
                <input
                  {...register("category")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter category"
                />
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-yellow-900">
                Step 2: Ingredients & Instructions
              </h2>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Ingredients
                </label>
                <textarea
                  {...register("ingredients")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                  rows={4}
                  placeholder="List ingredients (separate with commas)"
                />
                {errors.ingredients && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.ingredients.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Instructions
                </label>
                <textarea
                  {...register("instructions")}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                  rows={4}
                  placeholder="Step-by-step instructions"
                />
                {errors.instructions && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.instructions.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-yellow-900">
                Step 3: Upload Recipe Image
              </h2>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
                {previewImage && (
                  <div className="mt-4">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="max-h-40 rounded-lg border border-yellow-200"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Submit Recipe
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
