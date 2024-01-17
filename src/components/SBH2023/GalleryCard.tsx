import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import photo1 from "../../assets/sbh-2023 .jpg";
import photo2 from "../../assets/sbh-2023 2.0.jpg";
import photo3 from "../../assets/sbh-2023 3.0.jpg";
import photo4 from "../../assets/sbh-2023 4.0.jpg";
import photo5 from "../../assets/sbh-2023 5.0.jpg";
import photo6 from "../../assets/sbh-2023 6.0.jpg";
const gallery = [
  {
    image: photo1,
  },
  {
    image: photo2,
  },
  {
    image: photo3,
  },
  {
    image: photo4,
  },
  {
    image: photo5,
  },
  {
    image: photo6,
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

const GalleryCard = () => {
  return (
    <div className="carousel-style">
      <Carousel
        responsive={responsive}
        className="w-[400px] 2xl:w-[1300px] h-[500px] flex flex-row items-center px-20"
        arrows={true}
        showDots={true}
        transitionDuration={100}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {gallery.map((card, index) => (
          <div key={index}>
            <img
              src={card.image}
              alt={`Gallery ${index}`}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
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
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GalleryCard;
