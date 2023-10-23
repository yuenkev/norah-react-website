import React from "react";
import classes from "./Butter.module.css";
import pho1 from "../../Assets/Images/Photo/1.jpeg";
import pho2 from "../../Assets/Images/Photo/2.jpeg";
import pho3 from "../../Assets/Images/Photo/3.jpeg";

const Butter = () => {
  return (
    <div className={classes.Pho}>
      <h4 className={classes.title}>Buffer Film Festival (2019)</h4>
      <div className={classes.phoRow}>
        <img src={pho1} alt="hug" className={classes.phoItem}/>
        <img src={pho2} alt="escaltors" className={classes.phoItem}/>
      </div>
      <img src={pho3} alt="escaltors" className={classes.phoLoose}/>
    </div>
  );
};

export default Butter;
