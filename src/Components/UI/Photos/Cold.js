import React from "react";
import classes from "./Cold.module.css";
import cold1 from "../../Assets/Images/Photo/cold1.jpg";
import cold2 from "../../Assets/Images/Photo/cold2.png";
import cold3 from "../../Assets/Images/Photo/cold3.jpg";
import { Fade } from "react-awesome-reveal";

const Cold = () => {
  return (
    <div className={classes.cold}>
      <Fade cascade="true" direction="up" duration={1200} triggerOnce="true">
        <h4 className={classes.title}>One of the Coldest Days of 2021</h4>
      </Fade>
      <div className={classes.outer}>
        <Fade cascade="true" direction="up" duration={1200} triggerOnce="true">
          <div className={classes.row}>
            <img src={cold1} alt="hug" className={classes.Loose} />
          </div>
        </Fade>
        <Fade cascade="true" direction="up" duration={1200} triggerOnce="true">
          <div className={classes.row}>
            <img src={cold3} alt="escaltors" className={classes.Item} />
            <img src={cold2} alt="escaltors" className={classes.Item} />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Cold;
