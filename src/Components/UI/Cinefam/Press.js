import React from "react";
import classes from "./Press.module.css";
import { hits } from "./PressData";
import { Fade } from "react-awesome-reveal";

const Press = () => {
  return (
    <div className={classes.press}>
      <Fade direction="up" duration={1000} triggerOnce="true">
        <h4>Press Hits</h4>
      </Fade>
      <div className={classes.hits}>
        {hits.map((hits) => {
          return (
            <div className={classes.col}>
              <Fade cascade='true' duration={500} triggerOnce="true">
              <strong>{hits.title}</strong>
              <p className={classes.desc}>{hits.desc}</p>
              <p>
                <a href={hits.link} className={classes.link}>
                  See Here
                </a>
              </p>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Press;
