import React, { useState } from "react";
import { Link } from "react-router-dom";

const img_4 = require("../../../assets/img/tick-2@2x.svg");
const img_3 = require("../../../assets/img/cross-4@2x.svg");
const print__icon = require("../../../assets/img/printing-1-23@2x.svg");
const print__icon__bg = require("../../../assets/img/print-button-vector-4@2x.svg");
const sidebar__arrow__up__icon = require("../../../assets/img/-st-ok-1@2x.svg");
const sidebar__arrow__down__icon = require("../../../assets/img/alt-ok@2x.svg");

const OctoPrint = () => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "octo-t",
      path: "octo-t.resource",
    },
    {
      id: 2,
      name: "octo-t-2",
      path: "octo-t.resource",
    },
    {
      id: 3,
      name: "octo-t-3",
      path: "octo-t.resource",
    },
    {
      id: 4,
      name: "octo-t-4",
      path: "octo-t.resource",
    },
    {
      id: 5,
      name: "octo--5",
      path: "octo-t.resource",
    },
    {
      id: 6,
      name: "octo-t-6",
      path: "octo-t.resource",
    },
  ]);

  const [boundry, setBoundry] = useState({
    start: 0,
    end: 2,
  });

  const [dialog, setDialog] = useState(false);

  const handleUp = () => {
    if (boundry.start !== 0) {
      setBoundry({
        start: boundry.start - 1,
        end: boundry.end - 1,
      });
    }
  };

  const handleDown = () => {
    if (boundry.end + 1 < files.length) {
      setBoundry({
        start: boundry.start + 1,
        end: boundry.end + 1,
      });
    }
  };

  const File = ({ data }) => {
    return (
      <div className="overlap-group1-35">
        <div className="rectangle-1-1 border-2px-silver-chalice"></div>
        <div className="textContainer">
          <div className="kpm-milgem-model_10022022_-asfat_-1 montserrat-normal-white-17px">
            {data.name}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <img
        className="frame-16-1"
        src={sidebar__arrow__up__icon}
        onClick={handleUp}
      />
      <div className="container">
        {files.slice(boundry.start, boundry.end + 1).map((el) => (
          <File key={el.id} data={el} />
        ))}
      </div>

      <img
        className="frame-15-7"
        src={sidebar__arrow__down__icon}
        onClick={handleDown}
      />

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
        <Link to="/printer">
          <img class="printer__dialog__button__confirm" src={img_4}></img>
        </Link>
      </div>
    </>
  );
};

export default OctoPrint;
