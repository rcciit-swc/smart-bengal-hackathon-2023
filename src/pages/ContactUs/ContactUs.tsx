import React from "react";
import { useData } from "../../contexts/Data";
import { Button, Form } from "react-bootstrap";
import EmailModule from "../../utils/EmailModule";

const ContactUs = () => {
  const { contact } = useData();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    category: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    EmailModule(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
      category: "",
    });
  };

  return (
    <main
      className="w-100"
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
          <div className="d-flex flex-column text-left my-3 " style={{}}>
            <h1 className="fw-bold fs-1">Ask A Question</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select
                  aria-label="Default select example"
                  style={{
                    backgroundColor: "var(--primary-color-light)",
                  }}
                  value={formData.category}
                  onChange={(e) => {
                    setFormData({ ...formData, category: e.target.value });
                  }}
                >
                  <option>Select Category</option>
                  <option value="Sponsors">Sponsors</option>
                  <option value="Partners">Partners</option>
                  <option value="Participate as Team">
                    Participate as Team
                  </option>
                  <option value="Join SBH Team">Join SBH Team</option>
                  <option value="SPOC">SPOC</option>
                  <option value="Others">Others</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Messages"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                />
              </Form.Group>
              <Button className="w-100" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
          <div className="my-5">
            <div
              id="contact"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--invert-color)",
                borderRadius: "30px",
              }}
              className="d-flex flex-column justify-content-around py-4 px-3"
            >
              <div className="d-flex flex-column align-items-start px-3">
                <p className="text-uppercase fs-5 fw-bold">Follow us</p>
                <a href="#" className="fs-6 copyright">
                  © 2022-23 Smart Bengal Hackathon. All rights reserved
                </a>
              </div>
              <div className="d-flex flex-column align-items-start px-3">
                <p className="text-uppercase fs-5 fw-bold mt-3">contact us</p>
                <div className="d-flex footer-content flex-column">
                  {contact.name.map((item, index) => {
                    return (
                      <div className="d-flex flex-column px-3 mb-3 flex-wrap">
                        <span>{item}</span>
                        <span>
                          Email:{" "}
                          <a href={`mailto:${contact.email[index]}`}>
                            {contact.email[index]}
                          </a>
                        </span>
                        <span>
                          Email:{" "}
                          <a href={`tel:${contact.phone[index]}`}>
                            {contact.phone[index]}
                          </a>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
