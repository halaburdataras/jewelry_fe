import React from "react";

import Logo from "../Logo";
import cart from "../../assets/svg/cart.svg";

import s from "./style.module.css";
import { Link } from "react-router-dom";

const Header = ({ setOpenCart, setOpenFollow }) => {
  const handleOpenCart = () => {
    setOpenCart("half");
  };
  const handleOpenFollow = () => {
    setOpenFollow(true);
  };
  return (
    <header>
      <ul className={s.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>FAQ</li>
        <li onClick={handleOpenFollow}>Follow us</li>
      </ul>
      <div className={s.cart} onClick={handleOpenCart}>
        <img src={cart} alt="cart" />
        <span className={s.cartText}>Cart</span>
      </div>
    </header>
  );
};

export default Header;
