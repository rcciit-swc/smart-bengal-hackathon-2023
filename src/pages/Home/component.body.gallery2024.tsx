import { Carousel } from 'react-bootstrap';
import "react-multi-carousel/lib/styles.css";
import { Suspense } from "react";
import { FadeIn } from "react-slide-fade-in/dist/fade-in";
import photo7 from "../../assets/SBH2024-gal7.jpg";
import photo8 from "../../assets/SBH2024-gal8.jpg";
import photo9 from "../../assets/SBH2024-gal9.jpg";
import photo10 from "../../assets/SBH2024-gal10.jpg";
import photo11 from "../../assets/SBH2024-gal11.jpg";
import photo12 from "../../assets/SBH2024-gal12.jpg";

const gallery2024 = [
    {
      image: photo7,
    },
    {
      image: photo8,
    },
    {
      image: photo9,
    },
    {
      image: photo10,
    },
    {
      image: photo11,
    },
    {
      image: photo12,
    },
  ];
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const Gallery2024 = () => {
  return (
    <>
    <div className="pt-5 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center position-relative">
      <Suspense fallback={<></>}>
        
        </Suspense>
        <h1
          style={{ color: "var(--primary-color)" }}
          className="text-uppercase fw-bold caveat"
        >
          Gallery 2024
        </h1>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={0}
          delayInMilliseconds={100}
        ></FadeIn>
        <p>Here are some of the glimpses of this year. </p>
        <div className="carousal-style">
        <Carousel interval={1000} pause="hover">
        {gallery2024.map((card, index) => (
          <Carousel.Item key={index}>
            <img
              src={card.image}
              alt={`Gallery ${index}`}
              style={{
                maxWidth: "90%",
                maxHeight: "70vh", // Adjust as needed
                objectFit: "cover",
                borderRadius: "2rem",
                width: "100%", // Set a fixed width
                height: "400px",
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingBottom: "5%",
                paddingTop: "5%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </div>
    </>
  );
};

export default Gallery2024;
