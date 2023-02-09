import React from "react";
import "./Sponsors.css";
import sponsor3 from "../../assets/sponsors/sponsor3.jpg";
import sponsor4 from "../../assets/sponsors/sponsor4.png";
import ieeeSponsor from "../../assets/sponsors/IEEE-Logo.png";
import csiLogo from "../../assets/sponsors/new CSI logo.jpg";
import ieee_cis from "../../assets/sponsors/IEEE-CIS-new-logo.jpg";

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
            src={ieeeSponsor}
            width="150px"
            height="auto"
            alt="sponsor1"
          />
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
          <img
            className="sponsor-img img-fluid"
            src={ieee_cis}
            alt="sponsor"
          />
          {/* <img
            className="sponsor-img img-fluid"
            src="3.jpeg"
            alt="sponsor"
          /> */}
          <img
            className="sponsor-img img-fluid"
            // src="https://imgur.com/80slGFz.png"
            src={csiLogo}
            alt="sponsor4"
          />
          <img className="sponsor-img img-fluid" src={sponsor3} alt="sponsor3" />
          <img className="sponsor-img img-fluid" src={sponsor4} alt="sponsor4" />
          <img
            className="sponsor-img img-fluid"
            src="https://imgur.com/ij4C4T3.png"
            alt="sponsor"
          />
          <img
            className="sponsor-img img-fluid"
            src="https://i.imgur.com/RN8dyJt.jpg"
            alt="sponsor"
          />
          <img
            className="sponsor-img img-fluid"
            src="2.jpeg"
            alt="sponsor"
          />
          <img
            className="sponsor-img img-fluid"
            src="1.jpeg"
            alt="sponsor"
          />

        </div>
      </div>
    </>
  );
};

export default Sponsors;
