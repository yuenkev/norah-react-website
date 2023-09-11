import React from "react";
import classes from "./Press.module.css";
import { hits } from "./PressData";

const Press = () => {
  return (
    <div className={classes.press}>
      <h4>Press Hits</h4>
      <div className={classes.hits}>
        {hits.map((hits) => {
          return (
            <div className={classes.col}>
              <strong>{hits.title}</strong>
              <p className={classes.desc}>{hits.desc}</p>
              <p>
                <a href={hits.link} className={classes.link}>
                  See Here
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Press;
