import React from "react";
import { Link } from "react-router-dom";

const sidebar__setting__icon = require("../../../../../assets/img/actions@2x.svg");
const sidebar__temperature__icon = require("../../../../../assets/img/temperature@2x.svg");
const sidebar__file__icon = require("../../../../../assets/img/file-1@2x.svg");

const Temperature = () => {
  return (
    <>
      <Link to="/settings">
        <img alt="" className="file-1" src={sidebar__setting__icon} />
      </Link>
      <img alt=""
        className="temperature__page__temperature__icon"
        src={sidebar__temperature__icon}
      />
      <Link to="/files">
        <img alt="" className="file-26" src={sidebar__file__icon} />
      </Link>
    </>
  );
};

export default Temperature;

{
  /* 


  <Link to="/62">
    
  </Link>


  <Link to="/62">
    
  </Link>

<Link to="/93">
  
</Link>

  <Link to="/93">
    
  </Link>
 */
}
