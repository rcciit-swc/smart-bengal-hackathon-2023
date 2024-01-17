import { useData } from "../../contexts/Data";
import "./Footer.style.css";

const Footer = () => {
  const { contact } = useData();
  return (
    <div
      id="contact"
      style={{
        backgroundColor: "black",
        color: "var(--invert-color)",
      }}
      className="d-flex flex-column justify-content-evenly py-4 flex-wrap align-items-center"
    >
      <div className="d-flex flex-column align-items-center px-3 justify-content-evenly my-3">
        <p className="text-uppercase fs-5 fw-bold montserrat">Follow us</p>
        <div></div>
        <a href="#" className="fs-6 copyright my-1 text-center poppins">
          © 2024-25 Smart Bengal Hackathon. All rights reserved
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
          <a
            href="https://discord.gg/7a7VB7HDvE"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-discord fs-1 copyright"></i>
          </a>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center px-3 my-3">
        <p className="fs-5 fw-bold px-3 montserrat">
          Developed By
        </p>
        <p className="fs-6 fw-bold px-3 montserrat align-items-left">
          Faculty Members
        </p>
        <div className="d-flex footer-content">
          {contact.developedByFaculty.name.map((item, index) => {
            return (
              <div
                key={index}
                className="d-flex flex-column px-3 mb-3 flex-wrap align-items-center justify-content-evenly montserrat"
              >
                <span>{item}</span>
                <span style={{ fontWeight: "200" }}>
                  <a href={`mailto:${contact.developedByFaculty.email[index]}`}>
                    {contact.developedByFaculty.email[index]}
                  </a>
                </span>
                <span style={{ fontWeight: "200" }}>
                  <a href={`tel:${contact.developedByFaculty.phone[index]}`}>
                    {contact.developedByFaculty.phone[index]}
                  </a>
                </span>
              </div>
            );
          })}
        </div>
        <p className="pt-2">Made with ❤️ by  <a className="underline" href="https://github.com/rcciit-swc/smart-bengal-hackathon-2023/contributors"
          target="_blank "
          rel="noreferrer noopener"> SBH Tech Team </a> </p>
      </div>
    </div>
  );
};

export default Footer;
