import React from "react";
import { Link } from "react-router-dom";

const sidebar__home__icon = require("../../../../../assets/img/home-yeni-1-1@2x.svg");
const sidebar__control__icon = require("../../../../../assets/img/control-@2x.svg");
const sidebar__setting__icon = require("../../../../../assets/img/actions@2x.svg");

const Controls = () => {
  return (
    <>
      <Link to="/home">
        <div className="home-page-19">
          <img alt="" className="home_-yeni-2" src={sidebar__home__icon} />
        </div>
      </Link>
      <img alt="" className="control__page" src={sidebar__control__icon} />
      <Link to="/settings">
        <img alt="" className="actions" src={sidebar__setting__icon} />
      </Link>
    </>
  );
};

export default Controls;

//
//
//
//
//
//
//
//
//
//   <Link to="/62">
//
//   </Link>
//   <Link to="/62">
//
//   </Link>
//   <Link to="/20">
//
//
//
//   </Link>
//   <Link to="/23">
//
//
//
//
//
//
//   </Link>
