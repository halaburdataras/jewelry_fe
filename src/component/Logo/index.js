import React from "react";

import logo from "../../assets/svg/logo.svg";
import s from "./style.module.css";

const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={logo} alt="logo" />
      <span>SAPHIRE</span>
    </div>
  );
};

export default Logo;
