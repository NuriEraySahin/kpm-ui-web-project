import React, { useState } from "react";

import Screen from "../../../Screen";

const menu__button__selected = require("../../../../../assets/img/home-page-box@1x.png");
const menu__button__not__selected = require("../../../../../assets/img/network-box@1x.png");

const menu__home_page__text = require("../../../../../assets/img/home-page@1x.png");
const menu__network__text = require("../../../../../assets/img/network@1x.png");
const menu__system__text = require("../../../../../assets/img/system@1x.png");

const Home = () => {

  const [state, setState] = useState("homePage")

  return (
    <>
      <div onClick={() => setState("homePage")}>
        <img alt="" className="home-page-box-1" src={state === "homePage" ? menu__button__selected : menu__button__not__selected}/>
        <img alt="" className="home-page-1" src={menu__home_page__text} />
      </div>
      <div onClick={() => setState("network")}>
        <img alt="" className="network-box-1" src={state === "network" ? menu__button__selected : menu__button__not__selected}/>
        <img alt="" className="network-1" src={menu__network__text} />
      </div>
      <div onClick={() => setState("system")}>
        <img alt="" className="system-box-1" src={state === "system" ? menu__button__selected : menu__button__not__selected}/>
        <img alt="" className="system-1" src={menu__system__text} />
      </div>
      <Screen tab={state}/>
    </>
  );
};

export default Home;

