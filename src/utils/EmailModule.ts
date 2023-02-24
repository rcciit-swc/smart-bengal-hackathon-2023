import React from "react";
import emailjs from "emailjs-com";

function EmailModule(props: any) {
  const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
  const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string;
  const userID = process.env.REACT_APP_EMAIL_USER_ID as string;

  //Dummy data for testing
  var templateParams = {
    to_name: props.name,
    to_email: props.email,
    message: props.message,
    category: props.category,
  };

  //function to send email
  function sendEmail() {
    var isSuccessful = false;

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (result) => {
        console.log(result.text);
        isSuccessful = true;
      },
      (error) => {
        console.log(error.text);
        console.log(process.env.YOUR_SERVICE_ID as string);
      }
    );

    console.log(isSuccessful);
    return isSuccessful;
  }

  const isSubmitted = sendEmail();

  console.log(isSubmitted);
}

export default EmailModule;
