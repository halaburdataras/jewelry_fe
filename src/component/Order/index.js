import React from "react";

import backBtnSvg from "../../assets/svg/backBtn.svg";
import Button from "../Button";

import s from "./style.module.css";

const Order = ({ setOpen }) => {
  const handleBackClick = () => {
    setOpen("half");
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
          <div>Items HERE!</div>
        </div>
        <div className={s.deliveryContainer}>
          <div className={s.deliveryInfo}>
            <p className={s.headerText}>Delivery information</p>
          </div>
          <div>Buyer info HERE!</div>
        </div>
        <div className={s.paymentContainer}>
          <div className={s.paymentInfo}>
            <p className={s.headerText}>Payment</p>
            <p className={s.priceText}>
              End price — <span className={s.paymentPrice}>35 200₴</span>
            </p>
          </div>
          <div>Payment info HERE!</div>
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
