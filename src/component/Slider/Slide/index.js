import React from "react";

import ring from "../../../assets/img/ring.png";
import Button from "../../Button";

import s from "./style.module.css";

const Slide = () => {
  return (
    <div className={s.slide}>
      <div className={s.advertising}>
        <div className={s.btnContainer}>
          <Button type="white" title="BUY NOW" />
        </div>
        <img src={ring} alt="ring photo" />
      </div>
      <div className={s.ui}>
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default Slide;
