import { useData } from "../../contexts/Data";
import "./Footer.style.css";

const Footer = () => {
  const { contact } = useData();
  return (
    <div
    id="contact"
      style={{
        backgroundColor: "var(--primary-color",
        color: "var(--invert-color)",
      }}
      className="d-flex flex-row justify-content-around py-4"
    >
      <div className="d-flex flex-column align-items-start px-3">
        <p className="text-uppercase fs-5 fw-bold">Follow us</p>
        <div></div>
        <a href="#" className="fs-6 copyright">
          © 2022-23 Smart Bengal Hackathon. All rights reserved
        </a>
      </div>
      <div className="d-flex flex-column align-items-start px-3">
        <p className="text-uppercase fs-5 fw-bold">contact us</p>
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
        <div className="d-flex footer-content">
          <span>Phone:&nbsp;</span>
          {contact.phone.map((phone, index) => {
            return (
              <a
                key={phone}
                style={{ paddingRight: "10px" }}
                href={`tel:${phone}`}
                className="contact"
              >
                {phone}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
