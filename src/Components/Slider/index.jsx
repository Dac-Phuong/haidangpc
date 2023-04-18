import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function Sliders() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  return (
    <div>
      <Slider {...settings} className="w-full">
        <div className="relative">
          <div>
            <img
              src={require("../../acssets/background/background.png")}
              alt=""
              decoding="async"
              loading="lazy"
              width="100%"
            />
          </div>
          <div className="heading items-center pl-[40px] pr-[40px] pt-[40px]">
            <h2 className="font-bold text-3xl text-white">
              New Greneration Ceramic Tile
            </h2>
            <p className="heading-text pt-[20px] text-white ">
              Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
              aptent dapibus metus maecenas consequat. Elementum interdum a
              semper. Netus nullam eros nisi volutpat nibh ex ultricies.
              Pharetra sagittis sit aliquet at. Magna nam platea justo.
            </p>
            <div className="btn">
              <button className=" w-full  h-full text-[10px] font-bold">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      
      </Slider>
    </div>
  );
}
export default Sliders;
