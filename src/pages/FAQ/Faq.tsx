import React from "react";
import FaqCard from "../../components/FaqCard/FaqCard";
import { useData } from "../../contexts/Data";

const FAQ = () => {
  const { faq } = useData();
  const { SBHSenior, SBHJunior } = faq;
  return (
    <main className="w-100">
      <div className={"w-100 position-relative"}>
        <img
          className={"d-block"}
          src={"https://sih.gov.in/img1/faq-bg.jpg"}
          alt={"projectImplementation"}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <h1
          className="carousel-caption fw-bold text-center position-absolute"
          style={{
            fontSize:
              "min(max(10px, calc(0.625rem + ((1vw - 0.01px) * 2.6055))), 60px)",
            top: "50%",
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>
      <div
        className="w-100"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "white",
          padding: "40px 55px",
        }}
      >
        <h5 className="fw-bold">SBH 2023</h5>
        <h2 className="fw-bold">
          IDEA SUBMISSION PROCESS FOR SMART INDIA HACKATHON 2022
        </h2>
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
            <h3 className="fw-bold" style={{ color: "var(--heading-color)" }}>
              FAQ FOR SBH SENIOR
            </h3>
            <button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "var(--heading-color)",
                color: "white",
                padding: "10px 30px",
                borderRadius: "50px",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              <a
                href="https://forms.gle/Pw93DdyUN9t1h59E8"
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </button>
          </div>
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
            <h3 className="fw-bold" style={{ color: "var(--heading-color)" }}>
              FAQ FOR SBH JUNIOR
            </h3>
            <button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "var(--heading-color)",
                color: "white",
                padding: "10px 30px",
                borderRadius: "50px",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              <a
                href="https://forms.gle/Pw93DdyUN9t1h59E8"
                target="_blank"
                rel="noreferrer"
              >
                Register Now
              </a>
            </button>
          </div>
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
    </main>
  );
};

export default FAQ;
