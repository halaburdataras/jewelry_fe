import React from "react";
import Slide from "./Slide";

import s from "./style.module.css";

const Slider = () => {
  return (
    <section className={s.slider}>
      <div className={s.slideContainer}>
        <Slide />
      </div>
    </section>
  );
};

export default Slider;
