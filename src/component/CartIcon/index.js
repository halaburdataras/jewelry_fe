import React from "react";
import cart from "../../assets/svg/cart.svg";
import { useSelector } from "react-redux";
import { findQuantity } from "../../utils";

const CartIcon = ({ setOpenCart }) => {
  const { cartItems } = useSelector((state) => ({
    cartItems: state.Cart.cart,
  }));
  const handleOpenCart = () => {
    setOpenCart("half");
  };

  return (
    <div className="cart" onClick={handleOpenCart}>
      <span className={findQuantity(cartItems) > 0 && "cartNumber"}>
        {findQuantity(cartItems) > 0 && findQuantity(cartItems)}
      </span>
      <img src={cart} alt="cart" />
      <span className="cartText">Cart</span>
    </div>
  );
};

export default CartIcon;
