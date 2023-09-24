import React from "react";
import classes from "./Des.module.css";
import Comic from "./Comic";

const Des = () => {
  return (
    <div className={classes.des}>
      <h1 className={classes.title}>Design & Layout Projects</h1>
      <Comic />
    </div>
  );
};

export default Des;
