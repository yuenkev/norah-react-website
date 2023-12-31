import React from "react";
import classes from "./Body.module.css";
import dbas from "../../Assets/Images/CineFAM/dbas.png";
import { Fade } from "react-awesome-reveal";

const Body = () => {
  return (
    <div className={classes.body}>
      {/* Paragraph */}
      <div className={classes.para}>
        <Fade cascade='true' duration={1000} triggerOnce="true">
          <h4>Bringing the idea to life</h4>
          <p>
            After a successful presentation to the CineFAM team, I interviewed
            to become one of their Web Design Interns to bring our student
            project to life. Working side-by-side with the project coordinator
            and web development team the official CineFAM WOC Creators Database
            launched on March 1st, 2022 highlighting 40+ BIPOC Women Creators in
            light of International Women’s Day Month. The Content Creator
            Database enhances the visibility of Women of Colour in the film
            industry, directors, content creators, producers, screenplay
            writers, actress, animators, motion design, etc.
          </p>
        </Fade>
        <br></br>
        <br></br>
        <a href="https://cinefam.ca/filmmakers/" className={classes.dbBtn}>
          See Here To Visit The Database
        </a>
      </div>
      {/* Image */}
      <div className={classes.img}>
        <Fade direction="up" duration={1200} triggerOnce="true">
          <img src={dbas} alt="Database"></img>
        </Fade>
      </div>
    </div>
  );
};

export default Body;
