import React, { useState, useRef } from "react";
import Sliders from "../../Components/Slider";
import Smartdevice from "./../Smartdevice/index.jsx";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <div>
        <Sliders />
        <div className="main">
          <Smartdevice />
        </div>
      </div>
    </div>
  );
};
export default Home;
