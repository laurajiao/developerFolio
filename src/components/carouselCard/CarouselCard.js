import { useState } from "react";
import "./CarouselCard.scss"; 

export default function CarouselCard({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prev}>
        ←
      </button>
      <img
        src={images[index]}
        alt={`carousel-${index}`}
        className="carousel-image"
      />
      <button className="arrow right" onClick={next}>
        →
      </button>
    </div>
  );
}
