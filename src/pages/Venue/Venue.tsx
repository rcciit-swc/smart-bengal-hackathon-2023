import { lazy, Suspense } from "react";
import "./Venue.style.css";

const Header = lazy(() => import("../../components/Header/Header"));

const Venue = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Header
          text="Venue"
          image="https://college4u.in/wp-content/uploads/2018/03/RCC3-830x254.jpg"
        />
      </Suspense>
      <div
        id="fix-venue"
        className="w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <h2
          className="w-100 fw-bold my-5"
          style={{ color: "var(--heading-color)" }}
        >
          RCC Institute of Information Technology
          <br />
          <span>
            Canal South Road, Beliaghata
            <br />
            Kolkata- 700015, West Bengal, India
          </span>
        </h2>
        <div className="d-flex flex-column" id="fix-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.1384452715624!2d88.39580110048716!3d22.55838225625057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ad44b718c770205!2sRCC%20INSTITUTE%20OF%20INFORMATION%20TECHNOLOGY%20(New%20Campus)!5e0!3m2!1sen!2sin!4v1675389260805!5m2!1sen!2sin"
            title="RCC Institute of Information Technology"
            style={{ border: "0", width: "100%", height: "100%" }}
            loading="lazy"
            
          ></iframe>
          <a
            target={"_blank"}
            rel="noreferrer"
            title="Visit RCCIIT"
            id="rcciit-direction"
            className="btn-link"
            href="https://www.google.com/maps?saddr=My+Location&daddr=Rcc+institute+of+Information+Technology "
            style={{
              color: "var(--heading-color)",
              textDecoration: "underline",
            }}
          >
            Visit RCCIIT
          </a>
        </div>
      </div>
    </>
  );
};

export default Venue;
