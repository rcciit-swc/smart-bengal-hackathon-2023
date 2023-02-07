import { lazy, Suspense } from "react";
import "./ProcessFlow.style.css";
import { useData } from "../../contexts/Data";
import banner from "../../assets/sbh-banner.jpg";
import DescriptionCard from "../Home/component.body.description";

const ProcessFlow = () => {
  const Themes = lazy(() => import("../Home/component.body.themes"));
  const Committee = lazy(() => import("../../components/Committee/Committee"));

  const { title, descriptionCards, pf } = useData();
  return (
    <>
      <div className="banner_container">
        <img src={banner} className="banner_img" />
        <div className="carosal_caption">
          <h3 className=" text-uppercase banner_tag">
            Smart Bengal Hackathon 2023
          </h3>
          <h5 className="text-uppercase banner_subtxt">
            software & hardware edition
          </h5>
          <p className="banner_para">
            Share your problems and get them solved by students across Bengal
          </p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center my-5 main-container">
        <div
          style={{
            backgroundColor: "var(--secondary-color)",
            color: "var(--invert-color  )",
          }}
          className="w-75 d-flex overview-container p-5 justify-content-between"
        >
          <div className="d-flex flex-column ">
            <span className="text-uppercase fw-bold fs-2">overview</span>
            <span className="text-capitalize ">
              Smart Bengal Hackathon 2023 is a statewide initiative to provide
              students a platform to solve some of the pressing problems we face
              in our daily lives, and thus inculcate a culture of product
              innovation and a mindset of problem solving.
            </span>
            <span className="text-uppercase fw-bold fs-2 mt-4">
              who can participate?
            </span>
            <div className="d-flex gap-4 mt-4">
              <div className="d-grid">
                <span className="text-uppercase fw-bold fs-2 ">sbh junior</span>
                <span>Class 9th-12th & Polytechnic Students</span>
              </div>
              <div className="d-grid">
                <span className="text-uppercase fw-bold fs-2">sbh senior</span>
                <span>College & University Students</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block text-center p-5">
          <span
            className="text-uppercase fw-bold fs-2"
            style={{ color: "var(--heading-color)" }}
          >
            WHY JOIN SBH 2023?
          </span>
          <div className="d-flex flex-row flex-wrap mt-5">
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
        <div
          className="w-75  process-container p-5 text-center"
          style={{ backgroundColor: "var(--invert-color)" }}
        >
          <span
            className="text-uppercase fw-bold fs-2"
            style={{ color: "var(--heading-color)" }}
          >
            PROCESS FLOW
          </span>
          <div className="row p-4">
            {pf.map((card) => (
              <div className="col-md-4 p-4">
                <div className="process-box-main">
                  <p className="text-process" dangerouslySetInnerHTML={{__html:card.desc}}></p>
                  <div className="d-grid">
                    <span className="text-uppercase">{card.title}</span>
                    <img src={`${card.img}`} className="m-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Suspense fallback={<></>}>
          <Themes />
          {/* <Committee /> */}
        </Suspense>
      </div>
    </>
  );
};

export default ProcessFlow;
