"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./login-validation";
import { useAuth } from "@/context/auth-context";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const result = login(data.email, data.password);
    if (result.success) {
      toast.success("Login successful!");
      router.push("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-7">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
          <h1 className="text-2xl font-bold text-yellow-900 mb-6 text-center">
            Login to Your Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-yellow-700 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
