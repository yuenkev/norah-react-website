import React from "react";
import classes from "./Hiring.module.css";
import submit from "../../Assets/Images/Design/submit.png";
import { Fade } from "react-awesome-reveal";

const Hiring = () => {
  return (
    <div className={classes.Hiring}>
      <Fade direction="up" duration={1200} triggerOnce="true">
        <h1 className={classes.title}>TRMC - Hiring Campaign</h1>
      </Fade>
      <div className={classes.content}>
        <div className={classes.item}>
          <Fade cascade='true' duration={500} triggerOnce="true">
            <p>
              I worked together with the Marketing department to launch a
              student-wide hiring campaign.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>
              <em>Using Adobe Illustrator, Photoshop, After Effects</em>
            </p>
          </Fade>
        </div>
        <div className={classes.item}>
          <Fade direction="up" duration={1200} triggerOnce="true">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<div style=padding:50% 0 0 0;"><iframe src="https://player.vimeo.com/video/667489847?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Hiring Animation"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
              }} className={classes.vid}
            ></div>
            {/* <iframe
              src="https://player.vimeo.com/video/667489847?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="550"
              height="550"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Hiring Animation"
            ></iframe> */}
          </Fade>
        </div>
        <div className={classes.item}>
          <Fade direction="up" duration={1200} triggerOnce="true">
            <img
              src={submit}
              alt="Submit Your Application"
              className={classes.item && classes.img1}
            ></img>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
