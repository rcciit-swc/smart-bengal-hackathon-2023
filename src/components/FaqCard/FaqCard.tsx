import React, { useState } from "react";
import plus from "../../assets/expandIcons/plus.png";
import minus from "../../assets/expandIcons/minus.png";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard = ({ question, answer }: FaqCardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="w-100 ">
      <div
        className="w-100 d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "var(--invert-color)", padding: "10px 30px" }}
      >
        <h4 style={{ backgroundColor: "var(--invert-color)" }}>Q.{question}</h4>
        {!showAnswer ? (
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "#5d73d1",
              borderRadius: "50%",
            }}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <img
              src={plus}
              alt={"plus"}
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        ) : (
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "#5d73d1",
              borderRadius: "50%",
            }}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <img src={minus} alt={"minus"} />
          </button>
        )}
      </div>
      {showAnswer ? (
        <div
          className="w-100"
          style={{
            color: "black",
          }}
        >
          <p
            style={{
              color: "black",
              whiteSpace: "pre-line",
              padding: "0 10px",
              margin: "10px 0",
            }}
            dangerouslySetInnerHTML={{ __html: answer }}
          ></p>
        </div>
      ) : null}
    </div>
  );
};

export default FaqCard;
