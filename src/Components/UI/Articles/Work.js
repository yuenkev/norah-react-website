import React from "react";
import classes from "./Work.module.css";
import { work } from "./Data.js";
import { Fade } from "react-awesome-reveal";

const Work = () => {
  return (
    <div className={classes.work}>
      {work.map((work) => {
        return (
          <div>
            <Fade direction="up" duration={1200} triggerOnce="true">
              <h1>{work.title}</h1>
            </Fade>
            {/* For loop to map out the individual work */}
            {work.arts.map((arts) => {
              return (
                <div className={classes.art}>
                  <Fade cascade='true' delay={500} duration={500} triggerOnce="true">
                    <p>
                      <a href={arts.link} className={classes.links}>
                        {arts.title}
                      </a>{" "}
                      {arts.year}
                    </p>
                    <p className={classes.desc}>
                      <em>{arts.desc}</em>
                    </p>
                  </Fade>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Work;
