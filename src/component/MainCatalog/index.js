import React, { useEffect } from "react";
import Card from "../Card";

import s from "./style.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ringSelector } from "../../redux/selectors/ring.selectors";
import { getRings } from "../../redux/rings/rings.actions";

const MainCatalog = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(ringSelector);

  useEffect(() => {
    dispatch(getRings(10));
  }, [dispatch]);

  const allRings = items.map((el) => <Card item={el} />);

  return (
    <section className={s.catalog}>
      <div className={s.header}>
        <h2 className={s.header_title}>Catalog</h2>
        <h3 className={s.header_text}>
          <Link to="catalog">See All</Link>
        </h3>
      </div>
      <div className={s.container}>{allRings}</div>
    </section>
  );
};

export default MainCatalog;
