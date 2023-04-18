import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import Navbar from "../navbar";
import "./style.css";
import Navtop from "../Navtop";

const Header = () => {
  const [check, setCheck] = useState(false);
  return (
    <header className="header ">
      <Navtop />
      <div className="header-container">
        <div className="nav-list justify-between">
          <div>
            <Link to={"/"}>
              <img
                width="80"
                height="50"
                src={require("../../acssets/logo/logo.png")}
                className="attachment-50x50 size-50x50 wp-post-image"
                alt=""
                decoding="async"
                loading="lazy"
              />
            </Link>
          </div>
          <Navbar />
          <div className="nav-icon">
            <Link className="nav-shoping mr-3"  to={"/Cart"}>
              <BsCart2 className="pd-[14px]" />
              <div className="nav-number">
                <p>0</p>
              </div>
            </Link>
            <Link to={"/"}>
              <AiOutlineMenu/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
