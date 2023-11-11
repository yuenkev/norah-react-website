import React from 'react'
import classes from "./Leaf.module.css";

import l1 from "../../Assets/Images/Photo/l1.jpg";
import l2 from "../../Assets/Images/Photo/l2.jpg";
import l3 from "../../Assets/Images/Photo/l3.jpg";
import l4 from "../../Assets/Images/Photo/l4.jpg";

const Leaf = () => {
  return (
    <div className={classes.Leaf}>
        <h4 className={classes.title}>Leaf’s First Home-opener Turnout </h4>
        <div className={classes.Row}>
            <img src={l1} alt="Maple Leaf Square" className={classes.Item}/>
            <img src={l2} alt="Scotiabank Area" className={classes.Item}/>
        </div>
        <div className={classes.Row}>
            <img src={l3} alt="Leafs Fans" className={classes.Item}/>
            <img src={l4} alt="Coca Cola" className={classes.Item}/>
        </div>
    </div>
  )
}

export default Leaf