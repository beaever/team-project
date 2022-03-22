import React, { useState, useEffect, useRef } from 'react';
import Slide from './_slide';
import ItemSlide from './_itemSlide';
import img1 from '../public/1.jpeg';
import ItemList from './_itemList';
import axios from 'axios';
import SkeletonLi from '../components/Skeletion/skeletionLi';

const TOTAL_SLIDES = 1;
const ItemSlider = () => {
  const [itemLists, setItemLists] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const Item = () => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json/`)
      .then((res) => {
        const data = res.data.slice(0, 10).filter((data) => data.brand);
        console.log(data);
        setItemLists(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Item();
  }, []);

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
    sliderRef.current.style.transition = 'all 0.5s ease-in-out';
    sliderRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <section className='itemContainer'>
      <div className='itemListBox' ref={sliderRef}>
        {isLoading ? <SkeletonLi /> : <ItemSlide itemLists={itemLists} />}
      </div>
      <div className='itemSlider_btnBox'>
        <button className='itemSlider_btn' onClick={prevSlide}>
          &lt;
        </button>
        <button className='itemSlider_btn r' onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ItemSlider;
