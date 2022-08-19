import React, { useState } from "react";

import Screen from "../../../Screen";

const menu__button__selected = require("../../../../../assets/img/home-page-box@1x.png");
const menu__button__not__selected = require("../../../../../assets/img/network-box@1x.png");

const Settings = () => {
  const [state, setState] = useState("filament");

  return (
    <div>
      <div onClick={() => setState("filament")}>
        <img alt=""
          className="selector-18"
          src={
            state === "filament"
              ? menu__button__selected
              : menu__button__not__selected
          }
        />
        <div className="filament montserrat-semi-bold-white-17px">Filament</div>
      </div>
      <div onClick={() => setState("fan")}>
        <img alt=""
          className="network-box-31"
          src={
            state === "fan"
              ? menu__button__selected
              : menu__button__not__selected
          }
        />
        <div className="fan montserrat-semi-bold-white-17px">Fan</div>
      </div>
      <div onClick={() => setState("motor")}>
        <img alt=""
          className="system-box-20"
          src={
            state === "motor"
              ? menu__button__selected
              : menu__button__not__selected
          }
        />
        <div className="motor montserrat-semi-bold-white-17px">Motor</div>
      </div>
      <Screen tab={state} />
    </div>
  );
};

export default Settings;

//
//   <Link to={pageFan}>
//
//   </Link>
//   <Link to={pageMotor}>
//
//   </Link>
//
//   <Link to={pageFan}>
//
//   </Link>
//   <Link to={pageMotor}>
//
//   </Link>
