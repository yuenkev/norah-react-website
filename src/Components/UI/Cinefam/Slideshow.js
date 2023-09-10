import React from "react";
import classes from "./Slideshow.module.css";
import slide1 from "../../Assets/Images/CineFAM/slide1.png";
import slide2 from "../../Assets/Images/CineFAM/slide2.png";
import slide3 from "../../Assets/Images/CineFAM/slide3.png";
import slide4 from "../../Assets/Images/CineFAM/slide4.png";

const slides = [slide1, slide2, slide3, slide4]
const delay = 2500;

const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // Auto-Slide Show Effect
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={classes.slideshow}>
      {/* The Slides */}
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <img
            className={classes.slide}
            key={index}
            src={slide}
            alt="Slide"
          ></img>
        ))}
      </div>
      
      {/* The Dots */}
      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={classes[`slideshowDot${index === idx ? "active" : ""}`]}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
