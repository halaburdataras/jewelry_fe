import React from "react";
import Button from "../Button";

import s from "./style.module.css";

const Card = ({ price, description, image, action }) => {
  return (
    <div className={s.card}>
      <div className={s.imageContainer}>
        <img src={image} />
      </div>
      <div className={s.actionsContainer}>
        <p className={s.desc}>
          <span>Price</span>Descriptions
        </p>
        <Button action={action} title="ADD TO CART" />
      </div>
    </div>
  );
};

export default Card;
