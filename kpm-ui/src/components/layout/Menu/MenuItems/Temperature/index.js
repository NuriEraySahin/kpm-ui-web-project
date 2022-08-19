import React from "react";

import Screen from "../../../Screen";

const menu__button__wide__selected = require("../../../../../assets/img/selector-45@1x.png");
const menu__hotend__text = require("../../../../../assets/img/hotend-1@1x.png");
const Temperature = () => {
  return (
    <>
      <div>
        <img alt="" className="selector-42" src={menu__button__wide__selected} />
        <img alt="" className="hotend-7" src={menu__hotend__text} />
      </div>
      <Screen tab="hotend" />
    </>
  );
};

export default Temperature;
