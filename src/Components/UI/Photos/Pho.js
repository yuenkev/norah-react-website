import React from "react";
import classes from "./Pho.module.css";
import Butter from "./Butter";
import Osap from "./Osap";

const Pho = () => {
  return (
    <div className={classes.Pho}>
        <Butter />
        <Osap />
    </div>
  );
};

export default Pho;
