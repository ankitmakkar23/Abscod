import React from "react";
import "../../../../common/utility.css";
import "./vision.css";

const Vision = () => {
  return (
    <div>
      <div className="fact-bg">
        <div className="main-container">
          <div
            className="flex "
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div className="fact-content ">
              <img src="image/suitcase.png" alt="" />
              <p>89 Clients Served</p>
            </div>
            <div className="fact-content ">
              <img src="image/check-mark.png" alt="" />
              <p>25 Events Organized</p>
            </div>
            <div className="fact-content ">
              <img src="image/voice.png" alt="" />
              <p>43 Public Speeches</p>
            </div>
            <div className="fact-content ">
              <img src="image/heart.png" alt="" />
              <p>+1,200 Coffee Cups</p>
            </div>
          </div>
        </div>
      </div>

      <div className="vision-bg">
        <div className="main-container">
          <h2 className="vision-sub-headline">OUR VISION</h2>
          <h1 className="vision-headline">
            The most respected Internet marketing agency. We want to change the
            way businesses <b> speak </b>, <b> listen</b> and <b>share</b>{" "}
            online.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Vision;
