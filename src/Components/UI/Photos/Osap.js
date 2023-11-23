import React from "react";
import classes from "./Osap.module.css";
import o1 from "../../Assets/Images/Photo/o1.jpg";
import o2 from "../../Assets/Images/Photo/o2.jpg";
import o3 from "../../Assets/Images/Photo/o3.jpg";
import o4 from "../../Assets/Images/Photo/o4.jpg";
import { Fade } from "react-awesome-reveal";

const Osap = () => {
  return (
    <div className={classes.Osap}>
      <Fade cascade="true" direction="up" duration={1200} triggerOnce="true">
        <h4 className={classes.title}>OSAP Cuts Protest</h4>
      </Fade>
      <Fade cascade="true" direction="up" duration={1200} triggerOnce="true">
        <div className={classes.Row}>
          <img src={o1} alt="Medical School is Hard" className={classes.Item} />
          <img src={o2} alt="10% Discounts" className={classes.Item} />
        </div>
        <div className={classes.Row}>
          <img src={o3} alt="Find the Future" className={classes.Item} />
          <img
            src={o4}
            alt="We Can't Afford Ford Tuition"
            className={classes.Item}
          />
        </div>
      </Fade>
    </div>
  );
};

export default Osap;
