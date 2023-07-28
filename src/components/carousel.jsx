import React, { useState, useEffect } from 'react'
import '../css/carousel.css'

const Carousel = ({images, autoPlay}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if(autoPlay) {
      const intervalId = setInterval(function () {
        setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length)
      }, 8000);
      return () => clearInterval(intervalId)
    }
  }, currentIndex)

  return (
    <div className="carousel-container">
      <div>
        <img src={images[currentIndex]} />
      </div>
    </div>
  )
}

export default Carousel
