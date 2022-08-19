import React from "react";
import { Link } from "react-router-dom";

const sidebar__temperature__icon = require("../../../../../assets/img/temperature@2x.svg");
const sidebar__file__icon = require("../../../../../assets/img/file-1@2x.svg");
const sidebar__home__icon = require("../../../../../assets/img/home-yeni-1-1@2x.svg");

const Files = () => {
  return (
    <>
      <Link to="/temperature">
        <img alt=""
          className="files__page__temperature__icon"
          src={sidebar__temperature__icon}
        />
      </Link>
      <img alt="" className="files__page__file__icon" src={sidebar__file__icon} />
      <Link to="/home">
        <img alt="" className="files__page__home__icon" src={sidebar__home__icon} />
      </Link>
    </>
  );
};

export default Files;

{
  /* 

<Link to="/83">
  
</Link>
<Link to="/83">
  
</Link>
<Link to="/23">
  
</Link>
<Link to="/23">
  
</Link> */
}
