import React from "react";

import Logo from "../Logo";

import s from "./style.module.css";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";

const Header = ({ setOpenCart, setOpenFollow }) => {
  const handleOpenFollow = () => {
    setOpenFollow(true);
  };

  const handleCloseCart = () => {
    setOpenCart("close");
  };

  return (
    <header>
      <ul className={s.menu}>
        <li>
          <Link to="/" onClick={handleCloseCart}>
            Home
          </Link>
        </li>
        <li>
          <Link to="catalog" onClick={handleCloseCart}>
            Catalog
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleCloseCart}>
            <Logo />
          </Link>
        </li>
        <li>FAQ</li>
        <li onClick={handleOpenFollow}>Follow us</li>
      </ul>
      <CartIcon setOpenCart={setOpenCart} />
    </header>
  );
};

export default Header;
