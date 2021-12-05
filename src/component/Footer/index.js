import React from "react";
import CartIcon from "../CartIcon";
import Logo from "../Logo";

import s from "./style.module.css";

const Footer = ({ setOpenCart, setOpenFollow }) => {
  return (
    <footer>
      <p className={s.copyright}>© 2021 SAPHIRE. All rights reserved</p>
      <div className={`${s.container} ${s.left}`}>
        <Logo />
      </div>
      <div className={s.container}>Menu</div>
      <div className={`${s.container} ${s.right}`}>
        <CartIcon setOpenCart={setOpenCart} />
      </div>
    </footer>
  );
};

export default Footer;
