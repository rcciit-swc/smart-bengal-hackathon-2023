import { lazy, Suspense } from "react";
import { useData } from "../../contexts/Data";
import DescriptionCard from "./component.body.description";
import "./Home.style.css";
import Sponsors from "./Sponsors";
import Marquee from "react-fast-marquee";
import CarouselContainer from "../../components/carousel/Carousel";
import { FadeIn } from "react-slide-fade-in";

const Themes = lazy(() => import("./component.body.themes"));

const Home = () => {
  const { title, description, descriptionCards, about } = useData();

  return (
    <main
      style={{
        width: "100vw",
        // backgroundColor: `var(--primary-color-light)`,
      }}
      className="d-flex flex-column align-items-center"
    >
      <CarouselContainer />
      <div className="w-75 my-2 fs-3">
        <Marquee pauseOnHover={true} speed={100} gradient={false}>
          <a
            href="https://anonymiser.wb.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            The Anonymiser Hackathon
          </a>
        </Marquee>
      </div>
      <div
        style={{ backgroundColor: `var(--primary-color-light)` }}
        className="w-100 h-100 d-flex flex-column align-items-center"
      >
        <h1
          style={{ color: `var(--heading-color)` }}
          className="text-uppercase fw-bold mt-5 px-3 text-center mb-4"
        >
          {title}
        </h1>
        <h5 className="fw-light fs-6 text-center px-4 mb-5">{description}</h5>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {descriptionCards.map((card, index) => (
            <FadeIn
              from="bottom"
              positionOffset={50}
              triggerOffset={25}
              delayInMilliseconds={50}
            >
              <DescriptionCard
                key={title + index}
                index={index}
                title={Object.keys(card)[0]}
                desc={Object.values(card)[0]}
              />
            </FadeIn>
          ))}
        </div>
      </div>
      <div className="my-5 d-flex flex-column">
        <h2
          style={{ color: `var(--heading-color)` }}
          className="caveat text-uppercase px-3"
        >
          smart bengal hackathon
        </h2>
        <FadeIn
          from="left"
          positionOffset={150}
          triggerOffset={25}
          delayInMilliseconds={100}
        >
          <div className="d-flex flex-column px-3">
            <h2
              style={{ color: `var(--secondary-heading-color)` }}
              className="text-uppercase fw-bold"
            >{`what is sbh?`}</h2>
            <span className="fs-5">{about}</span>
          </div>
        </FadeIn>
        <div className="d-flex dates__deadlines">
          <div className="d-flex flex-column dates__deadlines-text px-3">
            <h2
              className="w-100 fw-bold mt-5"
              style={{ color: "var(--secondary-heading-color)" }}
            >
              Important Dates and Deadlines
            </h2>
            <FadeIn
              from="bottom"
              positionOffset={150}
              triggerOffset={25}
              delayInMilliseconds={100}
            >
              <ul style={{ fontSize: "20px" }}>
                <li>
                  <b>Registration & Idea Submission:</b>Begins on 28 Feb 2023
                  and ends on 10 Mar 2023.
                </li>
                <li>
                  <b>Shortlisted Teams Announcement:</b> 25th March.2023.
                </li>
                <li>
                  <b>Smart Bengal Hackathon Begins:</b> 11th April,2023 for SBH
                  Junior & 12th April, 2023 for SBH Senior
                </li>
              </ul>
            </FadeIn>
          </div>
          <div className="position-relative dates__deadlines-bubbles">
            <div
              style={{
                background:
                  "linear-gradient(232.22deg, #3695E9 19.32%, #1768B0 39.03%)",
              }}
              className="circle position-absolute bubble__1"
            >
              <span className="text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold pb-2 bubble__title">25th Mar</span>
                <span className="bubble__text">
                  Shortlisted Team Announcements
                </span>
              </span>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(232.22deg, rgba(255, 46, 0, 0.74) 19.32%, #F88208 55.71%)",
              }}
              className="circle position-absolute bubble__2"
            >
              <span className="text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold pb-2 bubble__title">
                  28th Feb - 10th March
                </span>
                <span className="bubble__text">
                  Registration & Idea Submission
                </span>
              </span>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(233.98deg, rgba(248, 130, 8, 0.5) 18.97%, rgba(255, 46, 0, 0.62) 91.4%)",
              }}
              className="circle position-absolute bubble__3"
            >
              <span className="text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                <span className="fw-bold pb-2 bubble__title">
                  11th & 12hh March
                </span>
                <span className="bubble__text">
                  Finals for SBH Junior & Senior
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<></>}>
        <Themes />
      </Suspense>
      <Sponsors />
      <div className="mb-5 fs-3 ">
        <span>Want to sponsor us?</span>
        <a href="https://cutt.ly/sbh_partner" target="_blank" rel="noreferrer">
          <span
            className="mx-2 fw-bold"
            style={{ color: "var(--heading-color)" }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "var(--primary-color)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "var(--heading-color)";
            }}
          >
            Contact Us
          </span>
        </a>
      </div>
    </main>
  );
};

export default Home;
