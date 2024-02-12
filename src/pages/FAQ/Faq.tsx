import { lazy, Suspense } from "react";
import { Button } from "react-bootstrap";
import FaqCard from "../../components/FaqCard/FaqCard";
import { useData } from "../../contexts/Data";

const Header = lazy(() => import("../../components/Header/Header"));

const FAQ = () => {
  const { faq } = useData();
  const { SBHSenior, SBHJunior } = faq;
  return (
    <>
      <Suspense fallback={<></>}>
        <Header
          text="Frequently Asked Questions"
          image="https://sih.gov.in/img1/faq-bg.jpg"
        />
      </Suspense>
      <div
        className="w-100"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "white",
          padding: "40px 55px",
        }}
      >
        {/* <h5 className="fw-bold">SBH 2024</h5> */}
        {/* <h2 className="fw-bold">
          IDEA SUBMISSION PROCESS FOR SMART INDIA HACKATHON 2022
        </h2> */}
      </div>
      <div
        style={{
          backgroundImage: 'url("https://sih.gov.in/img1/sponsor-bg.jpg")',
          backgroundSize: "cover",
          padding: "100px 0",
        }}
      >
        <div className="w-75 mx-auto">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <h3
              className="fw-bold caveat"
              style={{ color: "var(--heading-color)" }}
            >
              SBH SENIOR
            </h3>
            <Button
              variant="success"
              style={{
                outline: "none",
                border: "none",
                padding: "10px 30px",
                borderRadius: "50px",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              <a
                href="https://smart-bengal-hackathon-1.devfolio.co/"
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </Button>
          </div>
          {/* <h1 className="fw-bold caveat"
              style={{ color: "black" }}>COMING SOON</h1> */}
          <div
            className="w-100 d-flex flex-column mt-3"
            style={{ gap: "10px" }}
          >
            {SBHSenior.map((item, index) => {
              return (
                <FaqCard
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              );
            })}
          </div>
        </div>
        <div className="w-75 mx-auto mt-5">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <h3
              className="fw-bold caveat"
              style={{ color: "var(--heading-color)" }}
            >
              SBH JUNIOR
            </h3>
            <Button
              variant="success"
              style={{
                outline: "none",
                border: "none",
                padding: "10px 30px",
                borderRadius: "50px",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              <a
                href="https://smart-bengal-hackathon-1.devfolio.co/"
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </Button>
          </div>
          {/* <h1 className="fw-bold caveat"
              style={{ color: "black" }}>COMING SOON</h1> */}
          <div
            className="w-100 d-flex flex-column mt-3"
            style={{ gap: "10px" }}
          >
            {SBHJunior.map((item, index) => {
              return (
                <FaqCard
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
