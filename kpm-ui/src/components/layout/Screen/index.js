import React from "react";

import HomePage from "../../../views/Home/HomePage";
import Network from "../../../views/Home/Network";
import System from "../../../views/Home/System";
import Hotend from "../../../views/Temperature/Hotend";
import Home from "../../../views/Controls/Home";
import Move from "../../../views/Controls/Move";
import BabyStep from "../../../views/Controls/BabyStep";
import Filament from "../../../views/Settings/Filament";
import Fan from "../../../views/Settings/Fan";
import Motor from "../../../views/Settings/Motor";
import SDCard from "../../../views/Files/SDCard";
import USB from "../../../views/Files/USB";
import OctoPrint from "../../../views/Files/OctoPrint";
import Information from "../../../views/Printer/Information";
import BabyStepPrinter from "../../../views/Printer/BabyStep";
import HotendPrinter from "../../../views/Printer/Hotend";
import SystemPrinter from "../../../views/Printer/System";

const screen__bg = require("../../../assets/img/5pagebackground-2@1x.png");

const screens = {
  homePage: <HomePage />,
  network: <Network />,
  system: <System />,
  hotend: <Hotend />,
  home: <Home />,
  move: <Move />,
  babyStep: <BabyStep />,
  filament: <Filament />,
  fan: <Fan />,
  motor: <Motor />,
  sdCard: <SDCard />,
  usb: <USB />,
  octoPrint: <OctoPrint />,
  information: <Information />,
  babyStepPrinter: <BabyStepPrinter />,
  hotendPrinter: <HotendPrinter />,
  systemPrinter: <SystemPrinter />,
};

const Screen = ({ tab }) => {
  return (
    <>
      <img alt="" className="x5-page-background-2-1" src={screen__bg} />
      {screens[tab]}
    </>
  );
};

export default Screen;
