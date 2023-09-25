import React from "react";
import classes from "./Theme.module.css";

const Theme = () => {
  const videos = [
    '<iframe src="https://player.vimeo.com/video/667495005?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="550" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="BEYOND_VIDEO"></iframe>',
    '<iframe src="https://player.vimeo.com/video/667495100?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="550" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="ALL_VIDEO"></iframe>',
    '<iframe src="https://player.vimeo.com/video/667495157?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="550" height="550" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="LIMITS_VIDEO"></iframe>',
  ];

  return (
    <div className={classes.Theme}>
      <h1>TRMC - Theme Reveal</h1>
      <p>
        The conference’s theme was “Beyond All Limits”. To showcase and tease
        the theme to our fellow potential delegates I created trailer videos and
        animations to present TRMC’s 2022 vision.
      </p>
      <p>
        <em>Using Adobe Illustrator, InDesign, After Effects, Premiere Pro</em>
      </p>
      <div className={classes.vids}>
        {videos.map((video) => {
            return (
                <div dangerouslySetInnerHTML={{__html: video}} className={classes.item}></div>
            )
        }) }
      </div>
    </div>
  );
};

export default Theme;


