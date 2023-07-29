import React, { useState, useEffect } from 'react'
import '../css/carousel.css'

const Carousel = ({images, autoPlay}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(autoPlay) {
      const intervalId = setInterval(function () {
        setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length)
      }, 8000);
      return () => clearInterval(intervalId)
    }
  }, currentIndex);

  const goToPreviousImage = () => {
    const previous = currentIndex > 0 ? currentIndex - 1 : 0;
    setCurrentIndex(previous)
  }

  const goToNextImage = () => {
    const next = currentIndex < images.length - 1 ? currentIndex + 1 : images.length - 1;
    setCurrentIndex(next)
  }

  return (
    <div className="carousel-container">
      {autoPlay ? (
        <div>
          <img src={images[currentIndex]} />
        </div>
      ) : (
        <div>
          {currentIndex > 0 && <div className="left-arrow arrows" onClick={goToPreviousImage}>&#x2039;</div>}
          <img src={images[currentIndex]} />
          {currentIndex < images.length - 1 && <div className="right-arrow arrows" onClick={goToNextImage}>&#8250;</div>}
        </div>
      )}
    </div>
  )
}

export default Carousel;
