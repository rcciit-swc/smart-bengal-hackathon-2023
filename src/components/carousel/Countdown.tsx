import React, { useState } from "react";

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
      className="d-flex align-items-center  fw-bold w-75 justify-content-evenly h-50"
      style={{
        color: "black",
        fontSize:
          "min(max(10px, calc(0.625rem + ((1vw - 0.01px) * 2.6055))), 60px)",
      }}
    >
      <div
        className="text-center py-2 countdown-item-container d-flex flex-column justify-content-center align-items-center"
        style={{
          // backgroundColor:"blue",
          width: "10vw",
        }}
      >
        <div className="countdown-item">{days}</div>
        <div className="countdown-header">Days</div>
      </div>
      <div
        className="text-center py-2 countdown-item-container d-flex flex-column justify-content-center align-items-center"
        style={{
          // backgroundColor:"blue",
          width: "10vw",
        }}
      >
        <div className="countdown-item">{hours}</div>
        <div className="countdown-header">Hours</div>
      </div>
      <div
        className="text-center py-2 countdown-item-container d-flex flex-column justify-content-center align-items-center"
        style={{
          // backgroundColor:"blue",
          width: "10vw",
        }}
      >
        <div className="countdown-item">{minutes}</div>
        <div className="countdown-header">Minutes</div>
      </div>
      <div
        className="text-center py-2 countdown-item-container d-flex flex-column justify-content-center align-items-center"
        style={{
          // backgroundColor:"blue",
          width: "10vw",
        }}
      >
        <div className="countdown-item">{seconds}</div>
        <div className="countdown-header">Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
