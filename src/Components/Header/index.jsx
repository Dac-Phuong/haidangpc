import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [active, setActive] = useState(0);
  const [fixed, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  const menu = [
    {
      id: 0,
      name: "Trang Chủ",
    },
    {
      id: 1,
      name: "Thiết Bị Thông Minh",
    },
    {
      id: 2,
      name: "Thiết Bị An Ninh",
    },
    {
      id: 3,
      name: "Thiết Bị Văn Phòng",
    },
    {
      id: 4,
      name: "Giới Thiệu",
    },
  ];

  return (
    <header className="header ">
      <div className={fixed ? "header-main fixed" : "header-main"}>
        <div className="header-container">
          <div className="nav-list justify-between">
            <div>
              <Link to={"/"}>
                <img
                  width="70"
                  src={require("../../image/logo/logo.png")}
                  className="attachment-50x50 size-50x50 wp-post-image"
                  alt=""
                  decoding="async"
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="nav-bar">
              <ul className="nav-item">
                {menu.map((item, index) => {
                  return (
                    <li
                      key={item.id}
                      className="nav-item-list"
                      onClick={() => setActive(index)}
                    >
                      <Link
                        // className="list-menu text-[15px] font-medium"
                        className={`list-menu text-[15px] font-medium ${
                          active == index ? "active" : null
                        }`}
                        to={"/"}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
                {/* <li className="nav-item-list">
                <Link className="list-menu text-[15px] font-medium" to={"/"}>
                  Thiết Bị An Ninh
                </Link>
              </li>
              <li className="nav-item-list">
                <Link className="list-menu text-[15px] font-medium" to={"/"}>
                  Thiết Bị Văn Phòng
                </Link>
              </li>
              <li className="nav-item-list">
                <Link className="list-menu text-[15px] font-medium" to={"/"}>
                  Giới Thiệu Về CTY
                </Link>
              </li> */}
              </ul>
            </div>
            <div className="nav-hotline">
              <a href="tel:+84905927548">Hotline: 0334.262.754</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
