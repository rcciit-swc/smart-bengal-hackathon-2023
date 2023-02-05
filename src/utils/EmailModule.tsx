import React from "react";
import emailjs from "emailjs-com";



export default function EmailModule() {
  
  
  const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
  const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string;
  const userID = process.env.REACT_APP_EMAIL_USER_ID as string;
  
  //Dummy data for testing
  var templateParams = {
    to_name: "James",
    to_email: "sohambanerjee4abc@hotmail.com",
    message: "test",
  };

  //function to send email
  async function sendEmail(values: any) {

    emailjs
      
      .send(serviceID, templateID, values, userID)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          console.log(process.env.YOUR_SERVICE_ID as string)

        }
      );
  }

  return (
    //button to send email
    <main>
      <button onClick={() => sendEmail(templateParams)}>Send</button>
    </main>
  );
}
