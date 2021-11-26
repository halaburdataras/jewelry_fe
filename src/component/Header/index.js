import React from "react";

import Logo from "../Logo";

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
        cart
      </div>
    </header>
  );
};

export default Header;
