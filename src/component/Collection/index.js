import React from "react";
import { NavLink } from "react-router-dom";

import collectionImg from "../../assets/img/collectionRing.png";
import SaphireIcon from "../SaphireIcon";

import s from "./style.module.css";

const Collection = () => {
  return (
    <section className={s.collection}>
      <div className={s.container}>
        <div className={s.textContainer}>
          <h3 className={s.header}>New «Autumn 2021» collection</h3>
          <div className={s.descriptionContainer}>
            <p>Wedding ring “Lake’s eye”</p>
            <p>
              A beautiful wedding ring made of the best silver alloy.
              Sophisticated and legendary, will complement any of your image.
            </p>
            <p>5 400 UAH</p>
            <NavLink className={s.link} to="/goods/61afbd79289d7a1a9a8fe9b4">
              See details
            </NavLink>
          </div>
        </div>
        <img
          className={s.collection_img}
          src={collectionImg}
          alt="autumn collection"
        />
        <SaphireIcon />
      </div>
    </section>
  );
};

export default Collection;
