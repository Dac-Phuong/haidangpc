import React from "react";
import { BsDot } from "react-icons/bs";
import product from "../../data/Product.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Link } from "react-router-dom";

function Smartdevice() {
  const data = [
    {
      id: 0,
      name: "Điều khiển và kiểm soát các thiết bị",
      title: "Bảo đảm an toàn cho ngôi nhà của bạn",
    },
    {
      id: 1,
      name: "Điều chỉnh hoạt động của thiết bị",
      title: "Giúp cuộc sống trở nên tiện lợi",
    },
    {
      id: 3,
      name: "Thiết lập hệ thống an ninh cho không gian",
      title: "Tiết kiệm điện, hạn chế lãng phí",
    },
  ];
  const baseUrl =
    "https://commaxvn.vn/wp-content/uploads/2019/12/CIS-PM01-600x398.png";
  const settings = {
    customPaging: function (i) {
      return (
        <div className="image">
          <img className="img" src={`${baseUrl}`} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="main-top">
        <div className="mt-[10px]">
          <h2>Thiết Bị Thông Minh</h2>
          <div className="main-heading-line" />
        </div>
        <div className="main-wrap">
          <div className="main-wrap-left">
            <img alt="" src={require("../../image/product/image-1.jpg")} />
          </div>
          <div className="main-top-right">
            <div>
              <h3>Thiết bị điện thông minh là gì?</h3>
              <div className="right-heading">
                <div>
                  <BsDot className="text-[26px]" />
                </div>
                <p>
                  Thiết bị điện thông minh là các thiết bị điện tử được sản xuất
                  dựa trên trí tuệ nhân tạo kết nối với các thiết bị không dây
                  khác như: 4G, WiFi,...Tạo nên một mạng lưới giúp bạn dễ dàng
                  điều khiển.
                </p>
              </div>
            </div>
            <div>
              <h3>Chức năng của thiết bị điện thông minh</h3>
              <ul className="main-top-item">
                {data.map((item) => {
                  return (
                    <li key={item.id} className="main-top-list">
                      <BsDot className="text-[26px]" />
                      <p>{item.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3>Lợi ích tuyệt vời của thiết bị điện thông minh</h3>
              <ul className="main-top-item">
                {data.map((item) => {
                  return (
                    <li key={item.id} className="main-top-list">
                      <BsDot className="text-[26px]" />
                      <p>{item.title}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full mt-[20px] mb-[30px]">
          <div className="main-heading relative">
            <h2 className="main-heading-col leading-loose">
              Sản phẩm thiết bị thông minh
            </h2>
          </div>
        </div>
        <div className="main-warp w-full ">
          {product.map((item) => {
            return (
              <div key={item.id} className="main-wrap-col">
                <div className=" w-2/4 pl-[20px]">
                  <div className="wrap-colum">
                    <h3 className="wrap-col-name">
                      {item.name}
                    </h3>
                  </div>
                  <p>{item.title1}</p>
                  <p>{item.title2}</p>
                  <p>{item.title3}</p>
                </div>
                <img alt="" src={item.image} />
              </div>
            );
          })}
          {/* <div className="wrap-col-btn">
            <a href="https://chat.zalo.me/">Liên hệ tư vấn</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Smartdevice;
