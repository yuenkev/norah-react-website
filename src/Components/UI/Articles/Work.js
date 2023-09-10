import React from "react";
import classes from "./Work.module.css";
import { work } from "./Data.js"
const Work = () => {

  return (
    <div className={classes.work}>
      {work.map((work) => {
        return (
          <div>
            <h1>{work.title}</h1>
            {/* For loop to map out the individual work */}
            {work.arts.map((arts) => {
                return (
                    <div  className={classes.art}>
                        <p><a href={arts.link} className={classes.links}>{arts.title}</a> {arts.year}</p>
                        <p className={classes.desc}><em>{arts.desc}</em></p>
                    </div>
                )
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Work;
