import React from "react";
import { Link } from "react-router-dom";

const sidebar__file__icon = require("../../../../../assets/img/file-1@2x.svg");
const sidebar__home__icon = require("../../../../../assets/img/home-yeni-1-1@2x.svg");
const sidebar__control__icon = require("../../../../../assets/img/control-@2x.svg");

const Home = () => {
  return (
    <>
      <Link to="/files">
        <img alt="" className="file-1" src={sidebar__file__icon} />
      </Link>
      <img alt="" className="home_-yeni-1-1" src={sidebar__home__icon} />
      <Link to="/controls">
        <img alt="" className="control-1" src={sidebar__control__icon} />
      </Link>
    </>
  );
};

export default Home;

{
  /* 


<Link to="/93">
  
</Link>
<Link to="/47">
  
</Link>
<Link to="/47">
  
</Link>
<Link to="/93">
 
</Link> */
}
