import React, { useState } from "react";

import appleLogo from "../../assets/svg/applePayLogo.svg";
import googleLogo from "../../assets/svg/googlePayLogo.svg";
import fondyLogo from "../../assets/svg/fondyLogo.svg";
import monoLogo from "../../assets/svg/monoLogo.svg";
import privatLogo from "../../assets/svg/privatLogo.svg";
import backBtnSvg from "../../assets/svg/backBtn.svg";
import CartItem from "../../CartItem";
import Button from "../Button";

import s from "./style.module.css";
import PaymentItem from "./PaymentItem";
import { useDispatch, useSelector } from "react-redux";
import { checkLength, findPrice, findQuantity, getIdArray } from "../../utils";
import { addCheckout } from "../../redux/checkout/checkout.actions";

const Order = ({ setOpen }) => {
  const [payment, setPayment] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const createCheckout = () => {
    return {
      ...userInfo,
      items: getIdArray(orderItems),
      totalPrice: findPrice(orderItems),
    };
  };

  const { orderItems } = useSelector((state) => ({
    orderItems: state.Order.items,
  }));

  const allOrderItems = orderItems.map((el) => {
    return <CartItem item={el} />;
  });

  const handleBackClick = () => {
    setOpen("half");
  };

  const handleChange = (name) => {
    setPayment(name);
  };

  const handleSetUserInfo = (value) => {
    setUserInfo((prev) => ({ ...prev, ...value }));
  };

  const handleCheckout = () => {
    if (
      checkLength(userInfo.fullName) &&
      checkLength(userInfo.email) &&
      checkLength(userInfo.phone) &&
      checkLength(userInfo.adress) &&
      checkLength(userInfo.adressExtended)
    ) {
      const checkout = createCheckout();
      console.log("1");
      dispatch(addCheckout(checkout));
    } else {
      setError("Fill all fields");
    }
  };

  return (
    <div className={s.order}>
      <div className={s.header}>
        <div className={s.backBtn} onClick={handleBackClick}>
          <img src={backBtnSvg} alt="backbtn" />
          <span className={s.backText}>Back</span>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.itemsContainer}>
          <div className={s.itemsInfo}>
            <p className={s.headerText}>
              You buying{" "}
              <span className={s.number}>{findQuantity(orderItems)}</span> goods
            </p>
            <p className={s.priceText}>
              All — <span className={s.price}>{findPrice(orderItems)}₴</span>
            </p>
          </div>
          <div className={s.items}>{allOrderItems}</div>
        </div>
        <div className={s.deliveryContainer}>
          <div className={s.deliveryInfo}>
            <p className={s.headerText}>Delivery information</p>
          </div>
          <div>
            <div className={s.inputContainer}>
              <p className={s.inputDescription}>Name</p>
              <input
                className={s.input}
                onChange={(e) => {
                  handleSetUserInfo({ fullName: e.target.value });
                }}
                placeholder="Elizabeth Lishchenko"
              />
            </div>
            <div className={s.inputContainer}>
              <p className={s.inputDescription}>E-Mail</p>
              <input
                className={s.input}
                onChange={(e) => {
                  handleSetUserInfo({ email: e.target.value });
                }}
                placeholder="example@gmail.com"
              />
            </div>
            <div className={s.inputContainer}>
              <p className={s.inputDescription}>Phone</p>
              <input
                className={s.input}
                onChange={(e) => {
                  handleSetUserInfo({ phone: e.target.value });
                }}
                placeholder="092 12 72 190"
              />
            </div>
            <div className={s.inputContainer}>
              <p className={s.inputDescription}>Address</p>
              <input
                className={s.input}
                onChange={(e) => {
                  handleSetUserInfo({ adress: e.target.value });
                }}
                placeholder="City & Region"
              />
              <input
                className={s.input}
                onChange={(e) => {
                  handleSetUserInfo({ adressExtended: e.target.value });
                }}
                placeholder="Street & apartments or house"
              />
            </div>
          </div>
        </div>
        <div className={s.paymentContainer}>
          <div className={s.paymentInfo}>
            <p className={s.headerText}>Payment</p>
            <p className={s.priceText}>
              End price —{" "}
              <span className={s.paymentPrice}>{findPrice(orderItems)}₴</span>
            </p>
          </div>
          <div className={s.radioGrid}>
            <PaymentItem
              handleChange={handleChange}
              name="applePay"
              payment={payment}
              img={appleLogo}
              big
            />
            <PaymentItem
              handleChange={handleChange}
              name="googlePay"
              payment={payment}
              img={googleLogo}
              big
            />
            <PaymentItem
              handleChange={handleChange}
              name="fondy"
              payment={payment}
              img={fondyLogo}
              big
            />
            <PaymentItem
              handleChange={handleChange}
              name="monoBank"
              payment={payment}
              img={monoLogo}
            />
            <PaymentItem
              handleChange={handleChange}
              name="privatBank"
              payment={payment}
              img={privatLogo}
            />
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <h4 className={`${s.error} ${error && s.visible}`}>
          {error ? error : "hz"}
        </h4>
        <div className={s.buttonContainer}>
          <Button type="black" title="ORDER NOW" action={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default Order;
