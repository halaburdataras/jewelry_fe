import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import Logo from "../Logo";

import s from "./style.module.css";

const Footer = ({ setOpenCart, setOpenFollow }) => {
  const handleOpenFollow = () => {
    setOpenFollow(true);
  };

  const handleCloseCart = () => {
    setOpenCart("close");
  };
  return (
    <footer>
      <p className={s.copyright}>© 2021 SAPHIRE. All rights reserved</p>
      <div className={`${s.container} ${s.left}`}>
        <Logo />
      </div>
      <div className={s.container}>
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
          <li>FAQ</li>
          <li onClick={handleOpenFollow}>Follow us</li>
        </ul>
      </div>
      <div className={`${s.container} ${s.right}`}>
        <CartIcon setOpenCart={setOpenCart} />
      </div>
    </footer>
  );
};

export default Footer;
