import React from "react";
import classes from "./Comic.module.css";
import gary from "../../Assets/Images/Design/gary.png";
import { Fade } from "react-awesome-reveal";

const Comic = () => {
  return (
    <div className={classes.Comic}>
      <Fade direction="up" duration={1200} triggerOnce="true">
        <h3 className={classes.subtitle}>
          <em>Comic Book Cover Assignment</em>
        </h3>
      </Fade>
      <div className={classes.intro}>
        <Fade direction="up" duration={1200} triggerOnce="true">
          <img src={gary} alt="gary" className={classes.item && classes.gary} />
        </Fade>
        <div>
          <Fade cascade='true' duration={500} triggerOnce="true">
            <p>
              For my GCM 130 (Design & Layout) class, we were given the task of
              designing a comic book cover based on the adjective we were given.
              I created a humorous-based comic book story directed towards a
              younger-adult audience. The proposed series was called The
              Outlooks of Gullible Gary a non-binary confused superhero based in
              Toronto who wields nunchucks and tackles the villians of adulthood
              including financing, relationships, and much more.{" "}
            </p>
            <p>
              My design inspiration is derived from traditional Japanese manga
              panels with the front cover depicting Gullible Gary on top of the
              CN tower in a fighting stance holding a piece of paper in their
              hand.
            </p>
            <br></br>
            <p>
              <em>Using Adobe Illustrator, InDesign, Hand Sketching</em>
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Comic;
