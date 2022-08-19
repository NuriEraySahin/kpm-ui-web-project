import React, { useState } from "react";

const img__flm1 = require("../../../../src/assets/img/load-beyaz-1-1@2x.svg");
const img__flm2 = require("../../../../src/assets/img/unload-beyaz-1@2x.svg");
const img__flm3 = require("../../../../src/assets/img/layer-7-3@2x.svg");

const Filament = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <img className="layer-7-3" src={img__flm3} />
      <div className="filament-25-mm montserrat-normal-white-17px">
        <span className="montserrat-normal-white-17px">Filament : </span>
        {/* {core.printerTools.filamentLength}  */}
        <span className="montserrat-semi-bold-white-17px">mm</span>
      </div>

      {/* onClick={loadFilament}  */}
      <div className="load montserrat-normal-white-17px">Load</div>
      <div className="rectangle-4-14 border-2px-silver-chalice"></div>
      <img className="load-beyaz-1" src={img__flm1} />
      {/* onClick={unloadFilament} */}
      <div className="unload montserrat-normal-white-17px">Unload</div>
      <div className="rectangle-83 border-2px-silver-chalice"></div>
      <img className="unload-beyaz-1" src={img__flm2} />

      <div className="filament__stepper__bg border-2px-silver-chalice"></div>

      <div onClick={() => setStep(1)} className={`filament__stepper__left__text${step === 1 ? "__selected" : ""}`}>
        <span className="montserrat-normal-white">
          1<span className="montserrat-normal-white-10px">mm</span>
        </span>
      </div>
      <div onClick={() => setStep(1)} className={`filament__stepper__left${step === 1 ? "__selected" : ""} border-1px-silver-chalice`}></div>

      <div onClick={() => setStep(5)} className={`filament__stepper__middle__text${step === 5 ? "__selected" : ""}`}>
        <span className="montserrat-normal-white">
          5<span className="montserrat-normal-white-10px">mm</span>
        </span>
      </div>
      <div onClick={() => setStep(5)} className={`filament__stepper__middle${step === 5 ? "__selected" : ""} border-1px-silver-chalice`}></div>

      <div onClick={() => setStep(25)} className={`filament__stepper__right__text${step === 25 ? "__selected" : ""}`}>
        <span className="montserrat-normal-white">
          25<span className="montserrat-normal-white-10px">mm</span>
        </span>
      </div>
      <div onClick={() => setStep(25)} className={`filament__stepper__right${step === 25 ? "__selected" : ""} border-1px-silver-chalice`}></div>
    </>
  );
};

export default Filament;
