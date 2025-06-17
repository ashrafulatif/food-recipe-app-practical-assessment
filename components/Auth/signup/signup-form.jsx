"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { signupSchema } from "./validation-signup";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = (data) => {
    // initialize or get user
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // Check email existence
    const userExists = existingUsers.some((user) => user.email === data.email);

    if (userExists) {
      toast.error("User with this email already exists!");
      return;
    }

    existingUsers.push(data);

    // Save to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    //console.log("User registered:", data);
    toast.success("User registered successfully!");
    router.push("/login");
    reset();
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-7 ">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
          <h1 className="text-2xl font-bold text-yellow-900 mb-6 text-center">
            Create Your Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className={`w-full p-4 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-yellow-200"
                } bg-transparent outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-500" : "focus:ring-yellow-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className={`w-full p-4 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-yellow-200"
                } bg-transparent outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-yellow-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                {...register("phone")}
                className={`w-full p-4 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-yellow-200"
                } bg-transparent outline-none focus:ring-2 ${
                  errors.phone ? "focus:ring-red-500" : "focus:ring-yellow-300"
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className={`w-full p-4 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-yellow-200"
                } bg-transparent outline-none focus:ring-2 ${
                  errors.password
                    ? "focus:ring-red-500"
                    : "focus:ring-yellow-300"
                }`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full text-center transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 text-yellow-900 font-semibold"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-700 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
