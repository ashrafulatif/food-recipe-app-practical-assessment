import CartView from "@/components/Cart/CartView";
import React from "react";

const Cart = () => {
  return (
    <div>
      <CartView />
    </div>
  );
};

export default Cart;
export const metadata = {
  title: "Cart",
  description: "View and manage your cart items",
};
