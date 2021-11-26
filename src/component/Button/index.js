import React, { useState } from "react";

import s from "./style.module.css";

const Button = ({ type, title, action }) => {
  const [style, setStyle] = useState(false);
  const findStyle = () => {
    switch (type) {
      case "white":
        return s.whiteBtn;
      case "black":
        return s.blackBtn;
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
