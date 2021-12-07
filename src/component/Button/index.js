import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import s from "./style.module.css";

const Button = ({ type, title, action, isLink, path }) => {
  const [style, setStyle] = useState(false);
  const findStyle = () => {
    switch (type) {
      case "white":
        return s.whiteBtn;
      case "black":
        return s.blackBtn;
      case "info":
        return s.infoBtn;
      default:
        return s.grayBtn;
    }
  };

  const handleClickBtn = () => {
    setStyle(true);
  };
  const handleReleaseBtn = () => {
    setStyle(false);
  };
  if (isLink) {
    return (
      <NavLink
        className={`${s.button} ${findStyle()} ${style && s.active}`}
        to={path}
        onMouseDown={handleClickBtn}
        onMouseUp={handleReleaseBtn}
      >
        <div className={s.star} />
        <span className={s.title}>{title}</span>
      </NavLink>
    );
  }
  return (
    <div
      className={`${s.button} ${findStyle()} ${style && s.active}`}
      onClick={action}
      onMouseDown={handleClickBtn}
      onMouseUp={handleReleaseBtn}
    >
      <div className={s.star} />
      <span className={s.title}>{title}</span>
    </div>
  );
};

export default Button;
