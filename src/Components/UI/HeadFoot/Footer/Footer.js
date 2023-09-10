import React from "react";  
import classes from './Footer.module.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { MdMailOutline } from 'react-icons/md';

const Footer = () => {
    return (
      <div className={classes.footer}>
          <a href="https://www.linkedin.com/in/norahkim/" className={classes.link}><FaLinkedinIn /></a>
          <a href="mailto: norahkkim@gmail.com" className={classes.link}><MdMailOutline/></a>
          <a href="https://twitter.com/norahkkim" className={classes.link}><AiOutlineTwitter /></a>
      </div>
    );
}

export default Footer;