import React, { useState } from "react";
import CartItem from "../../CartItem";
import Button from "../Button";

import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { formOrder } from "../../redux/order/order.actions";
import { findQuantity } from "../../utils";

const Cart = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const { cartItems } = useSelector((state) => ({
    cartItems: state.Cart.cart,
  }));

  const handleCloseCart = () => {
    setOpen("close");
  };

  const handleOpenCart = () => {
    if (checked.length !== 0) {
      dispatch(formOrder(checked));
      setOpen("full");
    }
  };

  const handleCheckItem = (item) => {
    setChecked((prev) => {
      const possibleItem = prev.find((el) => el.id === item.id);

      let newChecked;
      if (possibleItem) {
        newChecked = prev.filter((el) => el.id !== item.id);
      } else {
        newChecked = [...prev, item];
      }
      return newChecked;
    });
  };
  const allCartItems = cartItems.map((el) => {
    return <CartItem item={el} action={handleCheckItem} checkbox />;
  });

  return (
    <section className={`${s.cart}`}>
      <div className={s.header}>
        <div className={s.close} onClick={handleCloseCart} />
        <div className={s.info}>
          Cart • <span className={s.number}>{findQuantity(cartItems)}</span>{" "}
          goods
        </div>
        <div className={s.select}>Select all</div>
      </div>
      <div className={s.content}>{allCartItems}</div>
      <div className={s.btnContainer}>
        <Button type="black" title="ORDER NOW" action={handleOpenCart} />
      </div>
    </section>
  );
};

export default Cart;
