import React, { useState, useRef } from "react";
import Sliders from "../../Components/Slider";
import data from "../../data/data.json";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <div>
        <Sliders />
        <div className="main">
        </div>
      </div>
    </div>
  );
};
export default Home;
