import React from "react";

import s from "./style.module.css";

const Filters = () => {
  return (
    <div className={s.filtersContainer}>
      <div className={s.wrapper}>
        <div className={s.filter}></div>
        <div className={s.filter}></div>
        <div className={s.filter}></div>
        <div className={s.filter}></div>
      </div>
      <div className={s.search}></div>
    </div>
  );
};

export default Filters;
