import React, { useState } from "react";

import Screen from "../../../Screen";

const menu__button__selected = require("../../../../../assets/img/home-page-box@1x.png");
const menu__button__not__selected = require("../../../../../assets/img/network-box@1x.png");
const menu__octoprint__text = require("../../../../../assets/img/octoprint-1@1x.png");
const menu__sd_card__text = require("../../../../../assets/img/sd-card-1@1x.png");
const menu__usb__text = require("../../../../../assets/img/usb-1@1x.png");

const Files = () => {

  const [state, setState] = useState("octoPrint")

  return (
    <>
      <div onClick={() => setState("octoPrint")}>
        <img alt="" className="selector-62" src={state === "octoPrint" ? menu__button__selected : menu__button__not__selected} />
        <img alt="" className="octo-print-1" src={menu__octoprint__text} />
      </div>
      <div onClick={() => setState("sdCard")}>
        <img alt="" className="network-box-72" src={state === "sdCard" ? menu__button__selected : menu__button__not__selected}/>
        <img alt="" className="sd-card-1" src={menu__sd_card__text} />
      </div>
      <div onClick={() => setState("usb")}>
        <img alt="" className="system-box-53" src={state === "usb" ? menu__button__selected : menu__button__not__selected}/>
        <img alt="" className="usb-1" src={menu__usb__text} />
      </div>
      <Screen tab={state} />
    </>
  );
};

export default Files;

{
  /* <Link to="/97">
  
  </Link>
  <Link to="/101">
  
  </Link>          
  
  <Link to="/97">
  
  </Link>
  <Link to="/101">
  
  </Link> */
}
