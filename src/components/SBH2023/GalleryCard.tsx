import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const gallery = [
  {
    image:
      "https://i.pinimg.com/736x/ff/6a/89/ff6a89d1454672a134e5a60b6157f75e.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/9c/a1/cf/9ca1cf7df797d13fda3d4eb052ba2d25.jpg",
  },
  {
    image:
      "https://i.pinimg.com/originals/77/45/70/7745709c4859a8664ff4d6cc7b871fe5.jpg",
  },
  {
    image:
      "https://i.pinimg.com/originals/82/36/24/8236242a5d6f9f900cea70da3762008b.jpg",
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
         <div className="flex flex-row  justify-center items-center gap-5">
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
              <img src={card.image} alt={`Gallery ${index}`} 
               style={{ maxWidth: '90%', maxHeight: '90%', borderRadius:'2rem',paddingLeft:'10%',paddingRight:'10%',paddingBottom:'5%',paddingTop:'5%',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'}}/>
            </div>
          ))}
        </Carousel>
      </div>
  )
};

export default GalleryCard