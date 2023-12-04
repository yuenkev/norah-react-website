// The <Outlet> renders the current route selected.
//<Link> is used to set the URL and keep track of browsing history.
import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Logo from "../Components/UI/HeadFoot/Header/Logo";
import Footer from "../Components/UI/HeadFoot/Footer/Footer";
import classes from "../Components/UI/PageStyles/Layout.module.css";
import resume from "../Components/Assets/RESUME_NORAHKIM.pdf";
import { Dropdown, Space } from "antd";

const Layout = () => {
  // Links to different portfolio pages
  const items = [
    {
      key: "1",
      label: <Link to="/articles">articles & editorial</Link>,
    },
    {
      key: "2",
      label: <Link to="/broadcasts">broadcasts & videography</Link>,
    },
    {
      key: "3",
      label: <Link to="/cinefam">cinefam woc database</Link>,
    },
    {
      key: "4",
      label: <Link to="/design">design & layout</Link>,
    },
    {
      key: "5",
      label: <Link to="/photo">photojournalism</Link>,
    },
  ];

  return (
    <>
      {/* Permanent Header */}

      <Fade direction="up" duration={1000} triggerOnce="true">
        <nav>
          {/* I put the logo here to make it coupled with the navbar */}
          <Link to="/home">
            <Logo />
          </Link>
          <ul className={classes.navbar}>
            <li className={classes.navbarHov}>
              <Link to="/home">home</Link>
            </li>
            <li className={classes.navbarHov}>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={['hover']}
              >
                <Link>
                  <Space>portfolio</Space>
                </Link>
                </Dropdown>
            </li>
            <li className={classes.navbarHov}>
              <a href={resume}>resume/cv</a>
            </li>
          </ul>
        </nav>
      </Fade>

      {/* Page Content Below */}
      <Outlet />

      {/* Permanent Footer */}
      <Fade direction="up" duration={1000} triggerOnce="true">
        <Footer />
      </Fade>
    </>
  );
};

export default Layout;
