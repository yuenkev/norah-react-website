import React from "react";
import classes from "./PPF.module.css";
import ppf1 from "../../Assets/Images/Photo/ppf1.jpg";
import ppf2 from "../../Assets/Images/Photo/ppf2.jpg";
import ppf3 from "../../Assets/Images/Photo/ppf3.jpg";
import { Fade } from "react-awesome-reveal";

const PPF1 = () => {
  return (
    <div className={classes.PPF}>
      <Fade cascade="true" direction="up" duration={1200} triggerOnce="true">
        <h4 className={classes.title}>Pictorial (PPF Installation)</h4>
      </Fade>
      <Fade cascade="true" direction="up" duration={1200} triggerOnce="true">
      <div className={classes.outer}>
        <div className={classes.column}>
          <img src={ppf1} alt="hug" className={classes.Item} />
          <img src={ppf2} alt="escaltors" className={classes.Item} />
        </div>
        <div className={classes.column}>
          <img src={ppf3} alt="escaltors" className={classes.Item} />
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default PPF1;
