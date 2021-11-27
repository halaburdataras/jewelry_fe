import React from "react";
import Cart from "../Cart";
import Order from "../Order";

import s from "./style.module.css";

const Modal = ({ open, setOpen }) => {
  const getStyle = () => {
    switch (open) {
      case "half":
        return s.half;
      case "full":
        return s.full;
      default:
        break;
    }
  };
  return (
    <div className={`${s.modal} ${getStyle()}`}>
      {open === "full" ? (
        <Order setOpen={setOpen} />
      ) : (
        <Cart setOpen={setOpen} />
      )}
    </div>
  );
};

export default Modal;
