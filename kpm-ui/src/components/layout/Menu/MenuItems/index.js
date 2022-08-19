import React from "react";

import Home from "./Home";
import Controls from "./Controls";
import Settings from "./Settings";
import Temperature from "./Temperature";
import Files from "./Files";
import Printer from "./Printer";

const MenuItems = ({ path }) => {
  return (
    <>
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
    </>
  );
};

export default MenuItems;
