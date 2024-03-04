import { lazy, Suspense } from "react";
import "./ProcessFlow.style.css";
import { useData } from "../../contexts/Data";
import banner from "../../assets/sbh-banner.jpg";
import DescriptionCard from "../Home/component.body.description";
import { FadeIn } from "react-slide-fade-in/dist/fade-in";

const ProcessFlow = () => {
  const Themes = lazy(() => import("../Home/component.body.themes"));

  const { title, descriptionCards, pf } = useData();
  return (
    <>
      <div className="banner_container">
        <img src={banner} className="banner_img" alt="" />
        <div className="carosal_caption">
          <h3 className=" text-uppercase banner_tag">
            Smart Bengal Hackathon 2024
          </h3>
          <h5 className="text-uppercase banner_subtxt">
            software & hardware edition
          </h5>
          <p className="banner_para">
            Share your problems and get them solved by students across Bengal
          </p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center py-5 main-container">
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
              Smart Bengal Hackathon is a statewide initiative to provide
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
                <span>Class 8th-12th</span>
              </div>
              <div className="d-grid">
                <span className="text-uppercase fw-bold fs-2">sbh senior</span>
                <span>College/University/Polytechnic Students</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block text-center p-5">
          <span
            className="text-uppercase fw-bold fs-2"
            style={{ color: "var(--heading-color)" }}
          >
            WHY JOIN SBH?
          </span>
          <div className="d-flex flex-row flex-wrap justify-content-center mt-5">
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
        <div
          className="w-75  process-container text-center"
          style={{ backgroundColor: "var(--invert-color)" }}
        >
          <div
            className="text-uppercase fw-bold fs-2 mt-4 mb-3"
            style={{ color: "var(--heading-color)" }}
          >
            PROCESS FLOW
          </div>
          <div className="d-grid process_flow_grid pb-5">
            {pf.map((card) => (
              <FadeIn
                from="left"
                positionOffset={150}
                triggerOffset={25}
                delayInMilliseconds={100}
              >
                <div
                  style={{
                    boxShadow: "inset 0px 1px 5px rgba(0, 0, 0, 0.15)",
                  }}
                  className="col-md-4 p-4 process_box_main"
                >
                  <div className="d-flex flex-column justify-content-between">
                    <span className="text-uppercase">{card.title}</span>

                    <p
                      className="text-process"
                      dangerouslySetInnerHTML={{ __html: card.desc }}
                    ></p>
                    <div
                      style={{
                        height: "fit-content",
                      }}
                      className="w-100 d-flex justify-content-center align-items-center"
                    >
                      <img
                        src={`${card.img}`}
                        style={{
                          width: "140px",
                          height: "140px",
                        }}
                        alt="card"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessFlow;
