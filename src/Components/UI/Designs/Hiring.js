import React from "react";
import classes from "./Hiring.module.css";
import submit from "../../Assets/Images/Design/submit.png";

const Hiring = () => {
  return (
    <div className={classes.Hiring}>
      <h1 className={classes.title}>TRMC - Hiring Campaign</h1>
      <div className={classes.content}>
        <div className={classes.item}>
          <p>
            I worked together with the Marketing department to launch a
            student-wide hiring campaign.
          </p>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <p>
            <em>Using Adobe Illustrator, Photoshop, After Effects</em>
          </p>
        </div>
        <div className={classes.item}>
          <iframe
            src="https://player.vimeo.com/video/667489847?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="550"
            height="550"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Hiring Animation"
          ></iframe>
        </div>
        <div className={classes.item}>
            <img src={submit} alt="Submit Your Application" className={classes.item}></img>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
