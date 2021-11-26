import React from "react";
import Logo from "../Logo";

import s from "./style.module.css";

const Footer = () => {
  return (
    <footer>
      <p className={s.copyright}>© 2021 SAPHIRE. All rights reserved</p>
      <div className={`${s.container} ${s.left}`}>
        <Logo />
      </div>
      <div className={s.container}>Menu</div>
      <div className={`${s.container} ${s.right}`}>Cart</div>
    </footer>
  );
};

export default Footer;
