import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromotions } from "../../redux/promotion/promotion.actions";
import { promotionSelector } from "../../redux/selectors/promotion.selectors";
import Slide from "./Slide";

import s from "./style.module.css";

const Slider = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(promotionSelector);

  useEffect(() => {
    dispatch(getPromotions());
  }, [dispatch]);

  console.log(items);

  return (
    <section className={s.slider}>
      <div className={s.slideContainer}>
        <Slide />
      </div>
    </section>
  );
};

export default Slider;
