import React from "react";

import ring from "../../../assets/img/goods1.png";
import Button from "../../Button";

import s from "./style.module.css";

const Slide = () => {
  return (
    <div className={s.slide}>
      <div className={s.advertising}>
        <p className={s.collection}>New spring ring</p>
        <p className={s.name}>“Black Sea”</p>
        <div className={s.btnContainer}>
          <Button type="white" title="BUY NOW" />
        </div>
      </div>
      <img className={s.img} src={ring} alt="ring" />
      <div className={s.ui}>
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default Slide;
