import React from "react";
import { Link } from "react-router-dom";

import Home from "./Home";
import Controls from "./Controls";
import Settings from "./Settings";
import Temperature from "./Temperature";
import Files from "./Files";
import Printer from "./Printer";

const sidebar__bg = require("../../../../assets/img/sidebar-1@2x.svg");
const sidebar__selected = require("../../../../assets/img/dark-selection@2x.svg");
const sidebar__arrow__up__icon = require("../../../../assets/img/-st-ok-1@2x.svg");
const sidebar__arrow__down__icon = require("../../../../assets/img/alt-ok@2x.svg");

const pathObject = {
  home: {
    up: "/files",
    down: "/controls",
  },
  controls: {
    up: "/home",
    down: "/settings",
  },
  files: {
    up: "/temperature",
    down: "/home",
  },
  settings: {
    up: "/controls",
    down: "/temperature",
  },
  temperature: {
    up: "/settings",
    down: "/files",
  },
  printer: {
    up: "/printer",
    down: "/printer",
  },
};

const SideBarItems = ({ path }) => {
  return (
    <>
      <img alt="" className="sidebar-1" src={sidebar__bg} />
      {path !== "printer" && (
        <Link to={pathObject[path].up}>
          <img alt="" className="st-ok-1" src={sidebar__arrow__up__icon} />
        </Link>
      )}

      <img alt="" className="dark-selection-1" src={sidebar__selected} />
      {path === "files" ? (
        <Files />
      ) : path === "controls" ? (
        <Controls />
      ) : path === "settings" ? (
        <Settings />
      ) : path === "temperature" ? (
        <Temperature />
      ) : path === "printer" ? (
        <Printer />
      ) : (
        <Home />
      )}

      {path !== "printer" && <Link to={pathObject[path].down}>
        <img alt="" className="alt-ok-1" src={sidebar__arrow__down__icon} />
      </Link>}
    </>
  );
};

export default SideBarItems;
