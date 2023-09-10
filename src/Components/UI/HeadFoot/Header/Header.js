import React from "react";  
import classes from './Header.module.css';
import Navbar from "./Navbar";

const Header = () => {
    return (
      <div className={classes.header}>
          <Navbar />
      </div>
    );
}

export default Header;