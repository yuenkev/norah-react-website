import React from "react";
import classes from "./Des.module.css";
import Comic from "./Comic";
import Hiring from "./Hiring";
import Corp from "./Corp";
import Theme from "./Theme";

const Des = () => {
  return (
    <div className={classes.des}>
      <h1 className={classes.title}>Design & Layout Projects</h1>
      <Comic />
      <Hiring />
      <Corp />
      <Theme/>
    </div>
  );
};

export default Des;
