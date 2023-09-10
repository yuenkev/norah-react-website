import React from "react";
import { dance } from "./Data1";
import classes from "./Dance.module.css";

const Dance = () => {
  return (
    <div className={classes.dance}>
      {dance.map((dance) => {
        return (
          <div className={classes.vids}>
            {/* This means that if dance.title/ exists or is not null then render <p>...</p>. */}
            {dance.title && <h1>{dance.title}</h1>}
            {dance.desc && <p>{dance.desc}</p>}
            {/* For loop to Map out the videos */}
            <div className={classes.layout}>
              {dance.vids.map((videos) => {
                return (
                  <div className={classes.vids}>
                    {/* This means that if videos.title/videos.desc exists or is not null then render <p>...</p>. */}
                    {videos.title && <p>{videos.title}</p>}
                    {videos.desc &&<p>{videos.desc}</p>}
                    <div
                      dangerouslySetInnerHTML={{ __html: videos.code }}
                    ></div>
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
