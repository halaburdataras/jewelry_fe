import React from "react";
import Card from "../Card";

import r1 from "../../assets/img/rings/1.png";
import r2 from "../../assets/img/rings/2.png";
import r3 from "../../assets/img/rings/3.png";
import r4 from "../../assets/img/rings/4.png";
import r5 from "../../assets/img/rings/5.png";
import s from "./style.module.css";

const Catalog = () => {
  return (
    <section className={s.catalog}>
      <div className={s.header}>
        <h2 className={s.header_title}>Catalog</h2>
        <h3 className={s.header_text}>See All</h3>
      </div>
      <div className={s.container}>
        <Card image={r1} />
        <Card image={r2} />
        <Card image={r3} />
        <Card image={r4} />
        <Card image={r5} />
        <Card image={r1} />
      </div>
    </section>
  );
};

export default Catalog;
