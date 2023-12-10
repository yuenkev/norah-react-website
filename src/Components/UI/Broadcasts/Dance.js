import React from "react";
import { dance } from "./Data1";
import classes from "./Dance.module.css";
import { Fade } from "react-awesome-reveal";

const Dance = () => {
  return (
    <div className={classes.dance}>
      {dance.map((dance) => {
        return (
          <div className={classes.vids}>
            {/* Conditional Rendering - This means that if dance.title is not null then render <p>...</p>. */}
            <Fade direction="up" duration={1200} triggerOnce="true">
              {dance.title && <h1>{dance.title}</h1>}
            </Fade>
            <Fade duration={1000} triggerOnce="true">
              {dance.desc && <p>{dance.desc}</p>}
            </Fade>

            {/* For loop to Map out the videos */}
            <div className={classes.layout}>
              {dance.vids.map((videos) => {
                return (
                  <div className={classes.vids}>
                    {/* Conditional Rendering - This means that if videos.title/videos.desc is not null then render <p>...</p>. */}
                    <Fade delay={500} duration={500} triggerOnce="true">
                        {videos.title && <p>{videos.title}</p>}
                        {videos.desc && <p>{videos.desc}</p>}
                    </Fade>
                    <Fade direction="up" duration={1200} triggerOnce="true">
                      <div
                        dangerouslySetInnerHTML={{ __html: videos.code }}
                      ></div>
                    </Fade>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dance;
