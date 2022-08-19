import React from "react";

const print__icon = require("../../assets/img/printing-1-23@2x.svg");
const print__icon__bg = require("../../assets/img/print-button-vector-4@2x.svg");

const PrintButton = ({ onClick }) => {
  return (
    <>
      <img className="print-button-vector-4" src={print__icon__bg} />
      <img className="printing-1-23" src={print__icon} />
      <div className="print-4 montserrat-normal-white-12px">Print</div>
    </>
  );
};

export default PrintButton;
