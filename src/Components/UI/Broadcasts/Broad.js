import React from "react";
import classes from "./Broad.module.css";
import { work } from "./Data.js";
import Dance from "./Dance";

const Broad = () => {
  return (<>
    <div className={classes.work}>
      {work.map((work) => {
        return (
          <div>
            <h1>{work.title}</h1>
            {/* For loop to map out the individual work */}
            {work.casts.map((casts) => {
              return (
                <div className={classes.art}>
                  <p>
                    <a href={casts.link} className={classes.links}>
                      {casts.title}
                    </a>{" "}
                    {casts.year}
                  </p>
                  <p className={classes.desc}>
                    <em>{casts.desc}</em>
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
    <Dance/>
    </>
  );
};

export default Broad;
