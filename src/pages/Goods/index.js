import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useParams } from "react-router";
import SaphireIcon from "../../component/SaphireIcon";
import { getRing } from "../../redux/rings/rings.actions";
import { ringSelector } from "../../redux/selectors/ring.selectors";

import img1 from "../../assets/img/goods1.png";
import img2 from "../../assets/img/goods2.png";
import circle from "../../assets/img/goods3.png";

import s from "./style.module.css";
import Button from "../../component/Button";
import { addToCart } from "../../redux/cart/cart.actions";

gsap.registerPlugin(ScrollTrigger);

const Goods = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { ring, loading } = useSelector(ringSelector);

  const handleAddToCart = () => {
    dispatch(addToCart(ring));
  };

  useEffect(() => {
    dispatch(getRing(id));
  }, [dispatch, id]);

  useEffect(() => {
    gsap
      .timeline({
        defaults: { duration: 0.1 },
        scrollTrigger: {
          trigger: `.${s.photo5}`,
          start: "bottom 80%",
          end: "+=10",
          scrub: true,
        },
      })
      .to(`.${s.header}`, { opacity: 0 }, 0)
      .to(`.${s.bottom}`, { opacity: 1 }, 0);
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.goods}>
      <div className={s.header}>
        <div className={s.info}>
          <p>{ring?.price} UAH</p>
          <p>{ring?.name}</p>
          <p>{ring?.description}</p>
        </div>
        <div className={s.btnContainer}>
          <Button type="info" title="Add to cart" action={handleAddToCart} />
        </div>
      </div>
      <div className={s.photos}>
        <div className={s.photo1}>
          <img src={img1} alt="1" />
          <SaphireIcon />
        </div>
        <div className={s.photo2}>
          <img src={img2} alt="2" />
          <SaphireIcon />
        </div>
        <div className={s.photo3}>
          <img src={img1} alt="3" />
          <SaphireIcon />
        </div>
        <div className={s.photo4}>
          <img src={img2} alt="4" />
          <img src={img2} alt="4" />
        </div>
        <div className={s.photo5}>
          <img src={circle} alt="circle" />
          <SaphireIcon />
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.info}>
          <p>{ring?.price} UAH</p>
          <p>{ring?.name}</p>
          <p>{ring?.description}</p>
        </div>
        <div className={s.btnContainer}>
          <Button type="info" title="Add to cart" action={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default Goods;
