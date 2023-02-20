import React from "react";
import { useData } from "../../contexts/Data";
import { Button, Form } from "react-bootstrap";

const ContactUs = () => {

  const { contact } = useData();

  return (
    <main className="w-100"
    style={{
      backgroundColor: "var(--primary-color-light)",
    }}
    >
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block eligibility"}
          src={
            "https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/09/Capture_HAckathon_wordpress.jpg"
          }
          alt={"Contact Us"}
          style={{ height: "46vh", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="carousel-caption fw-bold text-center text-uppercase "
          style={{
            fontSize:
              "min(max(40px, calc(0.625rem + ((1vw - 0.01px) * 2.6055))), 60px)",
            color: "white",
          }}
        >
          Contact Us
        </h1>
      </div>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div
          className="w-75 d-flex flex-row justify-content-evenly align-items-center my-5 flex-wrap"
          style={{
            backgroundColor: "white",
          }}
        >
          <div
          className="d-flex flex-column text-left my-3 "
          style={{
          }}
          >
            <h1 className="fw-bold fs-1">Ask A Question</h1>
            <Form
            style={{
            }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select aria-label="Default select example"
                style={{
                  backgroundColor: "var(--primary-color-light)",
                }}
                >
                  <option>Select Category</option>
                  <option value="1">Sponsors</option>
                  <option value="2">Partners</option>
                  <option value="3">Participate as Team</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Messages"
              />
            </Form.Group>
            </Form>
            <Button
            className="w-100"
            >
              Send Message
            </Button>
          </div>
          <div
          className="my-5"
          >
          <div
      id="contact"
      style={{
        backgroundColor: "var(--primary-color",
        color: "var(--invert-color)",
        borderRadius: "30px"
      }}
      className="d-flex flex-column justify-content-around py-4"
      
    >
      <div className="d-flex flex-column align-items-start px-3">
        <p className="text-uppercase fs-5 fw-bold">Follow us</p>
        <a href="#" className="fs-6 copyright">
          © 2022-23 Smart Bengal Hackathon. All rights reserved
        </a>
      </div>
      <div className="d-flex flex-column align-items-start px-3">
        <p className="text-uppercase fs-5 fw-bold mt-3">contact us</p>
        <div className="d-flex footer-content">
          <span>Email:&nbsp;</span>
          {contact.email.map((email, index) => {
            return (
              <a
                key={index}
                style={{ paddingRight: "10px" }}
                href={`mailto:${email}`}
              >
                {email}
              </a>
            );
          })}
        </div>
        <div className="d-flex footer-content mb-3 flex-wrap">
          <span>Phone:&nbsp;</span>
          {contact.phone.map((phone, index) => {
            return (
              <a
                key={phone}
                style={{ paddingRight: "20px" }}
                href={`tel:${phone}`}
                className="contact"
              >
                {phone}
              </a>
            );
          })}
        </div>
        <div className="d-flex flex-column footer-content mb-4">
          <div>Alimpan De</div>
          <div>Email: <a href={`mailto:${'de.alimpan5@gmail.com'}`}>de.alimpan5@gmail.com</a></div>
          <div>Phone: <a href={`tel:${'+916289210018'}`}>+916289210018</a></div>
        </div>
        <div className="d-flex flex-column footer-content">
          <div>Mainak Hazra</div>
          <div>Email: <a href={`mailto:${'mainakhajra15@gmail.com'}`}>mainakhajra15@gmail.com</a></div>
          <div>Phone: <a href={`tel:${'+918768660200'}`}>+918768660200</a></div></div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
