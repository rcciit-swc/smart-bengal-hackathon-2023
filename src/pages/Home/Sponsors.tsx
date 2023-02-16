import React, { useEffect, useState } from "react";
import "./Sponsors.css";
import { useDataContext } from "../../contexts/DataProvider";

const Sponsors: React.FC = () => {

  const { getSponsors } = useDataContext();
  const [sponsorList, setSponsorList] = useState<any>();

  useEffect(() => {
    async function fetchSponsorDetails() {
      const sponsors = await getSponsors();
      setSponsorList([...sponsors]);
    }
    fetchSponsorDetails();
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="container pt-5 pb-5">
        <h1
          className="w-100 text-center fw-bold mt-5"
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
            Knowledge Partner
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
            src="https://i.imgur.com/sOxgwCC.jpg"
            alt="sponsor"
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
            src="https://i.imgur.com/uzVX7pa.jpg"
            alt="sponsor"
          />
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
            src="2.jpeg"
            alt="sponsor"
          />
          
          <img
            className="sponsor-img img-fluid"
            src="https://i.imgur.com/RN8dyJt.jpg"
            alt="sponsor"
          />
          <br />  
          <img
            className="sponsor-img img-fluid"
            src="https://imgur.com/ij4C4T3.png"
            alt="sponsor"
            style={{
              width:"50px",
              height:"50px"
            }}
          />
          <img
            className="sponsor-img img-fluid"
            src="1.jpeg"
            alt="sponsor"
            style={{
              width:"130px"
            }}
          />

        </div>
      </div>
    </>
  );
};

export default Sponsors;