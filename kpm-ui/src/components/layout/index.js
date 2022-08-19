import React, { useState, useEffect } from "react";

import { getIpAddress } from "../../../services/WifiService";

import SideBar from "./SideBar";
import Menu from "./Menu";
import Footer from "./Footer";

const arkaplan_1__1x_png = require("../../assets/img/arkaplan-1@1x.png");

const Layout = ({ path }) => {
  const [ip, setIP] = useState("");
  useEffect(() => {
    getIpAddress().then((response) => {
      setIP(response.wlan0);

      // setWifiArray()
    });
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="overlap-group2-1">
        <img alt="" className="arkaplan-1-1" src={arkaplan_1__1x_png} />
        <SideBar ip={ip} path={path} />
        <Menu ip={ip} path={path} />
        <Footer ip={ip} />
      </div>
    </div>
  );
};

export default Layout;
