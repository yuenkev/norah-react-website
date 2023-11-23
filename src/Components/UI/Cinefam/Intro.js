import React from "react";
import classes from "./Intro.module.css";
import Slideshow from "./Slideshow";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <Fade direction="up" duration={1200} triggerOnce="true">
        <h2>CineFAM WOC Creators Database</h2>
      </Fade>
      <Fade cascade='true' duration={1000} triggerOnce="true">
      <p>
        CineFAM is a Canadian not for profit initiative. Which works within the
        media industry to reduce systematic discrimination against gender and
        race. Our team assembled of students from Ryerson FCAD’s Design
        Solutions Supercourse is worked closely with CineFAM to create a digital
        prototype which helps increase the discoverability of women of colour
        (WOC) in media. To escalate the WOC creators’ exposure and employment
        opportunities. The following showcases my group and I's prototype.
      </p>
      </Fade>
      <Slideshow />
    </div>
  );
};

export default Intro;
