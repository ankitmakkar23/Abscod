import React from "react";
import "../../../common/utility.css";
import Banner from "./banner/Banner";
import Card from "./card/Card";
import Vision from "./our-vision/Vision";

const Agency = () => {
  return (
    <div className="main-agency">
      <Banner />
      <Card/>
      <Vision/>
    </div>
  );
};

export default Agency;
