import { useEffect, useState } from "react";
import CarouselContainer from "../../components/carousel/Carousel";
import { useData } from "../../contexts/Data";
import DescriptionCard from "./component.body.description";
import "./Home.style.css";

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
      <CarouselContainer />
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
      {/* <div
        style={{ backgroundColor: `var(--primary-color-light)` }}
        className="mt-5 w-100 h-100 d-flex flex-column align-items-center"
      >
        <h1
          style={{ color: `var(--heading-color)` }}
          className="text-uppercase fw-bold mt-3"
        >
          {title}
        </h1>
        <h5 className="fw-light fs-6">{description}</h5>
        <div className="w-100 mt-5 row row-cols-4 justify-content-center">
          {themes.map((theme) => (
            <div
              style={{ backgroundColor: `var(--primary-color-light)` }}
              className="m-3 p-3 d-flex fw-bold flex-column align-items-center"
            >
              <h3 className="fw-bold">{theme}</h3>
            </div>
          ))}
        </div>
      </div> */}
    </main>
  );
};

export default Home;
