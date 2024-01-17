import GalleryCard from "./GalleryCard";
import { FadeIn } from "react-slide-fade-in/dist/fade-in";

const Gallery = () => {
  return (
    <>
      <div className="pt-5 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center position-relative">
        <h5
          style={{ color: `var(--heading-color)` }}
          className="caveat text-uppercase fw-bold fs-2"
        >
          Smart Bengal Hackathon 2023
        </h5>
        <h1
          style={{ color: "var(--primary-color)" }}
          className="text-uppercase fw-bold caveat"
        >
          Gallery
        </h1>
        <FadeIn
          from="bottom"
          positionOffset={200}
          triggerOffset={0}
          delayInMilliseconds={100}
        ></FadeIn>
        <p>Memories from last year.</p>
      </div>
      <GalleryCard />
    </>
  );
};

export default Gallery;
