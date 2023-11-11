import React from "react";
import classes from "./Pho.module.css";
import Butter from "./Butter";
import Osap from "./Osap";
import PPF from "./PPF";
import Cold from "./Cold";
import Leaf from "./Leaf";
import Nathan from "./Nathan";

const Pho = () => {
  return (
    <div className={classes.Pho}>
        <Butter />
        <Osap />
        <PPF />
        <Cold />
        <Leaf />
        <Nathan />
    </div>
  );
};

export default Pho;
