"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth-context";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  // Load cart from storage when user changes
  useEffect(() => {
    const loadCart = () => {
      if (user) {
        const guestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
        const userCarts = JSON.parse(localStorage.getItem("userCarts")) || {};
        const userCart = userCarts[user.email] || [];

        // Merge guest cart with user cart
        const mergedCart = [...userCart];
        guestCart.forEach((item) => {
          if (!mergedCart.some((cartItem) => cartItem.idMeal === item.idMeal)) {
            mergedCart.push(item);
          }
        });

        setCart(mergedCart);
        userCarts[user.email] = mergedCart;
        localStorage.setItem("userCarts", JSON.stringify(userCarts));
        localStorage.removeItem("guestCart"); // Clear guest cart
      } else {
        // get the guest cart
        const guestCart = JSON.parse(localStorage.getItem("guestCart")) || [];
        setCart(guestCart);
      }
    };
    loadCart();
  }, [user]);

  // Save cart to storage whenever it changes
  useEffect(() => {
    if (user) {
      // Save to userspecific cart
      const userCarts = JSON.parse(localStorage.getItem("userCarts")) || {};
      userCarts[user.email] = cart;
      localStorage.setItem("userCarts", JSON.stringify(userCarts));
    } else {
      // Save to guest cart
      localStorage.setItem("guestCart", JSON.stringify(cart));
    }
  }, [cart, user]);

  const addToCart = (item) => {
    const exists = cart.some((cartItem) => cartItem.idMeal === item.idMeal);

    if (exists) {
      toast.error(`${item.strMeal} is already in the cart!`);
      return;
    }

    setCart((prevCart) => [...prevCart, item]);
    toast.success("Added to cart!");
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.idMeal !== id));
    toast.success("Item removed from cart!");
  };

  const clearCart = () => {
    toast.success("Cart cleared!");
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
