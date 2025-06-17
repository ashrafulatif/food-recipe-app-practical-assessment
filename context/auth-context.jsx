"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Check initial load
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
      setWishlist(parsedUser.wishlist || []);
    }
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      setIsAuthenticated(true);
      setWishlist(foundUser.wishlist || []);
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      return { success: true, user: foundUser };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setWishlist([]);
    localStorage.removeItem("currentUser");
  };

  const addToWishlist = (recipe) => {
    const updatedWishlist = [...wishlist, recipe];
    setWishlist(updatedWishlist);

    if (user) {
      const updatedUser = { ...user, wishlist: updatedWishlist };
      setUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  };

  const removeFromWishlist = (idMeal) => {
    const updatedWishlist = wishlist.filter((item) => item.idMeal !== idMeal);
    setWishlist(updatedWishlist);

    if (user) {
      const updatedUser = { ...user, wishlist: updatedWishlist };
      setUser(updatedUser);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
