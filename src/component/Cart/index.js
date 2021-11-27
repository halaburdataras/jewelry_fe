import React from "react";
import CartItem from "../../CartItem";
import Button from "../Button";

import img from "../../assets/img/rings/1.png";

import s from "./style.module.css";

const Cart = ({ setOpen }) => {
  const handleCloseCart = () => {
    setOpen("close");
  };
  const handleOpenCart = () => {
    setOpen("full");
  };
  return (
    <section className={`${s.cart}`}>
      <div className={s.header}>
        <div className={s.close} onClick={handleCloseCart} />
        <div className={s.info}>
          Cart • <span className={s.number}>34</span> goods
        </div>
        <div className={s.select}>Select all</div>
      </div>
      <div className={s.content}>
        <CartItem
          img={img}
          price="4400 UAH"
          name="Wedding ring “Lake’s eye”"
          checkbox
        />
        <CartItem
          img={img}
          price="4400 UAH"
          name="Wedding ring “Lake’s eye”"
          checkbox
        />
        <CartItem
          img={img}
          price="4400 UAH"
          name="Wedding ring “Lake’s eye”"
          checkbox
        />
        <CartItem
          img={img}
          price="4400 UAH"
          name="Wedding ring “Lake’s eye”"
          checkbox
        />
        <CartItem
          img={img}
          price="4400 UAH"
          name="Wedding ring “Lake’s eye”"
          checkbox
        />
      </div>
      <div className={s.btnContainer}>
        <Button type="black" title="ORDER NOW" action={handleOpenCart} />
      </div>
    </section>
  );
};

export default Cart;
