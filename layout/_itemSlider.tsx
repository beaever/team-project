import React, { useState, useEffect, useRef } from "react";
import Slide from "./_slide";
import ItemSlide from "./_itemSlide";
import img1 from "../public/1.jpeg";





const TOTAL_SLIDES = 1;
const ItemSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    
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
        sliderRef.current.style.transition = "all 0.5s ease-in-out";
        sliderRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
      }, [currentSlide]);
    return(
       <section className="itemContainer">
               <div className="itemListBox" ref={sliderRef}>      
                          <ItemSlide  /> 
                          <ItemSlide  />           
                          <ItemSlide  /> 
                          <ItemSlide  /> 
                          <ItemSlide  /> 
                          <ItemSlide  /> 
                          <ItemSlide  /> 
                          <ItemSlide  />       
               </div>
               <div className="itemSlider_btnBox">
                <button className="itemSlider_btn" onClick={prevSlide}>&lt;</button>
                <button className="itemSlider_btn r" onClick={nextSlide}>&gt;</button>
               </div>
       </section>
    );
}

export default ItemSlider;