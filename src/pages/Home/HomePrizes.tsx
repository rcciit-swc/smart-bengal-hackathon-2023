import React from "react";
import PrizeCard from "../../components/PrizeCard/PrizeCard";
import "./HomePrizes.css";

const HomePrizes = () => {
  return (
    <div>
      <h1
        className="w-100 text-center fw-bold mt-5 caveat"
        style={{ color: "var(--heading-color)" }}
      >
        PRIZES
      </h1>
      <h2
        className="w-100 fw-bold text-center"
        style={{ fontWeight: "700", fontSize: "26px" }}
      >
        WHAT ALL YOU CAN TAKE HOME
      </h2>
      <div className="d-flex justify-content-center w-100">
        <div
          style={{
            gap: "10px",
            background: "#000",
            color: "white",
            // padding: "10px 18px",
            borderRadius: "30px",
          }}
          className={"d-flex align-items-center"}
        >
          <div
            style={{
              padding: "10px 18px",
              background: "#F88208",
              borderRadius: "30px",
            }}
            role="button"
          >
            <h4
              style={{
                marginBottom: "0",
                fontSize: "17px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              SBH SENIOR
            </h4>
          </div>
          <div
            style={{
              padding: "10px 18px",
            }}
            role="button"
          >
            <h4
              style={{
                marginBottom: "0",
                fontSize: "17px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              SBH JUNIOR
            </h4>
          </div>
        </div>
      </div>
      <div className="d-flex" style={{width:"90%",margin:"10px auto"}}>
              <PrizeCard/>
      </div>
    </div>
  );
};

export default HomePrizes;
