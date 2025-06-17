"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { ShoppingCart, Heart, BookOpen } from "lucide-react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { cart } = useCart();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="fixed z-50 w-full bg-white md:absolute md:bg-transparent">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
            <Link
              href="/"
              aria-label="logo"
              className="flex space-x-2 items-center"
            >
              <span className="text-2xl font-bold text-yellow-900">
                Tailus <span className="text-yellow-700">Feedus</span>
              </span>
            </Link>

            <div className="flex items-center lg:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="hamburger"
                id="hamburger"
                className="relative w-10 h-auto p-2"
              >
                <div
                  id="line"
                  className="m-auto h-0.5 w-6 rounded bg-yellow-900 transition duration-300"
                ></div>
                <div
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 transition duration-300"
                ></div>
              </label>
            </div>
          </div>

          <label
            role="button"
            htmlFor="toggle_nav"
            className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200 bg-opacity-30 backdrop-blur backdrop-filter"
          ></label>
          <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
            <div className="text-gray-600 lg:pr-4 w-full lg:w-auto">
              <ul className="tracking-wide font-medium text-sm flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                <li>
                  <Link
                    href="/all-recipes"
                    className="block md:px-4 transition hover:text-yellow-700 flex items-center gap-2"
                  >
                    <BookOpen size={16} />
                    <span>All recipes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    className="block md:px-4 transition hover:text-yellow-700 flex items-center gap-2"
                  >
                    <Heart size={16} />
                    <span>Wishlist</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className=" md:px-4 transition hover:text-yellow-700 relative flex items-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Cart</span>
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-yellow-300 text-yellow-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full min-w-max space-y-2 border-yellow-200 lg:space-y-0 sm:w-max lg:border-l">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-4">
                    <span className="text-yellow-800 font-semibold px-2">
                      Welcome, {user?.name}
                    </span>
                    <button
                      onClick={handleLogout}
                      type="button"
                      title="Logout"
                      className="w-full py-3 px-4 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                    >
                      <span className="block text-yellow-900 font-semibold text-sm">
                        Logout
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/signup">
                    <button
                      type="button"
                      title="Sign up"
                      className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                    >
                      <span className="block text-yellow-800 font-semibold text-sm">
                        Sign up
                      </span>
                    </button>
                  </Link>
                  <Link href="/login">
                    <button
                      type="button"
                      title="Login"
                      className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                    >
                      <span className="block text-yellow-900 font-semibold text-sm">
                        Login
                      </span>
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
