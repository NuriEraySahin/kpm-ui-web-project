import React, { useState } from "react";

const user__icon = require("../../../assets/img/user-1-1@2x.svg");
const hotend__icon = require("../../../assets/img/group-3@2x.svg");
const left__arrow__icon = require("../../../assets/img/vector@2x.svg");
const right__arrow__icon = require("../../../assets/img/layer-1@2x.svg");

const HomePage = () => {
  const [heat, setHeat] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <img className="user__icon" src={user__icon} />

      <div className="lang__button__text montserrat-normal-white-17px">EN</div>
      <div className="lang__button__box border-2px-silver-chalice"></div>

      <img className="hotend__icon" src={hotend__icon} />
      <div className="hotend__text montserrat-normal-white-17px">Hotend</div>

      <div className="target-heat__text montserrat-normal-white-17px">
        °C/ {heat}°C
      </div>

      <div className="home-page__stepper__container">
        <div className="home-page__stepper__bg border-2px-silver-chalice"></div>

        <div
          className={`home-page__stepper__left__text${
            step === 1 ? "__selected" : ""
          } montserrat-normal-white`}
          onClick={() => setStep(1)}
        >
          1°C
        </div>
        <div
          className={`home-page__stepper__left${
            step === 1 ? "__selected" : ""
          } border-1px-silver-chalice`}
          onClick={() => setStep(1)}
        ></div>

        <div
          className={`home-page__stepper__middle__text${
            step === 5 ? "__selected" : ""
          } montserrat-normal-white`}
          onClick={() => setStep(5)}
        >
          5°C
        </div>
        <div
          className={`home-page__stepper__middle${
            step === 5 ? "__selected" : ""
          } border-1px-silver-chalice`}
          onClick={() => setStep(5)}
        ></div>

        <div
          className={`home-page__stepper__right__text${
            step === 25 ? "__selected" : ""
          } montserrat-normal-white`}
          onClick={() => setStep(25)}
        >
          25°C
        </div>
        <div
          className={`home-page__stepper__right${
            step === 25 ? "__selected" : ""
          } border-1px-silver-chalice`}
          onClick={() => setStep(25)}
        ></div>
      </div>

      <div
        className="button__left__box"
        onClick={() => setHeat(heat > 0 && heat - step > 0 ? heat - step : 0)}
      >
        <div className="button__left__box__content border-2px-silver-chalice"></div>
      </div>
      <img
        className="left__arrow__icon"
        onClick={() => setHeat(heat > 0 && heat - step > 0 ? heat - step : 0)}
        src={left__arrow__icon}
      />

      <div
        className="button__right__box"
        onClick={() =>
          setHeat(heat < 275 && heat + step < 275 ? heat + step : 275)
        }
      >
        <div className="button__right__box__content border-2px-silver-chalice"></div>
      </div>
      <img
        className="right__arrow__icon"
        src={right__arrow__icon}
        onClick={() =>
          setHeat(heat < 275 && heat + step < 275 ? heat + step : 275)
        }
      />
    </>
  );
};

export default HomePage;
