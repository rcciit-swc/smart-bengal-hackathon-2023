import { useState } from "react";
import "./Carousel.style.css";
import Carousel from "react-bootstrap/Carousel";
import Countdown from "./Countdown";
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
    <div
      className="d-flex flex-column align-items-center"
      style={{
        position: "relative",
      }}
    >
      {/* <Countdown /> */}
      <Carousel
        style={{
          width: "90vw",
        }}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="d-block w-100"
              height="500px"
              width="auto"
              src="https://i.imgur.com/Gq1zYcx.jpg"
              alt="Second slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
            <img
              className="d-block w-100"
              height="500px"
              width="auto"
              src="https://i.imgur.com/iG88HEb.jpg"
              alt="Second slide"
            />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
