import React from "react";  
import logo from "../../../Assets/Images/KANNIKKA-logos_black.png";
import classes from './Logo.module.css';

const Logo = () => {
    return <div >
        <img src={logo} alt="PERSONAL LOGO" className={classes.logo} />
    </div>
}

export default Logo;