import React from "react";

const menu__1 = require("../../../assets/img/home@1x.png");
const menu__2 = require("../../../assets/img/layer-2-6@2x.svg");
const menu__3 = require("../../../assets/img/home-z-2@2x.svg");
const menu__4 = require("../../../assets/img/home-x@2x.svg");
const menu__5 = require("../../../assets/img/home-y-1@2x.svg");

const Home = () => {
  return (
    <>
      {" "}
      <div className="rectangle-4-3 border-2px-silver-chalice"></div>
      <div className="rectangle-5-5 border-2px-silver-chalice"></div>
      <div className="rectangle-6-4 border-2px-silver-chalice"></div>
      <div className="rectangle-8-6 border-2px-silver-chalice"></div>
      <div className="home-all montserrat-normal-white-17px">Home All</div>
      <div className="home-x montserrat-normal-white-17px">Home X</div>
      <div className="home-z montserrat-normal-white-17px">Home Z</div>
      <div className="home-y montserrat-normal-white-17px">Home Y</div>
      <img className="home-z_2" src={menu__3} />
      <img className="layer-2-6" src={menu__2} />
      <img className="home-x-1" src={menu__4} />
      <img className="home-y_1" src={menu__5} />
      <img className="home" src={menu__1} />
    </>
  );
};

export default Home;
