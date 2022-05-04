import React, { useState, useEffect } from 'react'
import '../css/carousel.css'

const Carousel = () => {
  const images = ['img/glass-metal.png', 'img/flag.png', 'img/grandfather-clock.png', 'img/chandelier.png']
  const titles = ['On-site Custom Crating', 'On-site Custom Crating', 'Specialty Services', 'Specialty Services']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(function () {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length)
    }, 8000);

    return () => clearInterval(intervalId)
  }, currentIndex)

  return (
    <div className="container">
      <div>
        <img src={images[currentIndex]} />
        <h1 className={`carousel-img-${currentIndex}`}>{titles[currentIndex]}</h1>
      </div>
    </div>
  )
}

export default Carousel
