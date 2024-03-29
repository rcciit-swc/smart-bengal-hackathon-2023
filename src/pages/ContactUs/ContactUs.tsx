import { lazy, Suspense, useState } from "react";
import { useData } from "../../contexts/Data";
import { Button, Form } from "react-bootstrap";
import EmailModule from "../../utils/EmailModule";

const Header = lazy(() => import("../../components/Header/Header"));

const ContactUs = () => {
  const { contact } = useData();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    EmailModule(formData);
    // console.log(isSubmitted)
    // if (isSubmitted) {
    //   setLoading(false);
    // }
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
      <Suspense fallback={<></>}>
        <Header
          text="Contact Us"
          image="https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/09/Capture_HAckathon_wordpress.jpg"
        />
      </Suspense>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div
          className="w-75 d-flex flex-row justify-content-evenly align-items-center my-5 flex-wrap"
          style={{
            backgroundColor: "white",
          }}
        >
          <div className="d-flex flex-column text-left py-3 px-2">
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
          <div
            id="contact"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--invert-color)",
              borderRadius: "30px",
            }}
            className="d-flex flex-column justify-content-around py-4 px-3 my-3"
          >
            <div className="d-flex flex-column align-items-start px-3">
              <p className="text-uppercase fs-5 fw-bold">Follow us</p>
              <a href="#" className="fs-6 copyright">
                © 2024-25 Smart Bengal Hackathon. All rights reserved
              </a>
              <a className="fs-6 copyright" href="mailto:sbh@rcciit.org.in">
                sbh@rcciit.org.in
              </a>
              <div className="w-50 d-flex justify-content-between mt-2">
              <a
            href="https://www.facebook.com/profile.php?id=100090128125218"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-square fs-1 copyright"></i>
          </a>
          <a
            href="https://www.instagram.com/sbh_rcciit?igsh=MW5jYmJienpuem8zYQ=="
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram fs-1 copyright"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/smart-bengal-hackathon/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fs-1 copyright"></i>
          </a>
          <a
            href="https://twitter.com/sbh_2024"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter fs-1 copyright"></i>
          </a>
          <a
            href="https://discord.gg/7a7VB7HDvE"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-discord fs-1 copyright"></i>
          </a>
              </div>
            </div>
            <div className="d-flex flex-column align-items-start px-3">
              <p className="text-uppercase fs-5 fw-bold mt-3">contact us</p>
              {/* <p className="fs-5 fw-bold px-3 montserrat">
                Convenor
              </p>
              <div className="d-flex footer-content flex-column">
                <div
                  className="d-flex flex-column px-3 mb-3 flex-wrap"
                >
                  <span>{contact.convenor.name}</span>
                  <span>
                    Email:{" "}
                    <a href={`mailto:${contact.convenor.email}`}>
                      {contact.convenor.email}
                    </a>
                  </span>
                  <span>
                    Phone:{" "}
                    <a href={`tel:${contact.convenor.phone}`}>
                      {contact.convenor.phone}
                    </a>
                  </span>
                </div>
              </div> */}
              <p className="fs-5 fw-bold px-3 montserrat">
                Smart Bengal Hackathon Junior
              </p>
              <div className="d-flex footer-content flex-column">
                {contact.SbhJunior.name.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex flex-column px-3 mb-3 flex-wrap"
                    >
                      <span>{item}</span>
                      <span>
                        Email:{" "}
                        <a href={`mailto:${contact.SbhJunior.email[index]}`}>
                          {contact.SbhJunior.email[index]}
                        </a>
                      </span>
                      <span>
                        Phone:{" "}
                        <a href={`tel:${contact.SbhJunior.phone[index]}`}>
                          {contact.SbhJunior.phone[index]}
                        </a>
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="fs-5 fw-bold px-3 montserrat">
                Smart Bengal Hackathon Senior
              </p>
              <div className="d-flex footer-content flex-column">
                {contact.SbhSenior.name.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex flex-column px-3 mb-3 flex-wrap"
                    >
                      <span>{item}</span>
                      <span>
                        Email:{" "}
                        <a href={`mailto:${contact.SbhSenior.email[index]}`}>
                          {contact.SbhSenior.email[index]}
                        </a>
                      </span>
                      <span>
                        Phone:{" "}
                        <a href={`tel:${contact.SbhSenior.phone[index]}`}>
                          {contact.SbhSenior.phone[index]}
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
    </main>
  );
};

export default ContactUs;
