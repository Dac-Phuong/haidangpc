import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FiUsers, FiPhone, FiGlobe } from "react-icons/fi";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-[350px] bg-[#052A6E]">
      <div className="footer-container">
        <div className="footer-main ">
          <h2>DAHAHI - GIẢI PHÁP NHẬN DIỆN KHUÔN MẶT AI</h2>
          <ul className="footer-item">
            <li className="footer-list-item">
              <FiUsers className="mr-4" />
              <p>Đơn vị chủ quản: CÔNG TY TNHH HÔNG DƯƠNG</p>
            </li>
            <li className="footer-list-item">
              <AiOutlineHome className="mr-4" />
              <p>Address: Chùa Hang , Đồng Hỷ ,Thành phố Thái Nguyên</p>
            </li>
            <li className="footer-list-item">
              <FiPhone className="mr-4" />
              <p>Hotline: 033.426.2754</p>
            </li>
            <li className="footer-list-item">
              <AiOutlineMail className="mr-4" />
              <p>Email: haidangpc@gmail.com</p>
            </li>
            <li className="footer-list-item">
              <FiGlobe className="mr-4" />
              <p>Website: https://www.haidangpc.vn/</p>
            </li>
          </ul>
        </div>
        <div className="footer-line">
          <div className="footer-line-container"> </div>
          <span>©2023 Allrights reserved echeckin.vn</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
