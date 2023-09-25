import React from "react";
import classes from "./Corp.module.css";
import pkg from "../../Assets/Images/Design/package.png";

const Corp = () => {
  return (
    <div className={classes.corp}>
      <h1 >Corp - Corporate Package</h1>
      <p>
        I worked with the Speaker and Corporate Relations departments to design
        a corporate package that was sent out and pitched to companies large and
        small for both monetary and in-kind sponsorships.
      </p>
      <p><em>Using Adobe Illustrator, InDesign</em></p>
      <img src={pkg} alt="Package" className={classes.pkg}></img>
    </div>
  );
};

export default Corp;
