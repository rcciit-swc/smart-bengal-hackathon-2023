import React from "react";
import emailjs from "emailjs-com";

export default function EmailModule(props: any) {
  const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
  const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string;
  const userID = process.env.REACT_APP_EMAIL_USER_ID as string;


  // const [templateParams, setTemplateParams] = React.useState({
  //   to_name: props.name,
  //   to_email: props.email,
  //   message: props.message,
  // });



  //Dummy data for testing
  var templateParams = {
    to_name: props.name ,
    to_email: props.email,
    message: props.message,
    category: props.category,
  };

  //function to send email
   
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
        console.log(process.env.YOUR_SERVICE_ID as string);
      }
    );
  
}
