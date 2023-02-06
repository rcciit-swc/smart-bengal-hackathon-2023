import React from "react";
import "./Sponsors.css";
import sponsor3 from "../../assets/sponsors/sponsor3.jpg";
import sponsor4 from "../../assets/sponsors/sponsor4.png";

const Sponsors: React.FC = () => {
  return (
    <>
      <div className="container pt-5 pb-5">
        <h1
          className="w-100 text-center fw-bold my-5"
          style={{ color: "var(--heading-color)" }}
        >
          Supporters of SBH 2023
        </h1>
        <div className="w-100 d-flex flex-row justify-content-center align-items-center">
          <div
            className="mx-2"
            style={{
              height: "1px",
              backgroundColor: "grey",
              width: "inherit",
            }}
          ></div>
          <h3
            className="text-center"
            style={{
              width: "inherit",
            }}
          >
            Organizing Partner
          </h3>
          <div
            className="mx-2"
            style={{
              height: "1px",
              backgroundColor: "grey",
              width: "inherit",
            }}
          ></div>
        </div>
        <div className="sponsor-wrapper mt-5">
          <img
            className="sponsor-img"
            src="https://imgur.com/fl3E9UF.png"
            width="150px"
            height="auto"
            alt="sponsor1"
          />
          <img
            className="sponsor-img"
            src="https://imgur.com/nmadch8.png"
            width="150px"
            height="auto"
            alt="sponsor1"
          />
          <img
            className="sponsor-img"
            src="https://imgur.com/JMMBIWJ.png"
            width="150px"
            height="auto"
            alt="sponsor1"
          />
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <div className="w-100 d-flex flex-row justify-content-center align-items-center">
          <div
            className="mx-2"
            style={{
              height: "1px",
              backgroundColor: "grey",
              width: "inherit",
            }}
          ></div>
          <h3
            className="text-center"
            style={{
              width: "inherit",
            }}
          >
            Technical Partner
          </h3>
          <div
            className="mx-2"
            style={{
              height: "1px",
              backgroundColor: "grey",
              width: "inherit",
            }}
          ></div>
        </div>
        <div className="sponsor-wrapper mt-5">
          <img className="sponsor-img" src={sponsor3} alt="sponsor3" />
          <img className="sponsor-img" src={sponsor4} alt="sponsor4" />
          <img
            className="sponsor-img"
            src="https://imgur.com/80slGFz.png"
            alt="sponsor4"
          />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
