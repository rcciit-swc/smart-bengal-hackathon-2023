import { lazy, Suspense } from "react";
import { useData } from "../../contexts/Data";
// import DescriptionCard from "./component.body.description";
import "./Home.style.css";
import Sponsors from "./Sponsors";
import Marquee from "react-fast-marquee";
import CarouselContainer from "../../components/carousel/Carousel";
import { FadeIn } from "react-slide-fade-in";
import { Button } from "react-bootstrap";

const Themes = lazy(() => import("./component.body.themes"));

const Home = () => {
  const { title, about } = useData();

  return (
    <main
      // style={{
      //   width: "100vw",
      //   // backgroundColor: `var(--primary-color-light)`,
      // }}
      className="d-flex flex-column align-items-center"
      style={{
        overflowY: "hidden",
      }}
    >
      <div
        id="orange_circle"
        style={{ top: "-20%", right: "-35%", zIndex: "-1" }}
      ></div>
      <div
        id="blue_circle"
        style={{ top: "-20%", left: "-35%", zIndex: "-1" }}
      ></div>
      <div
        className="orange_circle_body"
        style={{ top: "200%", left: "-35%", zIndex: "-1" }}
      ></div>
      <div
        className="orange_circle_body"
        style={{ top: "300%", right: "-35%", zIndex: "-1" }}
      ></div>
      <div
        className="blue_circle_body"
        style={{ top: "400%", left: "-35%", zIndex: "-1" }}
      ></div>

      <div
        className="blue_circle_body"
        style={{ top: "500%", right: "-35%", zIndex: "-1" }}
      ></div>
      <div
        className="orange_circle_body"
        style={{ top: "600%", left: "-35%", zIndex: "-1" }}
      ></div>
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
      {/* <div
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
      </div> */}
      <div className="my-5 d-flex flex-column w-75">
        <h2
          style={{ color: `var(--heading-color)` }}
          className="caveat text-uppercase px-3"
        >
          {title}
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
              <p>
                Important dates and deadlines vary depending on the context.
                It's crucial to keep track of them for tasks such as project
                submissions, application deadlines, and events. Missing
                deadlines can lead to penalties and missed opportunities.
              </p>
              <Button
                className="rounded-button"
                style={{
                  backgroundColor: "#1768b0",
                  boxShadow: "0px 8px 25px #1768b0",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#508fc7";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#1768B0";
                }}
              >
                <a
                  href="https://unstop.com/o/2adeEYJ?lb=TzAP536"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Now
                </a>
              </Button>
              {/* <ul style={{ fontSize: "20px" }}>
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
              </ul> */}
            </FadeIn>
          </div>
          <FadeIn
            from="right"
            positionOffset={150}
            triggerOffset={25}
            delayInMilliseconds={100}
          >
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
                    28th Feb - 20th March
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
                    11th & 12th April
                  </span>
                  <span className="bubble__text">
                    Finals for SBH Junior & Senior
                  </span>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <Suspense fallback={<></>}>
        <Themes />
      </Suspense>
      <Sponsors />
      <div
        className="d-flex sponsor-form w-100 justify-content-center align-items-center py-5"
        style={{ height: "400px", padding: "0px 10vw" }}
      >
        <div
          className="w-100 h-100 d-flex justify-content-between align-items-center flex-wrap "
          style={{ backgroundColor: "#F88208", borderRadius: "50px" }}
        >
          <div
            className="d-flex flex-column justify-content-center align-items-left poppin my-5 mx-auto px-3"
            style={{ color: "white", marginLeft: "3vw" }}
          >
            <span className="text-uppercase fs-3 fw-semibold">
              Feeling Excited ?
            </span>
            <span className="text-uppercase fs-3 fw-semibold">
              Wanna Partner With Us ?
            </span>
            <span className="fs-6">
              Fill the form to partner with us. We together can change the way
              <br />
              other think. So, let’s just take a step forward and solve the
              problem
            </span>
          </div>
          <div className="mx-auto">
            <Button
              className="rounded-button poppins "
              style={{
                backgroundColor: "#000000",
                boxShadow: "0px 8px 25px #000000",
                fontWeight: "400",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = "invert(1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "invert(0)";
              }}
            >
              <a
                href="https://cutt.ly/sbh_partner"
                target="_blank"
                rel="noreferrer"
              >
                Support the Cause
              </a>
            </Button>
          </div>
          <img
            className=" mx-auto my-5"
            src="https://i.imgur.com/9KWEdy0.png"
            alt="handshake_icon"
            width={200}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
