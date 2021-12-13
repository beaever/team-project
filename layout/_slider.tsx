import React, { useState, useEffect, useRef } from "react";
import Slide from "./_slide";
import img1 from "../public/1.jpeg";


    const TOTAL_SLIDES = 2;
    const Slider = () => {
          const [currentSlide, setCurrentSlide] = useState(0);
          const slideRef = useRef(null);
            
          const nextSlide = () => {
            if (currentSlide >= TOTAL_SLIDES) { 
              setCurrentSlide(0);
            } else {
              setCurrentSlide(currentSlide + 1);
            }
          };
          const prevSlide = () => {
            if (currentSlide === 0) {
              setCurrentSlide(TOTAL_SLIDES);
            } else {
              setCurrentSlide(currentSlide - 1);
            }
          };
          useEffect(() => {
            slideRef.current.style.transition = "all 0.5s ease-in-out";
            slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; 
          }, [currentSlide]);
        return (
            <section className="container">
              <div className="sliderContainner" ref={slideRef}>
                <Slide src={img1}  />
                <Slide src={img1} />
                <Slide src={img1} />
              </div>
              <div className="slider_btnBox">
                <button className="slider_btn" onClick={prevSlide}>Previous Slide</button>
                <button className="slider_btn r" onClick={nextSlide}>Next Slide</button>
              </div>
            </section>
          );
    }


    export default Slider;

