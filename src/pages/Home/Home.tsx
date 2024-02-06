import { lazy, Suspense, useEffect, useState } from "react";
import { useData } from "../../contexts/Data";
import "./Home.style.css";
import CarouselContainer from "../../components/carousel/Carousel";
import { FadeIn } from "react-slide-fade-in";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Devfolio from "../../components/Buttons/Devfolio";
const Circle = lazy(() => import("../../components/Blob/Circle"));
const Themes = lazy(() => import("./component.body.themes"));
const Sponsors24 = lazy(() => import("../../pages/Home/Sponsors24"));
const HomePrizes = lazy(() => import("./HomePrizes"));

const Home = () => {
  const { title, about } = useData();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main
      className="d-flex flex-column align-items-center position-relative"
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Suspense fallback={<></>}>
        <Circle
          width="600px"
          height="600px"
          blur="80"
          top="1300px"
          right="-400px"
          color="blue"
        />
        <Circle
          width="600px"
          height="600px"
          blur="80"
          top="1800px"
          left="-400px"
          color="orange"
        />
        <Circle
          width="600px"
          height="600px"
          blur="80"
          top="-25px"
          right="-450px"
          color="orange"
          bannerCircle="banner_circle"
        />
        <Circle
          width="600px"
          height="600px"
          blur="80"
          top="-25px"
          left="-450px"
          color="blue"
          bannerCircle="banner_circle"
        />
      </Suspense>
      <CarouselContainer />

      <div className="w-75  fs-5">
        <Marquee pauseOnHover={true} speed={100} gradient={false}>
          <span>
            <img
              src="https://thumbs.gfycat.com/DenseGaseousBobwhite-max-1mb.gif"
              alt=""
              width={60}
            />
            {/* <Link
              to={resultSeniorRoute}
              className="mx-2 text-decoration-underline"
            >
              Result for SBH Senior 2023.
            </Link> */}
          </span>
          <span>
            <img
              src="https://thumbs.gfycat.com/DenseGaseousBobwhite-max-1mb.gif"
              alt=""
              width={60}
            />
            {/* <Link
              to={resultJuniorRoute}
              className="mx-2 text-decoration-underline"
            >
              Result for SBH Junior 2023.
            </Link> */}
          </span>
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
      <Devfolio />
      <div
        className="apply-button"
        style={{
          width: "312px",
          height: "44px",
        }}
        data-hackathon-slug={"smart-bengal-hackathon-1"}
        data-button-theme="white"
      ></div>

      <div className=" d-flex flex-column w-75 mt-2 sbh-title">
        <h2
          style={{ color: `var(--sub-heading)` }}
          className="caveat text-uppercase fw-bold px-3"
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
              {/* <h1>COMING SOON</h1> */}
              {/* <p>
                Important dates and deadlines vary depending on the context.
                It's crucial to keep track of them for tasks such as project
                submissions, application deadlines, and events. Missing
                deadlines can lead to penalties and missed opportunities.
              </p> */}
              {/* <Button
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
                  href="https://smart-bengal-hackathon-1.devfolio.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Now
                </a>
              </Button> */}
              <p> </p>
              <ul style={{ fontSize: "20px" }}>
                <li>
                  <b>Smart Bengal Hackathon Registration Starts:</b> 7th
                  February,2024
                </li>
                <li>
                  <b>Registration Closed:</b> 12th March 2024
                </li>
                <li>
                  <b>Smart Bengal Hackathon:</b> 16th April 2024 for SBH Junior
                  & 17th April 2024 for SBH Senior
                </li>
              </ul>
            </FadeIn>
          </div>
          {/* <FadeIn
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
                  <span className="fw-bold pb-2 bubble__title">
                    30th March(Senior) & 2nd April (Junior)
                  </span>
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
                    28th Feb - 23th March(Senior), 31st March(Junior)
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
          </FadeIn> */}
        </div>
      </div>
      <Suspense fallback={<></>}>
        <Themes />
      </Suspense>
      {/* <FadeIn
        from="left"
        positionOffset={150}
        triggerOffset={25}
        delayInMilliseconds={100}
      >
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div
            className="w-75 py-5 px-2 my-4 d-flex justify-content-evenly align-items-center flex-wrap"
            style={{
           
              color: "white",
              borderRadius: "50px",
            }}
          >
            <div className="d-flex flex-column align-items-start  w-75">
              <h1 className="text-uppercase fs-3 fw-bold poppins">
                Do you love data ?
              </h1>
              <p className="poppins fs-6 text-justify">
                Department of IT & Electronics, Government of West Bengal
                invites academicians, students, technologists from across the
                globe, to participate in The Anonymiser Hackathon and develop
                India's first data anonymizer with support from data innovation
                firm Sapio Analytics
              </p>
              
            </div>
            <div className="d-flex flex-column align-items-center justify-content-between gap-4">
              <div
                style={{
                  width: "200px",
                }}
              >
                <img
                  src="https://anonymiser.wb.gov.in/static/media/anonymiser_white.7a9f25dd821e51772791.png"
                  alt="anonymiser hackathon"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <img src="/hack.jpeg" style={{ width: "100%" }} />

              <Button
                className="rounded-button"
                style={{
                  backgroundColor: "#F88208",
                  boxShadow: "0px 8px 25px #F88208",
                  width: "200px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#f2be88";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#F88208";
                }}
              >
                <a
                  href="https://anonymiser.wb.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Know Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn> */}
      <Suspense fallback={<></>}>{/* <HomePrizes /> */}</Suspense>
      <Suspense fallback={<></>}>
        <Sponsors24 />
      </Suspense>
      {/* <div
        className="d-flex sponsor-form w-100 justify-content-center align-items-center py-5"
        style={{ height: "400px", padding: "0px 10vw" }}
      >
        <div
          className="partner__contact w-100 h-100 d-flex justify-content-between align-items-center my-5 py-5 px-3"
          style={{ backgroundColor: "#F88208", borderRadius: "50px" }}
        >
          <div
            className="d-flex flex-column justify-content-center align-items-left poppin mb-5"
            style={{ color: "white", marginLeft: "3vw" }}
          >
            <span className="text-uppercase fs-3 fw-semibold">
              Feeling Excited ?<br></br>Partner With Us.
            </span>
            <span className="fs-6">
              Fill the form to partner with us. Together, we can change the way
              <br />
              others think. So, let’s just take a step forward and solve the
              problem.
            </span> 
          </div>
          <div className="d-flex flex-column align-items-center">
            <img
              className=" mx-auto mb-2"
              src="https://i.imgur.com/9KWEdy0.png"
              alt="handshake_icon"
              width={200}
              height="auto"
            />
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
        </div>
      </div> */}
    </main>
  );
};

export default Home;
