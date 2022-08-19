import React from "react";

import SideBar from "./SideBar";
import Menu from "./Menu";
import Footer from "./Footer";

const arkaplan_1__1x_png = require("../../assets/img/arkaplan-1@1x.png");

const Layout = ({ path }) => {
  return (
    <div className="container-center-horizontal">
      <div className="overlap-group2-1">
        <img alt="" className="arkaplan-1-1" src={arkaplan_1__1x_png} />
        <SideBar path={path} />
        <Menu path={path} />        
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
