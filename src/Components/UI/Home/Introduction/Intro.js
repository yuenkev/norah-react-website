import React from "react";
import classes from "./Intro.module.css";
import { Fade } from "react-awesome-reveal";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <Fade direction="up" duration={1500}>
        <h2>Norah Kim</h2>
      </Fade>
      <Fade direction="up" duration={1000}>
        <p>
          A Toronto-based multimedia journalist and creative, Norah is a first
          generation Khmer-Vietnamese who aspires to tell stories through a wide
          arrange of platforms and mediums. In 2022, she completed a bachelor
          degree majoring in journalism with a double minor in Communication
          Design and Film/Television studies at Toronto Metropolitan University
          (formally known as Ryerson). She has worked in a wide arrange of
          industries including media production, news writing, design, and film
          distribution in attempts to expand her skillsets.{" "}
        </p>
      </Fade>

      <br></br>
      <Fade direction="up" duration={1500}>
        <p>
          For collaboration or work inquiries please fill out the following
          form:
        </p>
      </Fade>
      <br></br>
    </div>
  );
};

export default Intro;
