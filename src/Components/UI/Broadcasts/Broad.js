import React from "react";
import classes from "./Broad.module.css";
import { work } from "./Data.js";
import Dance from "./Dance";
import { Fade } from "react-awesome-reveal";

const Broad = () => {
  return (
    <>
      <div className={classes.work}>
        {work.map((work) => {
          return (
            <div>
              <Fade direction="up" duration={1200} triggerOnce="true">
                <h1>{work.title}</h1>
              </Fade>
              {/* For loop to map out the individual work */}
              {work.casts.map((casts) => {
                return (
                  <div className={classes.art}>
                    <Fade cascade='true' delay={500} duration={1000} triggerOnce="true">
                      <p>
                        <a href={casts.link} className={classes.links}>
                          {casts.title}
                        </a>{" "}
                        {casts.year}
                      </p>
                      <p className={classes.desc}>
                        <em>{casts.desc}</em>
                      </p>
                    </Fade>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Dance />
    </>
  );
};

export default Broad;
