import React from "react";
import classes from "./Cine.module.css";
import Intro from "./Intro";
import Body from "./Body";
import Press from "./Press";

const Cine = () => {
  return (
    <div className={classes.cine}>
      <Intro />
      <Body/>
      <Press/>
    </div>
  );
};

export default Cine;
