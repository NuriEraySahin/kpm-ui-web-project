import React from "react";
import { Link } from "react-router-dom";

const sidebar__control__icon = require("../../../../../assets/img/control-@2x.svg");
const sidebar__setting__icon = require("../../../../../assets/img/actions@2x.svg");
const sidebar__temperature__icon = require("../../../../../assets/img/temperature@2x.svg");

const Settings = () => {
  return (
    <>
      <Link to="/controls">
        <img alt=""
          className="setting__page__control__icon"
          src={sidebar__control__icon}
        />
      </Link>
      <img alt=""
        className="setting__page__setting__icon"
        src={sidebar__setting__icon}
      />
      <Link to="/temperature">
        <img alt="" className="temperature-9" src={sidebar__temperature__icon} />
      </Link>
    </>
  );
};

export default Settings;

