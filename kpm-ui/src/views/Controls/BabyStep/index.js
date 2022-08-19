import React from "react";

const img__test1 = require("../../../assets/img/layer-2-18@2x.svg");
const img__test2 = require("../../../assets/img/layer-2-18@2x.svg");
const img__test3 = require("../../../assets/img/layer-6@2x.svg");

const BabyStep = () => {
  return (
    <>
      <div
        className="rectangle-7-17 border-2px-silver-chalice"
        // onClick={() => core.babyStep1mm(true)}
      ></div>

      <div
        className="rectangle-8-19 border-2px-silver-chalice"
        // onClick={() => core.babyStep1mm(false)}
      ></div>

      <div
        className="rectangle-15-3 border-2px-silver-chalice"
        // onClick={() => core.babyStep2mm(true)}
      ></div>

      <div
        className="rectangle-16-7 border-2px-silver-chalice"
        // onClick={() => core.babyStep2mm(false)}
      ></div>

      <div className="x001-mm-4 montserrat-normal-white-17px">-0.01 mm</div>
      <div className="x001-mm-5 montserrat-normal-white-17px">+0.01 mm</div>
      <div className="x002-mm-4 montserrat-normal-white-17px">-0.02 mm</div>
      <div className="x002-mm-5 montserrat-normal-white-17px">+0.02 mm</div>
      <div
        className="overlap-group-118"
        style={{ backgroundImage: `url(${img__test3})` }}
        // onClick={() => core.babyStep1mm(true)}
      >
        <div className="z-24 segoeui-bold-white-15px">
          <>
            <br />
            Z-
          </>
        </div>
      </div>
      <div
        className="overlap-group1-31"
        
        // onClick={() => core.babyStep1mm(false)}
      >
        <img className="layer-2-18" src={img__test1} />
        <div className="baby-step__button__z__true segoeui-bold-white-15px">Z+</div>
      </div>
      <div
        className="overlap-group2-34"
        style={{ backgroundImage: `url(${img__test3})` }}
        // onClick={() => core.babyStep2mm(true)}
      >
        <div className="z-26 segoeui-bold-white-15px">
          <>
            <br />
            Z-
          </>
        </div>
      </div>
      <div
        className="overlap-group3-17"
        // onClick={() => core.babyStep2mm(false)}
      >
        <img className="layer-2-18" src={img__test2} />
        <div className="baby-step__button__z__true segoeui-bold-white-15px">Z+</div>
      </div>
    </>
  );
};

export default BabyStep;
