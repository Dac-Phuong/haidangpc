import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import "./style.css";
function Navtop() {
  return (
    <div className="nav-top">
      <div className="nav-heading">
        <div className="nav-location">
          <CiLocationOn className="mr-[5px]" />
          <h3>Chùa Hang , Đồng Hỷ ,Thành phố Thái Nguyên</h3>
        </div>
        <div className="nav-phone">
          <FiPhoneCall className="mr-[5px] h-4"/>
          <a href="tel:+0334262754"> 0334262754</a>
        </div>
      </div>
    </div>
  );
}
export default Navtop;
