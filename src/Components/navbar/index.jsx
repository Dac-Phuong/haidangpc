import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "HOME", link: "/" },
  { name: "BLOG", link: "/Blog" },
  { name: "SHOP", link: "/Shop" },
  { name: "ABOUT", link: "/About" },
  { name: "CONTACT", link: "/Contact" },
];

function Navbar() {
  const loc = useLocation();
  return (
    <div>
      <ul className=" text-center screen-991:block">
        {menuItems.map((item) => (
          <li className="inline-block" key={item.name}>
            <Link
              className={` mr-[20px] block font-medium text-black-#303030 text-xs uppercase font-poppins tracking-[1.6px]   ${
                loc.pathname === item.link ? "slash-left" : ""
              }`}
              to={item.link}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
