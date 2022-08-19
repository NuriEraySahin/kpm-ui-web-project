import React, { useState } from "react";

const test_img = require("../../../assets/img/group-3-6@2x.svg");
const test_img_1 = require("../../../assets/img/layer-1-9@2x.svg");
const test_img_2 = require("../../../assets/img/layer-2-35@2x.svg");
const test_img_3 = require("../../../assets/img/group-3-6@2x.svg");

const Hotend = () => {
  const [heat, setHeat] = useState(25);
  const [step, setStep] = useState(1);

  return (
    <>
      <img class="group-3-6" src={test_img}></img>

      <div
        className="rectangle-18-13 border-2px-silver-chalice"
        onClick={() =>
          setHeat(heat < 275 && heat + step < 275 ? heat + step : 275)
        }
      ></div>
      <img
        className="layer-2-33"
        src={test_img_2}
        onClick={() =>
          setHeat(heat < 275 && heat + step < 275 ? heat + step : 275)
        }
      />

      <div
        className="rectangle-17-13 border-2px-silver-chalice"
        onClick={() => setHeat(heat > 0 && heat - step > 0 ? heat - step : 0)}
      ></div>
      <img
        className="layer-1-19"
        src={test_img_1}
        onClick={() => setHeat(heat > 0 && heat - step > 0 ? heat - step : 0)}
      />

      <div className="x138-c montserrat-normal-white-17px">{heat} °C</div>

      <div className="rectangle-83-9 border-1px-silver-chalice"></div>
      <img className="group-3-6" src={test_img_3} />

      <div className="hotend__stepper__container border-2px-silver-chalice"></div>
      <div
        onClick={() => setStep(1)}
        className={`hotend__stepper__left${
          step === 1 ? "__selected" : ""
        } border-1px-silver-chalice`}
      ></div>
      <div
        onClick={() => setStep(5)}
        className={`hotend__stepper__middle${
          step === 5 ? "__selected" : ""
        } border-1px-silver-chalice`}
      ></div>
      <div
        onClick={() => setStep(25)}
        className={`hotend__stepper__right${
          step === 25 ? "__selected" : ""
        } border-1px-silver-chalice`}
      ></div>

      <div className="hotend__stepper__text__container">
        <span
          onClick={() => setStep(1)}
          className={`hotend__stepper__left__text${
            step === 1 ? "__selected" : ""
          } montserrat-normal-white`}
        >
          1°C
        </span>
        <span
          onClick={() => setStep(5)}
          className={`hotend__stepper__middle__text${
            step === 5 ? "__selected" : ""
          } montserrat-normal-white`}
        >
          5°C
        </span>
        <span
          onClick={() => setStep(25)}
          className={`hotend__stepper__right__text${
            step === 25 ? "__selected" : ""
          } montserrat-normal-white`}
        >
          25°C
        </span>
      </div>

      <div className="rectangle-19-16">
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
            height={heat*(239/275)}
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
    </>
  );
};

export default Hotend;
