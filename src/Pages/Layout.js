// The <Outlet> renders the current route selected.
//<Link> is used to set the URL and keep track of browsing history.
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Logo from "../Components/UI/HeadFoot/Header/Logo";
import List from "../Components/UI/HeadFoot/Header/List";
import Footer from "../Components/UI/HeadFoot/Footer/Footer";
import classes from "../Components/UI/PageStyles/Layout.module.css";
import resume from "../Components/Assets/RESUME_NORAHKIM.pdf";

const Layout = () => {
  //useState for displaying the portfolio menu
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState("none");

  const onDisplay = () => {
    setDisplay(true);
    setShow("block");
  };

  const offDisplay = () => {
    setDisplay(false);
    setShow("none");
  };

  return (
    <>
      {/* Permanent Header */}
      <Fade direction="up" duration={1000}>
        <nav>
          {/* I put the logo here to make it coupled with the navbar */}
          <Link to="/home">
            <Logo />
          </Link>
          <ul className={classes.navbar}>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link
                //Functions called when <li> on clicked
                onClick={display ? offDisplay : onDisplay}
                role="button"
                tabIndex="-3"
              >
                portfolio
              </Link>
            </li>
            <li>
              <a href={resume}>resume/cv</a>
            </li>
          </ul>
        </nav>
      </Fade>

      {/* hidden list -- If mouse is hovering, then display the portofolio list */}
      <div style={{ display: show }}>
        <List />
      </div>

      {/* Page Content Below */}
      <Outlet />

      {/* Permanent Footer */}
      <Fade direction="up" duration={1000}>
        <Footer />
      </Fade>
    </>
  );
};

export default Layout;
