import React from "react";
import classes from "./Des.module.css";
import Comic from "./Comic";
import Hiring from "./Hiring";
import Corp from "./Corp";
import Theme from "./Theme";
import { Fade } from "react-awesome-reveal";

const Des = () => {
  return (
    <div className={classes.des}>
      <Fade direction="up" duration={1200} triggerOnce="true">
        <h1 className={classes.title}>Design & Layout Projects</h1>
      </Fade>
      <Comic />
      <Hiring />
      <Corp />
      <Theme />
    </div>
  );
};

export default Des;
