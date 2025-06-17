"use client"
import React from "react";
import { useCart } from "@/context/cart-context";
import Link from "next/link";
import CartItem from "./CartItem";
import SummaryPanel from "./SummaryPanel";
import EmptyCartMessage from "./EmptyCartMessage";

const CartView = () => {
  const { cart } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-20">
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold text-yellow-900 mb-2">
            Your Culinary Treasures
          </h1>
          <p className="text-lg text-yellow-700">
            {cart.length === 0
              ? "Your culinary journey awaits"
              : `${cart.length} delicious ${
                  cart.length === 1 ? "item" : "items"
                } ready for you`}
          </p>
        </div>

        {cart.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <CartItem key={item.idMeal} item={item} />
              ))}
            </div>
            <div className="lg:col-span-1">
              <SummaryPanel cart={cart} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
