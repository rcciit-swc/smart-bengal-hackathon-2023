import { useData } from "../../contexts/Data";
import "./Footer.style.css";

const Footer = () => {
  const { contact } = useData();
  return (
    <div
      id="contact"
      style={{
        backgroundColor: "var(--primary-color)",
        color: "var(--invert-color)",
      }}
      className="d-flex flex-row justify-content-evenly py-4 flex-wrap align-items-start"
    >
      <div className="d-flex flex-column align-items-center px-3 justify-content-evenly my-3">
        <p className="text-uppercase fs-5 fw-bold">Follow us</p>
        <div></div>
        <a href="#" className="fs-6 copyright my-1 text-center">
          © 2022-23 Smart Bengal Hackathon. All rights reserved
        </a>
        <a className="fs-6 copyright" href="mailto:sbh@rcciit.org.in">
          sbh@rcciit.org.in
        </a>
        <div className="w-50 d-flex justify-content-between my-4">
          <a
            href="https://www.facebook.com/profile.php?id=100090128125218"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-square fs-1 copyright"></i>
          </a>
          <a
            href="https://www.instagram.com/sbh_rcc_2023/"
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
        </div>
      </div>
      <div className="d-flex flex-column align-items-center px-3 my-3">
        <p className="text-uppercase fs-5 fw-bold px-3">contact us</p>
        <div className="d-flex footer-content">
          {contact.name.map((item, index) => {
            return (
              <div
                key={index}
                className="d-flex flex-column px-3 mb-3 flex-wrap align-items-center justify-content-evenly"
              >
                <span>{item}</span>
                <span>
                  <a href={`mailto:${contact.email[index]}`}>
                    {contact.email[index]}
                  </a>
                </span>
                <span>
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
