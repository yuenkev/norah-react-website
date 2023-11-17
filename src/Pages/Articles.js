import React from "react";
import Work from "../Components/UI/Articles/Work";
import { Fade } from "react-awesome-reveal";


const Articles = () => {
  return (
    <>
      <Fade direction="up" duration={1000} triggerOnce="true">
        <h3>Articles & Editorial Work</h3>
      </Fade>
      <Work/>
    </>
  );
};

export default Articles;
