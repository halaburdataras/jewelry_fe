import React, { useState } from "react";

import img from "../../assets/img/rings/1.png";
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

const Order = ({ setOpen }) => {
  const [payment, setPayment] = useState(null);
  const handleBackClick = () => {
    setOpen("half");
  };
  const handleChange = (name) => {
    setPayment(name);
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
              You buying <span className={s.number}>4</span> goods
            </p>
            <p className={s.priceText}>
              All — <span className={s.price}>35 200₴</span>
            </p>
          </div>
          <div className={s.items}>
            <CartItem
              img={img}
              price="4400 UAH"
              name="Wedding ring “Lake’s eye”"
            />
            <CartItem
              img={img}
              price="4400 UAH"
              name="Wedding ring “Lake’s eye”"
            />
            <CartItem
              img={img}
              price="4400 UAH"
              name="Wedding ring “Lake’s eye”"
            />
            <CartItem
              img={img}
              price="4400 UAH"
              name="Wedding ring “Lake’s eye”"
            />
            <CartItem
              img={img}
              price="4400 UAH"
              name="Wedding ring “Lake’s eye”"
            />
            <CartItem
              img={img}
              price="4400 UAH"
              name="Wedding ring “Lake’s eye”"
            />
            <CartItem
              img={img}
              price="4400 UAH"
              name="Wedding ring “Lake’s eye”"
            />
            <CartItem
              img={img}
              price="4400 UAH"
              name="Wedding ring “Lake’s eye”"
            />
          </div>
        </div>
        <div className={s.deliveryContainer}>
          <div className={s.deliveryInfo}>
            <p className={s.headerText}>Delivery information</p>
          </div>
          <div>
            <div className={s.inputContainer}>
              <p className={s.inputDescription}>Name</p>
              <input className={s.input} placeholder="Elizabeth Lishchenko" />
            </div>
            <div className={s.inputContainer}>
              <p className={s.inputDescription}>E-Mail</p>
              <input className={s.input} placeholder="example@gmail.com" />
            </div>
            <div className={s.inputContainer}>
              <p className={s.inputDescription}>Phone</p>
              <input className={s.input} placeholder="092 12 72 190" />
            </div>
            <div className={s.inputContainer}>
              <p className={s.inputDescription}>Address</p>
              <input className={s.input} placeholder="City & Region" />
              <input
                className={s.input}
                placeholder="Street & apartments or house"
              />
            </div>
          </div>
        </div>
        <div className={s.paymentContainer}>
          <div className={s.paymentInfo}>
            <p className={s.headerText}>Payment</p>
            <p className={s.priceText}>
              End price — <span className={s.paymentPrice}>35 200₴</span>
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
        <div className={s.buttonContainer}>
          <Button type="black" title="ORDER NOW" />
        </div>
      </div>
    </div>
  );
};

export default Order;
