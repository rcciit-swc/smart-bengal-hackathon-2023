import React, { useState } from "react";

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
        style={{ backgroundColor: "var(--invert-color)" ,padding:"10px 30px"}}
      >
        <h4 style={{ backgroundColor: "var(--invert-color)" }}>Q.{question}</h4>
        {!showAnswer ? (
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "#5d73d1",
            }}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <img
              src={"https://icons8.com/icon/FybpuRe5Prpj/add"}
              alt={"plus"}
            />
          </button>
        ) : (
          <button
            style={{
              outline: "none",
              border: "none",
              backgroundColor: "#5d73d1",
            }}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <img src={"https://icons8.com/icon/37783/subtract"} alt={"minus"} />
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
          <p style={{ color: "black" }}>A.{answer}</p>
        </div>
      ) : null}
    </div>
  );
};

export default FaqCard;
