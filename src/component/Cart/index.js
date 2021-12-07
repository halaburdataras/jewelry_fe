import React, { useEffect, useState } from "react";
import CartItem from "../../CartItem";
import Button from "../Button";

import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { formOrder } from "../../redux/order/order.actions";
import { findQuantity } from "../../utils";
import { clearCart, removeFromCart } from "../../redux/cart/cart.actions";

const Cart = ({ setOpen }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const [canDelete, setCanDelete] = useState(false);
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

  const handleSelectAll = () => {
    if (checked.length === cartItems.length) {
      setChecked([]);
      return;
    }
    setChecked(cartItems);
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

  const handleClearCart = () => {
    if (cartItems.length === checked.length) dispatch(clearCart());
    else {
      checked.forEach((el) => {
        dispatch(removeFromCart(el.id));
      });
    }
    setChecked([]);
  };

  const allCartItems = cartItems.map((el) => {
    if (checked.find((item) => item.id === el.id)) {
      return <CartItem item={el} checked action={handleCheckItem} checkbox />;
    }
    return <CartItem item={el} action={handleCheckItem} checkbox />;
  });

  useEffect(() => {
    if (checked.length) setCanDelete(true);
    else setCanDelete(false);
  }, [checked]);

  return (
    <section className={`${s.cart}`}>
      <div className={s.header}>
        <div className={s.close} onClick={handleCloseCart} />
        <div className={s.info}>
          Cart • <span className={s.number}>{findQuantity(cartItems)}</span>{" "}
          goods
        </div>
        <div className={s.select} onClick={handleSelectAll}>
          Select all
        </div>
      </div>
      <div className={s.deleteContainer}>
        {canDelete && (
          <p className={s.delText} onClick={handleClearCart}>
            Delete selected
          </p>
        )}
      </div>
      <div className={s.content}>{allCartItems}</div>
      <div className={s.btnContainer}>
        <Button type="black" title="ORDER NOW" action={handleOpenCart} />
      </div>
    </section>
  );
};

export default Cart;
