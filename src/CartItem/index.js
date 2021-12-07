import React from "react";

import s from "./style.module.css";

const CartItem = ({ item, checkbox, checked, action }) => {
  return (
    <div className={s.cartItem}>
      <img src={item.photo} className={s.image} alt="selected ring" />
      <div className={s.text}>
        <p className={s.price}>
          <span className={s.blue}>{item.price}</span> UAH • {item.quantity}
        </p>
        <p className={s.name}>{item.name}</p>
      </div>
      {checkbox && (
        <input
          className={s.checkbox}
          checked={checked}
          type="checkbox"
          onChange={() => {
            action(item);
          }}
        />
      )}
    </div>
  );
};

export default CartItem;
