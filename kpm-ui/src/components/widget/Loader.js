import React from "react";

const arkaplan_1__1x_png = require("../../assets/img/arkaplan-1@1x.png");
const arkaplan_2__1x_png = require("../../assets/img/arkaplan-2@1x.png");
const octo_logo_2__2x_png = require("../../assets/img/octo-logo-2@2x.png");
const logo_2__2x_png = require("../../assets/img/logo-2@2x.png");
const octoprint_png = require("../../assets/img/octoprint.gif");

const Loader = () => {
  return (
    <div className="container-center-horizontal">
      <div className="overlap-group2-1">
        <img alt="" className="arkaplan-1-1" src={arkaplan_1__1x_png} />
        <div className="x1 screen" onclick="window.open('2.html', '_self');">
          <div
            className="overlap-group-77"
            style={{ backgroundImage: `url(${arkaplan_2__1x_png})` }}
          >
            <img alt="" className="octo-logo-2" src={octo_logo_2__2x_png} />
            <div className="overlap-group1-23">
              <img
                alt=""
                className="logo_2 animate-enter1"
                src={logo_2__2x_png}
              />
              <img alt="" className="beyaz-gif-son-hal-2" src={octoprint_png} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
