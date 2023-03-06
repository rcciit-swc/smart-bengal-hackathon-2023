import { lazy, Suspense, useEffect, useState } from "react";
import { useData } from "../../contexts/Data";
import DescriptionCard from "./component.body.description";
import "./Home.style.css";
import Sponsors from "./Sponsors";
import Marquee from "react-fast-marquee";
import CarouselContainer from "../../components/carousel/Carousel";
import { FadeIn } from "react-slide-fade-in";
import { Link } from "react-router-dom";
import { problemStatementsRoute } from "../../Routes";

const Themes = lazy(() => import("./component.body.themes"));

const Home = () => {
  const { title, description, descriptionCards, about } = useData();

  const [whatIsSbhIcon, setWhatIsSbhIcon] = useState("");

  useEffect(() => {
    import("../../assets/what-is-sbh.svg").then((whatIsSbh) => {
      setWhatIsSbhIcon(whatIsSbh.default);
    });
  }, []);

  return (
    <main
      style={{
        width: "100vw",
        // backgroundColor: `var(--primary-color-light)`,
      }}
      className="d-flex flex-column align-items-center"
    >
      <CarouselContainer />
      {/* <img
        className="d-block img-fluid"
        // src="https://imgur.com/CnAq9PL.png"
        src={homeBanner}
        alt="Second slide"
      /> */}
      <div
        className="w-75 my-2 fs-3"
        style={
          {
            // backgroundColor: `var(--primary-color-light)`,
          }
        }
      >
        <Marquee
          style={
            {
              // backgroundColor: `var(--primary-color-light)`,
            }
          }
          pauseOnHover={true}
          speed={100}
          gradient={false}
        >
          <a
            href="https://anonymiser.wb.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            The Anonymiser Hackathon
          </a>
          {/* |
          <Link to={problemStatementsRoute} className="mx-2">
            <span className="blink">Problem statements are Live</span>
          </Link>
          |<span className="mx-2 blink">No Registration Fees</span>| */}
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
      <div className="my-5 d-flex what-is-sbh">
        <FadeIn
          from="left"
          positionOffset={150}
          triggerOffset={25}
          delayInMilliseconds={100}
        >
          <div className="d-flex flex-column">
            <h1
              style={{ color: `var(--heading-color)` }}
              className="text-uppercase fw-bold"
            >{`what is sbh?`}</h1>
            <span className="fs-5">{about}</span>
          </div>
        </FadeIn>
        <FadeIn
          from="right"
          positionOffset={150}
          triggerOffset={25}
          delayInMilliseconds={100}
        >
          <img src={whatIsSbhIcon} alt="what is sbh" />
        </FadeIn>
      </div>
      <Suspense fallback={<></>}>
        <Themes />
      </Suspense>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center px-3">
        <h2
          className="w-100 text-center fw-bold my-5"
          style={{ color: "var(--heading-color)" }}
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
              <b>Registration & Idea Submission:</b>Begins on 28 Feb 2023 and
              ends on 10 Mar 2023.
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
      <Sponsors />
      <div className="mb-5 fs-3 ">
        <span>Want to sponsor us?</span>
        <a href="https://cutt.ly/sbh_partner" target="_blank" rel="noreferrer" >
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
