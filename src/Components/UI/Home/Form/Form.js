import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.form}>
      <form>
        {/* Name Section */}
        <section>
          <span>Name </span>
          <span className={classes.req}>(requried)</span>
          <br></br>
          <div className={classes.name}>
            <div className={classes.fname}>
              <label for="fname" name="fname">
                First Name:
              </label>
              <input type="text" id="fname" required></input>
            </div>
            <div className={classes.lname}>
              <label for="lname" name="lname">
                Last Name:
              </label>
              <input type="text" id="lname" required></input>
            </div>
          </div>
        </section>

        <br></br>

        {/* Email Section */}
        <section className={classes.email}>
          <span>Email </span>
          <span className={classes.req}>(requried)</span>
          <br></br>
          <br></br>
          
          <input type="text" id="email" required></input>
        </section>

        <br></br>

        {/* Subject Section */}
        <section className={classes.subject}>
          <span>Subject </span>
          <span className={classes.req}>(requried)</span>
          <br></br>
          <br></br>

          <input type="text" id="subject" required></input>
        </section>

        <br></br>

        {/* Email Section */}
        <section className={classes.msg}>
          <span>Message </span>
          <span className={classes.req}>(requried)</span>
          <br></br>
          <br></br>

          <input type="text" id="msg" required></input>
        </section>

        <br></br>

        {/* Submit btn */}
        <input type="submit" className={classes.submit}></input>
      </form>
    </div>
  );
};

export default Form;
