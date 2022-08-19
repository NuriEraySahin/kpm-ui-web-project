import React, { useState } from "react";

const img_4 = require("../../../assets/img/tick-2@2x.svg");
const img_3 = require("../../../assets/img/cross-4@2x.svg");
const print__icon = require("../../../assets/img/printing-1-23@2x.svg");
const print__icon__bg = require("../../../assets/img/print-button-vector-4@2x.svg");

const USB = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      {" "}
      <div onClick={() => setDialog(true)}>
        <img className="print-button-vector-4" src={print__icon__bg} />
        <img className="printing-1-23" src={print__icon} />
        <div className="print-4 montserrat-normal-white-12px">Print</div>
      </div>
      <div style={{ display: !dialog ? "none" : "block" }}>
        <p class="printer__warn__dialog__text montserrat-normal-white-15px">
          Do you wish to continue with{" "}
        </p>
        <div class="printer__warn__dialog__bg"></div>
        <img
          onClick={() => setDialog(false)}
          class="printer__dialog__button__cancel"
          src={img_3}
        ></img>
        <img class="printer__dialog__button__confirm" src={img_4}></img>
      </div>
    </>
  );
};

export default USB;
