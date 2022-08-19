import React, { useState } from "react";
import { Link } from "react-router-dom";

const img_4 = require("../../../assets/img/tick-2@2x.svg");
const img_3 = require("../../../assets/img/cross-4@2x.svg");
const pause__button__icon = require("../../../assets/img/layer-3-1@2x.svg");
const resume__button__icon = require("../../../assets/img/resume-1-2@2x.svg");
const sidebar__file__icon = require("../../../assets/img/file-yeni-2@2x.svg");
const clock__icon = require("../../../assets/img/19-time-3@2x.svg");

const Information = () => {
  const [dialog, setDialog] = useState(false);
  const [state, changeState] = useState(false);

  return (
    <>
      <div className="x45m-3 montserrat-normal-white-17px">100</div>
      <div className="x1h-05m-3 montserrat-normal-white-17px">0</div>
      <img className="file_-yeni-2" src={sidebar__file__icon} />
      <div className="rectangle-45-1 border-1px-silver-chalice"></div>
      <div className="information__progress__bar">
        <svg
          width="300"
          height="13"
          viewBox="0 0 298 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-0.5"
            y="-0.5"
            width="10"
            height="100"
            rx="5.5"
            transform="matrix(-4.37114e-08 1 1 4.37114e-08 1 1)"
            fill="url(#paint0_linear_557_7864)"
            fillOpacity="0.6"
            stroke="#AEAEAE"
          />
          <defs>
            <linearGradient
              id="paint0_linear_557_7864"
              x1="5"
              y1="0"
              x2="5"
              y2="297"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#84A2DC" />
              <stop offset="1" stopColor="#2064C2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="time-1 montserrat-normal-white-17px">Time</div>
      <div className="left-1 montserrat-normal-white-17px">Left</div>
      <div className="rectangle-16-5 border-2px-silver-chalice"></div>
      <div className="kpm-milgem-model_1002-3 montserrat-normal-white-17px"></div>

      <img className="layer-2-16" src={clock__icon} />
      <img className="x19_-time-3" src={clock__icon} />
      <div className="cancel-3 montserrat-normal-white-17px">Cancel</div>

      <div className="percent-3 montserrat-normal-white-17px">
        {/* {completion}% */} 0%
      </div>

      {/* onClick={pausePrinter} */}
      <div onClick={() => changeState(!state)}>
        <div className="pause-3 montserrat-normal-white-17px">
          {state ? "Pause" : "Resume"}
        </div>
        <img
          className="layer-3-1"
          src={state ? pause__button__icon : resume__button__icon}
        />
        <div
          className="rectangle-19-3 border-2px-silver-chalice"
          // onClick={pausePrinter}
        ></div>
      </div>

      <div onClick={() => setDialog(true)}>
        <img className="cross-9" src={img_3} />
        <div className="rectangle-44-3 border-2px-silver-chalice"></div>
      </div>

      <div style={{ display: !dialog ? "none" : "block" }}>
        <p class="printer__warn__dialog__text montserrat-normal-white-15px">
          Do you wish to cancel printing{" "}
        </p>
        <div class="printer__warn__dialog__bg"></div>
        <img
          onClick={() => setDialog(false)}
          class="printer__dialog__button__cancel"
          src={img_3}
        ></img>
        <Link to="/files">
          <img class="printer__dialog__button__confirm" src={img_4}></img>
        </Link>
      </div>
    </>
  );
};

export default Information;
