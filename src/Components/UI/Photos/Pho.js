import React from "react";
import classes from "./Pho.module.css";
import Butter from "./Butter";
import Osap from "./Osap";
import PPF from "./PPF";

const Pho = () => {
  return (
    <div className={classes.Pho}>
        <Butter />
        <Osap />
        <PPF />
    </div>
  );
};

export default Pho;
