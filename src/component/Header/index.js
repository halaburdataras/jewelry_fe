import React from "react";

import Logo from "../Logo";

import s from "./style.module.css";

const Header = () => {
  return (
    <header>
      <ul className={s.menu}>
        <li>Home</li>
        <li>Rings</li>
        <li>
          <Logo />
        </li>
        <li>Cart</li>
        <li>FAQ</li>
      </ul>
    </header>
  );
};

export default Header;
