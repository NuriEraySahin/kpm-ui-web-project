import React, { useState } from "react";

import Screen from "../../../Screen";

const menu__printer__button__selected = require("../../../../../assets/img/selector-17@1x.png");
const menu__printer__button__not__selected = require("../../../../../assets/img/network-box-4@1x.png");
const menu__printer__information__text = require("../../../../../assets/img/information-5@1x.png");
const menu__printer__baby_step__text = require("../../../../../assets/img/baby-step@1x.png");
const menu__printer__temperature__text = require("../../../../../assets/img/temperature@1x.png");
const menu__printer__system__text = require("../../../../../assets/img/system-4@1x.png");

const Home = () => {
  const [state, setState] = useState("information");

  return (
    <>
      <div onClick={() => setState("information")}>
        <img
          alt=""
          className="selector-14"
          src={
            state === "information"
              ? menu__printer__button__selected
              : menu__printer__button__not__selected
          }
        />
        <img class="information-8" src={menu__printer__information__text}></img>
      </div>
      <div onClick={() => setState("babyStepPrinter")}>
        <img
          alt=""
          className="network-box-27"
          src={
            state === "babyStepPrinter"
              ? menu__printer__button__selected
              : menu__printer__button__not__selected
          }
        />
        <img
          alt=""
          className="baby-step-17"
          src={menu__printer__baby_step__text}
        />
      </div>
      <div onClick={() => setState("hotendPrinter")}>
        <img
          alt=""
          className="network-box-28"
          src={
            state === "hotendPrinter"
              ? menu__printer__button__selected
              : menu__printer__button__not__selected
          }
        />
        <img
          alt=""
          className="temperature-8"
          src={menu__printer__temperature__text}
        />
      </div>
      <div onClick={() => setState("systemPrinter")}>
        <img
          alt=""
          className="network-box-29"
          src={
            state === "systemPrinter"
              ? menu__printer__button__selected
              : menu__printer__button__not__selected
          }
        />
        <img alt="" className="system-34" src={menu__printer__system__text} />
      </div>
      <Screen tab={state} />
    </>
  );
};

export default Home;
