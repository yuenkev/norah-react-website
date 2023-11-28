import React from "react";
import classes from "./Form.module.css";

const Form = () => {

  //Handling 
  const handleSubmit = (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();

    const { fname, lname, email, subject, message } = event.target;
    console.log("First Name: ", fname.value);
    console.log("Last Name: ", lname.value);
    console.log("Email: ", email.value);
    console.log("Subject: ", subject.value);
    console.log("Message: ", message.value);
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        {/* Name Section */}
        <section>
          <span>Name </span>
          <span className={classes.req}>(requried)</span>
          <br></br>
          <div className={classes.name}>
            <div className={classes.fname}>
              <label>First Name:</label>
              <input name="fname" type="text" required></input>
            </div>
            <div className={classes.lname}>
              <label>Last Name:</label>
              <input name="lname" type="text" required></input>
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

          <input name="subject" type="text" id="subject" required></input>
        </section>

        <br></br>

        {/* Email Section */}
        <section className={classes.msg}>
          <span>Message </span>
          <span className={classes.req}>(requried)</span>
          <br></br>
          <br></br>

          <input name="message" type="text" id="msg" required></input>
        </section>

        <br></br>

        {/* Submit btn */}
        <input name="submit" type="submit" className={classes.submit}></input>
      </form>
    </div>
  );
};

export default Form;
