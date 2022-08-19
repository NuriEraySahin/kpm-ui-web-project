import React, { useState } from "react";

const img__Fan1 = require("../../../assets/img/rectangle-19-9@2x.svg");
const img__Fan2 = require("../../../assets/img/layer-1-9@2x.svg");
const img__Fan3 = require("../../../assets/img/layer-2-24@2x.svg");
const img__Fan4 = require("../../../assets/img/fan-beyaz-1-9@2x.svg");

const Fan = () => {
  const [fanStatus, setFanStatus] = useState(true);
  const [fanPower, setFanPower] = useState(50);

  return (
    <>
      <img className="fan-beyaz-1-9" src={img__Fan4} />
      <div className="fan-power-9 montserrat-normal-white-17px">Fan Power</div>

      <div onClick={() => setFanStatus(!fanStatus)}>
        <div className="fan__button__power__bg border-2px-silver-chalice"></div>
        <div
          className={`fan__button__power__${
            fanStatus ? "on" : "off"
          } border-1px-mercury`}
        ></div>
        <div className="fan__button__power__on__text montserrat-normal-white-17px">
          ON
        </div>
        <div className="fan__button__power__off__text montserrat-normal-white-17px">
          OFF
        </div>
      </div>

      <div className={!fanStatus ? "fan__percent__disable" : ""}>
        <div
          onClick={() =>
            setFanPower(fanPower !== 100 ? fanPower + 10 : fanPower)
          }
        >
          <div className="rectangle-18-11 border-2px-silver-chalice"></div>
          <img className="layer-2-31" src={img__Fan3} />
        </div>

        <div className="percent-14 montserrat-normal-white-17px">
          {fanPower} %
        </div>

        <div
          onClick={() =>
            setFanPower(fanPower !== 0 ? fanPower - 10 : fanPower)
          }
        >
          <div className="rectangle-17-11 border-2px-silver-chalice"></div>
          <img className="layer-1-17" src={img__Fan2} />
        </div>

        <div className="rectangle-11-11 border-1px-silver-chalice"></div>
        <div className="rectangle-19-14" src={img__Fan1}>
          <svg
            width="12"
            height="239"
            viewBox="0 0 12 239"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-0.5"
              y="0.5"
              width="11"
              height={(fanPower * 239) / 100}
              rx="5.5"
              transform="matrix(1 0 0 -1 1 239)"
              fill="url(#paint0_linear_557_6168)"
              fillOpacity="0.6"
              stroke="#AEAEAE"
            />
            <defs>
              <linearGradient
                id="paint0_linear_557_6168"
                x1="5"
                y1="0"
                x2="5"
                y2="237"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#84A2DC" />
                <stop offset="1" stopColor="#2164C2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Fan;
