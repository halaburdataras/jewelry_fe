import React from "react";

import s from "./style.module.css";

const CartItem = ({ img, name, price, checkbox, action }) => {
  return (
    <div className={s.cartItem}>
      <img src={img} className={s.image} alt="selected ring" />
      <div className={s.text}>
        <p>{price}</p>
        <p>{name}</p>
      </div>
      {checkbox && <input className={s.checkbox} type="checkbox" />}
    </div>
  );
};

export default CartItem;
