import React from 'react'
import classes from "./Nathan.module.css";

import n1 from "../../Assets/Images/Photo/n1.jpg";
import n2 from "../../Assets/Images/Photo/n2.jpg";
import n3 from "../../Assets/Images/Photo/n3.jpg";
import n4 from "../../Assets/Images/Photo/n4.jpg";
import n5 from "../../Assets/Images/Photo/n5.jpg";
import n6 from "../../Assets/Images/Photo/n6.jpg";
import n7 from "../../Assets/Images/Photo/n7.jpg";
import n8 from "../../Assets/Images/Photo/n8.jpg";
import n9 from "../../Assets/Images/Photo/n9.jpg";
import n10 from "../../Assets/Images/Photo/n10.jpg";


const Nathan = () => {
  return (
    <div className={classes.Nathan}>
        <h4 className={classes.title}>Skating with Yellow Toques at Nathan Phillips Square</h4>
        <div className={classes.Row}>
            <img src={n1} alt="Maple Leaf Square" className={classes.Item}/>
            <img src={n2} alt="Scotiabank Area" className={classes.Item}/>
        </div>
        <div className={classes.Row}>
            <img src={n3} alt="Leafs Fans" className={classes.Item}/>
            <img src={n4} alt="Coca Cola" className={classes.Item}/>
        </div>
        <div className={classes.Row}>
            <img src={n5} alt="Leafs Fans" className={classes.Item}/>
            <img src={n6} alt="Coca Cola" className={classes.Item}/>
        </div>
        <div className={classes.Row}>
            <img src={n7} alt="Leafs Fans" className={classes.Item}/>
            <img src={n8} alt="Coca Cola" className={classes.Item}/>
        </div>
        <div className={classes.Row}>
            <img src={n9} alt="Leafs Fans" className={classes.Item}/>
            <img src={n10} alt="Coca Cola" className={classes.Item}/>
        </div>

    </div>
  )
}

export default Nathan
