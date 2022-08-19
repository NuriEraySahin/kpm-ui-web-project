import React from "react";

const test__1 = require("../../../assets/img/group-6@2x.svg");
const test__2 = require("../../../assets/img/layer-6@2x.svg");
const test__3 = require("../../../assets/img/layer-5@1x.png");
const test__4 = require("../../../assets/img/y-@1x.png");
const test__5 = require("../../../assets/img/layer-1@2x.svg");
const test__6 = require("../../../assets/img/layer-3-2@2x.svg");
const test__7 = require("../../../assets/img/layer-7-1@2x.svg");
const test__8 = require("../../../assets/img/layer-2@2x.svg");
const test__9 = require("../../../assets/img/vector@2x.svg");

const Move = () => {
  return (
    <>
      <div
        className="rectangle-4-12 border-2px-silver-chalice"
        // onClick={() => moveAxis("x", false)}
      ></div>

      <div
        className="rectangle-6-16 border-2px-silver-chalice"
        // onClick={() => moveAxis("x", true)}
      ></div>

      <div
        className="rectangle-7-16 border-2px-silver-chalice"
        // onClick={() => moveAxis("y", true)}
      ></div>

      <div
        className="rectangle-8-18 border-2px-silver-chalice"
        // onClick={() => moveAxis("y", false)}
      ></div>

      <div
        className="rectangle-17 border-2px-silver-chalice"
        // onClick={() =>
        //   moveRate <= 0 ? setMoveRate(0) : setMoveRate(moveRate - 5)
        // }
      ></div>

      <div
        className="rectangle-15-2 border-2px-silver-chalice"
        // onClick={() => moveAxis("z", false)}
      ></div>

      <div
        className="rectangle-16-6 border-2px-silver-chalice"
        // onClick={() => moveAxis("z", true)}
      ></div>

      <div
        className="rectangle-18 border-2px-silver-chalice"
        // onClick={() => setMoveRate(moveRate + 5)}
      ></div>

      <div className="address montserrat-normal-white-17px">
        {/* TODOs moveRate eklenecek{moveRate} mm */}
      </div>

      <div
        className="overlap-group-117"
        // onClick={() => moveAxis("y", true)}
        style={{ backgroundImage: `url(${test__3})` }}
      >
        <img className="y-14" src={test__4} />
      </div>

      <img
        className="group-6"
        src={test__1}
        // onClick={() => moveAxis("y", false)}
      />
      <div className="overlap-group1-30">
        <div className="move__button__x__false segoeui-bold-white-15px">X-</div>
        <img
          className="layer-3-2"
          src={test__6}
          // onClick={() => moveAxis("x", false)}
        />
      </div>
      <div className="overlap-group2-33">
        <img
          className="layer-7-1"
          src={test__7}
          // onClick={() => moveAxis("x", true)}
        />
        <div style={{top: "12px"}} className="x-17 segoeui-bold-white-15px">X+</div>
      </div>
      <div
            className="overlap-group3-16"
            style={{ backgroundImage: `url(${test__2})` }}
            // onClick={() => moveAxis("z", false)}
          >
            <div className="move__button__z__false segoeui-bold-white-15px"><br/>Z-</div>
          </div>
      <div className="overlap-group4-17">
        <img
          className="layer-2-17"
          src={test__8}
          // onClick={() => moveAxis("z", true)}
        />
        <div className="move__button__z__true segoeui-bold-white-15px">Z+</div>
      </div>

      <img
        className="layer-1-6"
        src={test__9}
        // onClick={() =>
        //   moveRate <= 0 ? setMoveRate(0) : setMoveRate(moveRate - 5)
        // }
      />
      <img
        className="layer-10"
        src={test__5}
        // onClick={() => setMoveRate(moveRate + 5)}
      />
    </>
  );
};

export default Move;
