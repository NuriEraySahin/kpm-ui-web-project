import React, { useState } from "react";

import Screen from "../../../Screen";

const menu__button__selected = require("../../../../../assets/img/home-page-box@1x.png");
const menu__button__not__selected = require("../../../../../assets/img/network-box@1x.png");

const menu__home__text = require("../../../../../assets/img/home@1x.png");
const menu__move__text = require("../../../../../assets/img/move@1x.png");
const menu__baby_step__text = require("../../../../../assets/img/baby-step-4@1x.png");
const Controls = () => {

  const [state, setState] = useState("home")

  return (
    <>
      <div onClick={() => setState("home")}>
        <img alt="" className="selector-4" src={state === "home" ? menu__button__selected : menu__button__not__selected} />
        <img alt="" className="home" src={menu__home__text} />
      </div>
      <div onClick={() => setState("move")}>
        <img alt="" className="network-box-12"  src={state === "move" ? menu__button__selected : menu__button__not__selected} />
        <img alt="" className="move" src={menu__move__text} />
      </div>
      <div onClick={() => setState("babyStep")}>
        <img alt="" className="system-box-6"  src={state === "babyStep" ? menu__button__selected : menu__button__not__selected} />
        <img alt="" className="baby-step-4" src={menu__baby_step__text} />
      </div>
      <Screen tab={state} />
    </>
  );
};

export default Controls;

{
  /* <Link to="/56">
  </Link>
<Link to="/59">
</Link>
 <Link to="/56">
</Link>
 <Link to="/58">
</Link> */
}
