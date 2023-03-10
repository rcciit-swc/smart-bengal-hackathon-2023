import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Countdown.style.css";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    const countdownDate = new Date("March 21, 2023 00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  };

  startTimer();

  return (
    <div
      className="countdown-section px-4 d-flex flex-row align-items-center justify-content-evenly"
      style={{
        position: "absolute",
        bottom: "-20%",
        zIndex: "10",
        width: "95%",
        height: "120px",
        backgroundColor: "white",
      }}
    >
      <img
        src="https://i.imgur.com/ZCFgq7l.png"
        alt="logo"
        className="countdown-logo "
      />
      <div
        className="countdown-timer d-flex justify-content-evenly align-items-center flex-wrap "
        style={{
          width: "100%",
        }}
      >
        <div className="d-flex flex-row align-items-center gap-3 text-center timer">
          <h3
            className="poppins fw-bold"
            style={{
              fontSize: "1.2rem",
            }}
          >
            Registrations open for :
          </h3>
          <div className="d-flex gap-3 mt-3 mb-3">
            <div className="d-flex flex-column text-center countdown-item ">
              <span className="fw-bold time">{days}</span>
              <span className="time-label">Days</span>
            </div>
            <div className="d-flex flex-column text-center countdown-item">
              <span className="fw-bold time">{hours}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="d-flex flex-column text-center countdown-item">
              <span className="fw-bold time">{minutes}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="d-flex flex-column text-center countdown-item">
              <span className="fw-bold time">{seconds}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </div>
        <Button
          className="rounded-button "
          style={{
            backgroundColor: "#F88208",
            boxShadow: "0px 8px 25px #F88208",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#f2be88";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#F88208";
          }}
        >
          <a
            href="https://unstop.com/o/2adeEYJ?lb=TzAP536"
            target="_blank"
            rel="noreferrer"
          >
            Register Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Countdown;
