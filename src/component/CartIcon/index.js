import React from "react";
import cart from "../../assets/svg/cart.svg";
import { useSelector } from "react-redux";

const CartIcon = ({ setOpenCart }) => {
  const { quantity } = useSelector((state) => ({
    quantity: state.Cart.cart.length,
  }));
  const handleOpenCart = () => {
    setOpenCart("half");
  };
  return (
    <div className="cart" onClick={handleOpenCart}>
      <span className={quantity > 0 && "cartNumber"}>
        {quantity > 0 && quantity}
      </span>
      <img src={cart} alt="cart" />
      <span className="cartText">Cart</span>
    </div>
  );
};

export default CartIcon;
