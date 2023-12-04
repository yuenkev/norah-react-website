import React from "react";
import classes from "./Form.module.css";

const Form = () => {

  //Handler Arrow Function, it has the event as a prop
  const handleSubmit = (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();

    // Within the handleSubmit function, the line const { fname, lname, email, subject, message } = event.target;
    // is used to destructure the FORM ELEMENTS from the event.target object. This assumes that your form elements
    // have the NAME attributes set to "fname," "lname," "email," "subject," and "message."

    // When you submit the form, event.target refers to the form element
    // By using fname.value, you access the value entered into that input field.
    const { fname, lname, email, subject, message } = event.target;
    // console.log("First Name: ", fname.value);
    // console.log("Last Name: ", lname.value);
    // console.log("Email: ", email.value);
    // console.log("Subject: ", subject.value);
    // console.log("Message: ", message.value);

    // Use your API endpoint URL you copied from the previous step
    // API Gateway, which will enable our browser to send HTTP requests to the Lambda function we created.
    // API Gateway will put the form data in the body property of the event parameter.
    const endpoint =
      "https://hg6rzemw3d.execute-api.us-east-2.amazonaws.com/default/sendContactEmail";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      senderName: fname.value + ' ' + lname.value,
      senderEmail: email.value,
      subject: subject.value,
      message: message.value,
    });
    const requestOptions = {
      method: "POST",
      body,
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        document.getElementById("result-text").innerText =
          "Email sent successfully!";
      })
      .catch((error) => {
        document.getElementById("result-text").innerText =
          "An unkown error occured.";
      });


      //clear the form values
      fname.value = "";
      lname.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";

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

          <textarea name="message" type="text" id="msg" required></textarea>
        </section>

        <br></br>

        {/* Submit btn */}
        <input name="submit" type="submit" className={classes.submit}></input>

        {/* results of the submission */}
        <div>
          <p id="result-text"></p>
        </div>
      </form>
    </div>
  );
};

export default Form;
