import { useState } from "react";
import "./Carousel.style.css";
import Carousel from "react-bootstrap/Carousel";
import Countdown from "./Countdown";
import { Button } from "react-bootstrap";
// import axios from "axios";

const CarouselContainer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  // const unstop_api_key = process.env.REACT_APP_UNSTOP_API_KEY;

  // async function fetchUnstopData() {
  //   try {
  //     fetch(url)
  //       .then((response) => console.log(response))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchUnstopData()
  // }, [])

  return (
    <Carousel
      style={{
        width: "90vw",
      }}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <a
          href="https://unstop.com/o/2adeEYJ?lb=TzAP536"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block w-100"
            height="500px"
            width="auto"
            src="https://i.imgur.com/SraJzN7.png"
            alt="First slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href="https://unstop.com/o/2adeEYJ?lb=TzAP536"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="d-block w-100"
            height="500px"
            width="auto"
            src="https://i.imgur.com/JPInk6V.png"
            alt="Second slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="countdown-timer"
          style={{
            height: "500px",
            width: "auto",
          }}
        >
          <div className="d-flex flex-column justify-content-evenly align-items-center h-100 py-3">
            <h1
              className="text-center text-uppercase fw-bold"
              style={{
                color: "white",
                fontSize:
                  "min(max(10px, calc(0.625rem + ((1vw - 0.01px) * 2.6055))), 60px)",
              }}
            >
              Registration Closes In
            </h1>
            <Countdown />
            <Button
              variant="success"
              className="mb-4"
              style={{
                outline: "none",
                border: "none",
                padding: "10px 30px",
                borderRadius: "50px",
                fontWeight: "600",
                letterSpacing: "2px",
                fontSize: "12px",
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
      </Carousel.Item>
      {/* <Carousel.Item>

      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselContainer;
