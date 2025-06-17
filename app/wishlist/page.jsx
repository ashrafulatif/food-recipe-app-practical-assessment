import CartView from "@/components/Cart/CartView";
import Wishlist from "@/components/Wishlist/WishlistItem";
import React from "react";

const Cart = () => {
  return (
    <div>
      <Wishlist />
    </div>
  );
};

export default Cart;
export const metadata = {
  title: "Wishlist",
  description: "View and manage your Wishlist items",
};
