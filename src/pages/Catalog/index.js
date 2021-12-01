import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../component/Card";
import s from "./style.module.css";
import { getRings } from "../../redux/rings/rings.actions";
import { ringSelector } from "../../redux/selectors/ring.selectors";

const Catalog = () => {
  const dispatch = useDispatch();

  const { items, loading } = useSelector(ringSelector);

  console.log(items);

  useEffect(() => {
    dispatch(getRings(0));
  }, [dispatch]);

  const allRings = items.map((el) => <Card item={el} />);

  return (
    <section className={s.catalog}>
      <div className={s.header}>
        <h2 className={s.header_title}>Catalog</h2>
        <div className={s.filterContainer}></div>
      </div>
      <div className={s.container}>{allRings}</div>
    </section>
  );
};

export default Catalog;
