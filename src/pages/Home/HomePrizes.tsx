import React, { useState, Suspense } from "react";
import { FadeIn } from "react-slide-fade-in";
import Circle from "../../components/Blob/Circle";
import PrizeCard from "../../components/PrizeCard/PrizeCard";
import { useData } from "../../contexts/Data";
import "./HomePrizes.css";

const HomePrizes = () => {
  const { prize } = useData();
  const [category, setCategory] = useState("SBHSenior");
  const [prizeList, setPrizeList] = useState<any>(prize.SBHSenior);

  return (
    <div className="w-100">
      <Suspense fallback={<></>}>
        <Circle
          width="600px"
          height="600px"
          blur="80"
          top="2700px"
          right="-420px"
          color="orange"
        />
        <Circle
          width="600px"
          height="600px"
          blur="80"
          top="3000px"
          left="-420px"
          color="blue"
        />
      </Suspense>
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
              background: `${category === "SBHSenior" ? "#f88208" : "#000000"}`,
              borderRadius: "30px",
            }}
            role="button"
            onClick={() => {
              setCategory("SBHSenior");
              setPrizeList(prize.SBHSenior);
            }}
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
              background: `${category === "SBHJunior" ? "#f88208" : "#000000"}`,
              borderRadius: "30px",
            }}
            role="button"
            onClick={() => {
              setCategory("SBHJunior");
              setPrizeList(prize.SBHJunior);
            }}
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
      <FadeIn
        from="bottom"
        positionOffset={150}
        triggerOffset={25}
        delayInMilliseconds={100}
      >
        <div className="d-flex w-100" style={{ margin: "10px auto" }}>
          <PrizeCard prize={prizeList} />
        </div>
      </FadeIn>
    </div>
  );
};

export default HomePrizes;
