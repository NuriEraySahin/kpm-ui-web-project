import React from "react";

const Footer = ({ip, path}) => {
  return (
    <>
      <div className="footer__ip__text montserrat-normal-white-13px">
        {ip}
      </div>
      <div className="footer__kpm-screen__text montserrat-normal-white-13px">
        KPM Screen
      </div>
    </>
  );
};

export default Footer;
