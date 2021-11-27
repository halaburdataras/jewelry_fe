import React from "react";

import Logo from "../Logo";
import cart from "../../assets/svg/cart.svg";

import s from "./style.module.css";

const Header = ({ setOpen }) => {
  const handleOpenCart = () => {
    setOpen("half");
  };
  return (
    <header>
      <ul className={s.menu}>
        <li>Home</li>
        <li>Catalog</li>
        <li>
          <Logo />
        </li>
        <li>FAQ</li>
        <li>Follow us</li>
      </ul>
      <div className={s.cart} onClick={handleOpenCart}>
        <img src={cart} alt="cart" />
        <span className={s.cartText}>Cart</span>
      </div>
    </header>
  );
};

export default Header;
