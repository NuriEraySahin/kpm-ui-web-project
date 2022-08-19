import React, { useState } from "react";

const sidebar__arrow__up__icon = require("../../../assets/img/-st-ok-1@2x.svg");
const sidebar__arrow__down__icon = require("../../../assets/img/alt-ok@2x.svg");
const wifi__icon = require("../../../assets/img/9-wifi-2-1-1@2x.svg");

const Network = () => {
  const [wifiArray, setWifiArray] = useState([{id: 0, ssid: "TP-Link_2C24", bssid: "test_b_wifi"},{id: 1, ssid: "test_1_WiFi", bssid: "test_1_b_wifi"},{id: 2, ssid: "test_2_WiFi", bssid: "test_2_b_wifi"},{id: 3, ssid: "test_3_WiFi", bssid: "test_3_b_wifi"}]);
  const [wifiIndex, setWifiIndex] = useState(-1);
  const [boundry, setBoundry] = useState({
    start: 0,
    end: 2,
  });

  const handleUp = () => {
    if (wifiIndex === -1) {
      if (boundry.start !== 0) {
        setBoundry({
          start: boundry.start - 1,
          end: boundry.end - 1,
        });
      }
    } else {
      wifiIndex !== 0 && setWifiIndex(wifiIndex - 1);
    }
  };

  const handleDown = () => {
    if (wifiIndex === -1) {
      if (boundry.end + 1 < wifiArray.length) {
        setBoundry({
          start: boundry.start + 1,
          end: boundry.end + 1,
        });
      }
    } else {
      wifiIndex + 1 < wifiArray.length && setWifiIndex(wifiIndex + 1);
    }
  };

  const Item = ({ item }) => {
    return (
      <div
        className="network__wifi__list__container"
        onClick={() => setWifiIndex(item)}
      >
        <div className="network__wifi__list__item">
          <div className="rectangle border-2px-silver-chalice"></div>
          <img className="x9_-wifi-2-1-1" src={wifi__icon} />
          <div className="textContainer">
            <div className="kpm-network-1 montserrat-normal-white-17px">
            {wifiArray[item].ssid}
            </div>
            <div className="kpm-network-1"></div>
          </div>
        </div>
      </div>
    );
  };

  const Detail = () => {
    return (
      <>
        <div onClick={() => setWifiIndex(-1)} className="network__back__button__box border-2px-silver-chalice">
          <div className="network__back__button__text montserrat-normal-white-17px">
            Back
          </div>
        </div>

        <div
          className="flex-row-28 border-2px-silver-chalice"          
        >
          <div className="flex-col-8">
            <img className="x9_-wifi-2-1-2-28" src={wifi__icon} />
            <p className="ip-address-1111111-28 montserrat-normal-white-13px">
              MAC: {wifiArray[wifiIndex].bssid}
            </p>
          </div>
          <div className="flex-col-9-28">
            <div className="kpm-network-2-28 montserrat-semi-bold-white-17px">
            {wifiArray[wifiIndex].ssid}
            </div>

            <div className="overlap-group-48-28">
              <div className="rectangle-4-1-28 border-2px-silver-chalice"></div>
              <div className="connect-28 montserrat-normal-white-17px">
                Connect
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="network__container">
      <div className="network__layout montserrat-normal-white-13px">
        <img
          className="frame-16"
          src={sidebar__arrow__up__icon}
          onClick={handleUp}
        />

        <div className="container">
          {wifiIndex === -1 ? (
            wifiArray
              .slice(boundry.start, boundry.end + 1)
              .map((el) => <Item key={el.id} item={el.id} />)
          ) : (
            <Detail />
          )}
        </div>

        <img
          className="frame-15-2"
          src={sidebar__arrow__down__icon}
          onClick={handleDown}
        />
      </div>
    </div>
  );
};

export default Network;
