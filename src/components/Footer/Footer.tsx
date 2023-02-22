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
      className="d-flex flex-row justify-content-evenly py-4"
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
                  Phone:{" "}
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
  );
};

export default Footer;
