import React from "react";
import { useState } from "react";
import "./Carousel.style.css";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../assets/caraousel-images/sbh-banner-3.webp";

const CarouselContainer = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="w-100" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500px"
          width="auto"
          src="https://i.imgur.com/SraJzN7.png"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500px"
          width="auto"
          src="https://i.imgur.com/JPInk6V.png"
          alt="Second slide"
          // style={{ objectFit: "contain" }}
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          height="500px"
          width="auto"
          src="https://sih.gov.in/img1/slider/sliderbannerM33.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselContainer;
