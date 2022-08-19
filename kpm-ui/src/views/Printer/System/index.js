import React, { useState } from "react";

const octo_print__logo = require("../../../assets/img/octo-logo-1@2x.png");
const kpm__logo__white = require("../../../assets/img/kpm-screen-logo-beyaz-1@2x.png");
const img_1 = require("../../../assets/img/15-shutdown-1@2x.svg");
const img_2 = require("../../../assets/img/16-reboot-1@2x.svg");
const img_3 = require("../../../assets/img/cross-4@2x.svg");
const img_4 = require("../../../assets/img/tick-2@2x.svg");

const System = () => {
  const [active, setActive] = useState({
    restart: false,
    shutdown: false,
  });
  const Restart = () => {
    return (
      <>
        <div className="rectangle-8-5"></div>
        <div className="do-you-wish-to-restart-the-system montserrat-normal-white-17px">
          Do you wish to restart the system?
        </div>
        <img
          className="cross-4"
          src={img_3}
          onClick={() =>
            setActive({
              ...active,
              restart: false,
            })
          }
        />
        <img className="tick-2" src={img_4} />
      </>
    );
  };

  const ShutDown = () => {
    return (
      <>
        <div className="rectangle-8-4"></div>
        <div className="do-you-wish-to-shutdown-the-system montserrat-normal-white-17px">
          Do you wish to shutdown the system?
        </div>
        <img
          className="cross-3"
          src={img_3}
          onClick={() =>
            setActive({
              ...active,
              shutdown: false,
            })
          }
        />
        <img className="tick-1" src={img_4} />
      </>
    );
  };

  return (
    <div className="system__container">
      <img className="kpm-screen-logo_beyaz-1" src={kpm__logo__white} />
      <img className="octo-logo-1" src={octo_print__logo} />
      <div className="octo-print-151 montserrat-normal-white-9px">
        OctoPrint
        <br />
        1.5.1
      </div>
      <div className="system-information-m montserrat-normal-white-17px">
        System Information
        <br />
        <br />
        <br />
        Current window size: 800x480
      </div>

      <div
        className="rectangle-6-1 border-2px-silver-chalice"
        onClick={() =>
          setActive({
            ...active,
            restart: true,
          })
        }
      ></div>
      <div
        className="restart-sytem montserrat-normal-white-17px"
        onClick={() =>
          setActive({
            ...active,
            restart: true,
          })
        }
      >
        Restart System
      </div>
      <img
        className="x16_-reboot-1"
        src={img_2}
        onClick={() =>
          setActive({
            ...active,
            restart: true,
          })
        }
      />
      <div
        className="rectangle-7-2 border-2px-silver-chalice"
        onClick={() =>
          setActive({
            ...active,
            shutdown: true,
          })
        }
      ></div>
      <div
        className="shutdown-sytem montserrat-normal-white-17px"
        onClick={() =>
          setActive({
            ...active,
            shutdown: true,
          })
        }
      >
        Shutdown System
      </div>
      <img
        className="x15_-shutdown-1"
        src={img_1}
        onClick={() =>
          setActive({
            ...active,
            shutdown: true,
          })
        }
      />
      {active.restart && <Restart />}
      {active.shutdown && <ShutDown />}
    </div>
  );
};

export default System;
