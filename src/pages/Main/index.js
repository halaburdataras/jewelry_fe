import React from "react";
import Collection from "../../component/Collection";
import MainCatalog from "../../component/MainCatalog";
import Slider from "../../component/Slider";

const Main = () => {
  return (
    <div>
      <Slider />
      <MainCatalog />
      <Collection />
    </div>
  );
};

export default Main;
