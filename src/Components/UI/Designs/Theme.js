import React from "react";
import classes from "./Theme.module.css";
import { Fade } from "react-awesome-reveal";

const Theme = () => {
  const videos = [
    '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/667495005?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="BEYOND_VIDEO"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/667495100?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ALL_VIDEO"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    '<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/667495157?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="LIMITS_VIDEO"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',

    //   '<iframe src="https://player.vimeo.com/video/667495005?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="550" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="BEYOND_VIDEO"></iframe>',
    //   '<iframe src="https://player.vimeo.com/video/667495100?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="550" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="ALL_VIDEO"></iframe>',
    //   '<iframe src="https://player.vimeo.com/video/667495157?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="550" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="LIMITS_VIDEO"></iframe>',
  ];

  return (
    <div className={classes.Theme}>
      <Fade direction="up" duration={1200} triggerOnce="true">
        <h1>TRMC - Theme Reveal</h1>
      </Fade>
      <Fade cascade="true" duration={500} triggerOnce="true">
        <p>
          The conference’s theme was “Beyond All Limits”. To showcase and tease
          the theme to our fellow potential delegates I created trailer videos
          and animations to present TRMC’s 2022 vision.
        </p>
        <p>
          <em>
            Using Adobe Illustrator, InDesign, After Effects, Premiere Pro
          </em>
        </p>
      </Fade>
      <Fade direction="up" duration={1200} triggerOnce="true">
        <div className={classes.vids}>
          {videos.map((video) => {
            return (
              <div
                dangerouslySetInnerHTML={{ __html: video }}
                className={classes.item}
              ></div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default Theme;
