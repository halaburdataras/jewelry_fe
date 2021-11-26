import React from "react";

import s from "./style.module.css";

const Cart = () => {
  return (
    <section className={s.cart}>
      <div className={s.header}>
        <div>X</div>
        <div>Cart</div>
        <div>Select all</div>
      </div>
    </section>
  );
};

export default Cart;
