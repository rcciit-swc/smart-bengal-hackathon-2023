import React, { useEffect, useState } from "react";
import secondprize from "../../assets/secondprize.png";
import firstprize from "../../assets/firstprize.png";
import thirdprize from "../../assets/thirdprize.png";
import { FadeIn } from "react-slide-fade-in";

const PrizeCard = ({ prize }: { prize: any }) => {
  const taskade = "+ Taskade Pro lifetime free subscription";
  const instruction =
    "*Prize money will be updated as more prizes will be added";

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1100) {
      setIsMobileScreen(true);
    }
  }, []);
  return (
    <>
      {isMobileScreen ? (
        <div className="my-5 d-flex w-100 justify-content-evenly flex-wrap">
          <div
            className="d-flex flex-column justify-content-evenly align-items-start p-4"
            style={{
              width: "350px",
              height: "350px",
              boxShadow: "0px 7px 34px -8px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img src={firstprize} alt="First Prize" width={200} />
            <span className="poppins fs-4 ms-5">{prize[0].prizeMoney}</span>
            <span className="poppins ms-5 fw-bold">{taskade}</span>
            <span className="poppins ms-5">{instruction}</span>
          </div>
          <div
            className="d-flex flex-column justify-content-evenly align-items-start p-5 mt-4"
            style={{
              width: "350px",
              height: "350px",
            }}
          >
            <img src={secondprize} alt="Second Prize" width={200} />
            <span className="poppins fs-4 ms-5">{prize[1].prizeMoney}</span>
            <span className="poppins ms-5 fw-bold">{taskade}</span>
            <span className="poppins ms-5">{instruction}</span>
          </div>
          <div
            className="d-flex flex-column justify-content-evenly align-items-start p-5 mt-5"
            style={{
              width: "350px",
              height: "350px",
            }}
          >
            <img src={thirdprize} alt="Second Prize" width={200} />
            <span className="poppins fs-4 ms-5">{prize[2].prizeMoney}</span>
            <span className="poppins ms-5 fw-bold">{taskade}</span>
            <span className="poppins ms-5">{instruction}</span>
          </div>
        </div>
      ) : (
        <div className="my-5 d-flex w-100 justify-content-evenly">
          <div
            className="d-flex flex-column justify-content-evenly align-items-start p-5 mt-4"
            style={{
              width: "400px",
              height: "400px",
            }}
          >
            <img src={secondprize} alt="Second Prize" width={200} />
            <span className="poppins fs-4 ms-5">{prize[1].prizeMoney}</span>
            <span className="poppins ms-5 fw-bold">{taskade}</span>
            <span className="poppins ms-5">{instruction}</span>
          </div>
          <div
            className="d-flex flex-column justify-content-evenly align-items-start p-4"
            style={{
              width: "400px",
              height: "400px",
              boxShadow: "0px 7px 34px -8px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img src={firstprize} alt="First Prize" width={200} />
            <span className="poppins fs-4 ms-5">{prize[0].prizeMoney}</span>
            <span className="poppins ms-5 fw-bold">{taskade}</span>
            <span className="poppins ms-5">{instruction}</span>
          </div>
          <div
            className="d-flex flex-column justify-content-evenly align-items-start p-5 mt-5"
            style={{
              width: "400px",
              height: "400px",
            }}
          >
            <img src={thirdprize} alt="Second Prize" width={200} />
            <span className="poppins fs-4 ms-5">{prize[2].prizeMoney}</span>
            <span className="poppins ms-5 fw-bold">{taskade}</span>
            <span className="poppins ms-5">{instruction}</span>
          </div>
        </div>
      )}
      {/* <div className="my-5 d-flex w-100 justify-content-evenly ">
        <div
          className="d-flex flex-column justify-content-evenly align-items-start p-5 mt-4"
          style={{
            width: "400px",
            height: "400px",
          }}
        >
          <img src={secondprize} alt="Second Prize" width={200} />
          <span className="poppins fs-4 ms-5">{prize[1].prizeMoney}</span>
          <span className="poppins ms-5 fw-bold">{taskade}</span>
          <span className="poppins ms-5">{instruction}</span>
        </div>
        <div
          className="d-flex flex-column justify-content-evenly align-items-start p-4"
          style={{
            width: "400px",
            height: "400px",
            boxShadow: "0px 7px 34px -8px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img src={firstprize} alt="First Prize" width={200} />
          <span className="poppins fs-4 ms-5">{prize[0].prizeMoney}</span>
          <span className="poppins ms-5 fw-bold">{taskade}</span>
          <span className="poppins ms-5">{instruction}</span>
        </div>
        <div
          className="d-flex flex-column justify-content-evenly align-items-start p-5 mt-5"
          style={{
            width: "400px",
            height: "400px",
          }}
        >
          <img src={thirdprize} alt="Second Prize" width={200} />
          <span className="poppins fs-4 ms-5">{prize[2].prizeMoney}</span>
          <span className="poppins ms-5 fw-bold">{taskade}</span>
          <span className="poppins ms-5">{instruction}</span>
        </div>
      </div> */}
      {/* {isMobileScreen && (
        <div className="my-5 d-flex w-100 justify-content-evenly flex-wrap">
          <div
            className="d-flex flex-column justify-content-evenly align-items-start p-4"
            style={{
              width: "400px",
              height: "400px",
              boxShadow: "0px 7px 34px -8px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img src={firstprize} alt="First Prize" width={200} />
            <span className="poppins fs-4 ms-5">{prize[0].prizeMoney}</span>
            <span className="poppins ms-5 fw-bold">{taskade}</span>
            <span className="poppins ms-5">{instruction}</span>
          </div>
          <div
            className="d-flex flex-column justify-content-evenly align-items-start p-5 mt-4"
            style={{
              width: "400px",
              height: "400px",
            }}
          >
            <img src={secondprize} alt="Second Prize" width={200} />
            <span className="poppins fs-4 ms-5">{prize[1].prizeMoney}</span>
            <span className="poppins ms-5 fw-bold">{taskade}</span>
            <span className="poppins ms-5">{instruction}</span>
          </div>
          <div
            className="d-flex flex-column justify-content-evenly align-items-start p-5 mt-5"
            style={{
              width: "400px",
              height: "400px",
            }}
          >
            <img src={thirdprize} alt="Second Prize" width={200} />
            <span className="poppins fs-4 ms-5">{prize[2].prizeMoney}</span>
            <span className="poppins ms-5 fw-bold">{taskade}</span>
            <span className="poppins ms-5">{instruction}</span>
          </div>
        </div>
      )} */}
    </>
  );
};

export default PrizeCard;
