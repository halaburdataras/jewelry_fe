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
          <div>
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
            <div className={`${s.radioContainer} ${s.bigRow}`}>
              <input
                type="radio"
                name="payment"
                id="applePay"
                onChange={() => {
                  handleChange("applePay");
                }}
              />
              <label
                for="applePay"
                value="apple"
                className={`${s.radioLabel} ${
                  payment === "applePay" && s.active
                }`}
              >
                <img src={appleLogo} alt="apple pay" />
              </label>
            </div>
            <div className={`${s.radioContainer} ${s.bigRow}`}>
              <input
                type="radio"
                name="payment"
                id="googlePay"
                onChange={() => {
                  handleChange("googlePay");
                }}
              />
              <label
                for="googlePay"
                className={`${s.radioLabel} ${
                  payment === "googlePay" && s.active
                }`}
              >
                <img src={googleLogo} alt="google pay" />
              </label>
            </div>
            <div className={`${s.radioContainer} ${s.bigRow}`}>
              <input
                type="radio"
                name="payment"
                id="fondy"
                onChange={() => {
                  handleChange("fondy");
                }}
              />
              <label
                for="fondy"
                className={`${s.radioLabel} ${payment === "fondy" && s.active}`}
              >
                <img src={fondyLogo} alt="fondy" />
              </label>
            </div>
            <div className={s.radioContainer}>
              <input
                type="radio"
                name="payment"
                id="monoBank"
                onChange={() => {
                  handleChange("monoBank");
                }}
              />
              <label
                for="monoBank"
                className={`${s.radioLabel} ${
                  payment === "monoBank" && s.active
                }`}
              >
                <img src={monoLogo} alt="monobank" />
              </label>
            </div>
            <div className={s.radioContainer}>
              <input
                type="radio"
                name="payment"
                id="privatBank"
                onChange={() => {
                  handleChange("privatBank");
                }}
              />
              <label
                for="privatBank"
                className={`${s.radioLabel} ${
                  payment === "privatBank" && s.active
                }`}
              >
                <img src={privatLogo} alt="privatbank" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.buttonContainer}>
          <Button type="black" title="COMPLETE ORDER" />
        </div>
      </div>
    </div>
  );
};

export default Order;
