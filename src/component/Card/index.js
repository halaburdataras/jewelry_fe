import React from "react";
import Button from "../Button";

import s from "./style.module.css";

const Card = ({ item, action }) => {
  return (
    <div className={s.card}>
      <div className={s.imageContainer}>
        <img src={item.photo} alt="main" />
      </div>
      <div className={s.actionsContainer}>
        <p className={s.desc}>
          <span>{item.price} UAH</span>
          <span className={s.name}>{item.name}</span>
        </p>
        <Button
          action={() => {
            action(item);
          }}
          title="ADD TO CART"
        />
      </div>
    </div>
  );
};

export default Card;
