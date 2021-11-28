import React from "react";

import s from "./style.module.css";

const PaymentItem = ({ payment, handleChange, name, big, img }) => {
  return (
    <div className={`${s.radioContainer} ${big && s.bigRow}`}>
      <input
        type="radio"
        name="payment"
        id={name}
        onChange={() => {
          handleChange(name);
        }}
      />
      <label
        for={name}
        className={`${s.radioLabel} ${payment === name && s.active}`}
      >
        <img src={img} alt={name} />
      </label>
    </div>
  );
};

export default PaymentItem;
