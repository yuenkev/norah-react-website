import React from "react";
import classes from "./Cold.module.css";
import cold1 from "../../Assets/Images/Photo/cold1.jpg";
import cold2 from "../../Assets/Images/Photo/cold2.png";
import cold3 from "../../Assets/Images/Photo/cold3.jpg";

const Cold = () => {
  return (
    <div className={classes.cold}>
      <h4 className={classes.title}>One of the Coldest Days of 2021</h4>
      <div className={classes.outer}>
        <div className={classes.row}>
          <img src={cold1} alt="hug" className={classes.Loose} />
        </div>
        <div className={classes.row}>
          <img src={cold3} alt="escaltors" className={classes.Item} />
          <img src={cold2} alt="escaltors" className={classes.Item} />
        </div>
      </div>
    </div>
  );
};

export default Cold;
