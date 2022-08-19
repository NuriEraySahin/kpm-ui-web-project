import React, { useState } from "react";

const img__motor1 = require("../../../assets/img/motor-beyaz-1@2x.svg");

const Motor = () => {
  const [motorStatus, setMotorStatus] = useState(true);

  return (
    <>
      <img className="motor-beyaz-1-1" src={img__motor1} />
      <div className="motor-power-1 montserrat-normal-white-17px">
        Motor Power
      </div>
      <div onClick={() => setMotorStatus(!motorStatus)}>
        <div className="motor__button__power__bg border-2px-silver-chalice"></div>
        <div
          className={`motor__button__power__${
            motorStatus ? "on" : "off"
          } border-1px-mercury`}
        ></div>
        <div className="motor__button__power__on__text montserrat-normal-white-17px">
          ON
        </div>
        <div className="motor__button__power__off__text montserrat-normal-white-17px">
          OFF
        </div>
      </div>
    </>
  );
};

export default Motor;
