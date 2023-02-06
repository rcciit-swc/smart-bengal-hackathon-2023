import { lazy, Suspense, useEffect, useState } from "react";
import { useData } from "../../contexts/Data";
import DescriptionCard from "./component.body.description";
import "./Home.style.css";
import Sponsors from "./Sponsors";
import carousel2 from "../../assets/caraousel-images/sbh-banner-3.webp";

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
      style={{ width: "100vw" }}
      className="d-flex flex-column align-items-center"
    >
      {/* <CarouselContainer /> */}
      <img
        className="d-block w-100"
        height="500px"
        width="auto"
        src={carousel2}
        alt="Second slide"
      />
      <div
        style={{ backgroundColor: `var(--primary-color-light)` }}
        className="mt-5 w-100 h-100 d-flex flex-column align-items-center"
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
            <DescriptionCard
              key={title + index}
              index={index}
              title={Object.keys(card)[0]}
              desc={Object.values(card)[0]}
            />
          ))}
        </div>
      </div>
      <div className="my-5 d-flex what-is-sbh">
        <div className="d-flex flex-column">
          <h1
            style={{ color: `var(--heading-color)` }}
            className="text-uppercase fw-bold"
          >{`what is sbh?`}</h1>
          <span className="fs-5">{about}</span>
        </div>
        <img src={whatIsSbhIcon} alt="what is sbh" />
      </div>
      <Suspense fallback={<></>}>
        <Themes />
      </Suspense>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <h2
          className="w-100 text-center fw-bold my-5"
          style={{ color: "var(--heading-color)" }}
        >
          Important Dates and Deadlines
        </h2>
        <ul style={{ fontSize: "20px" }}>
          <li>
            <b>Registration & Idea Submission:</b> 10th March, 2023.
          </li>
          <li>
            <b>Shortlisted Teams Announcement:</b> 25th March.2023.
          </li>
          <li>
            <b>Smart Bengal Hackathon Begins:</b> 11th April,2023 for SBH Junior
            & 12th April, 2023 for SBH Senior
          </li>
        </ul>
      </div>
      <Sponsors />
    </main>
  );
};

export default Home;
