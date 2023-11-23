import React from "react";
import classes from "./Corp.module.css";
import pkg from "../../Assets/Images/Design/package.png";
import { Fade } from "react-awesome-reveal";

const Corp = () => {
  return (
    <div className={classes.corp}>
      <Fade direction="up" duration={1200} triggerOnce="true">
        <h1>TRMC - Corporate Package</h1>
      </Fade>
      <Fade cascade='true' duration={500} triggerOnce="true">
      <p>
        I worked with the Speaker and Corporate Relations departments to design
        a corporate package that was sent out and pitched to companies large and
        small for both monetary and in-kind sponsorships.
      </p>
      <p>
        <em>Using Adobe Illustrator, InDesign</em>
      </p>
      </Fade>
      <Fade direction="up" duration={1200} triggerOnce="true">
        <img src={pkg} alt="Package" className={classes.pkg}></img>
      </Fade>
    </div>
  );
};

export default Corp;
