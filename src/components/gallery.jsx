import React, { Fragment, forwardRef, useRef, useState } from 'react'
import '../css/gallery.css'
import Carousel from './carousel.jsx';
import { galleryCarouselImages } from '../constants.js';

const Gallery = forwardRef(({scrollToTop}, ref) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    console.log('opening modal');
    document.body.style.overflow = 'hidden';
    scrollToTop()
    setModalIsOpen(true)
  }

  const closeModal = () => {
    console.log('closing modal');
    document.body.style.overflow = 'unset';
    setModalIsOpen(false);
  }

  const 
  
  return (
    <div className='gallery-container' ref={ref}>
      <h4 onClick={openModal}>View Gallery</h4>
      <img className='placeholder-img' src="assets/img/gallery/1.jpg" />
        {modalIsOpen && (
          <Fragment>
            <div className='modal-overlay'></div>
            <div className='modal-container'>
              <div className='modal-wrapper'>
                <span className="modal-close-btn" onClick={closeModal}>&#x2715;</span>
                <span className="left-arrow arrows" onClick={goToPreviousImage}>&#x2039;</span> {/*move to carousel*/}
                <Carousel images={galleryCarouselImages} />
                <span className="right-arrow arrows" onClick={goToNextImage}>&#8250;</span> {/*move to carousel*/}
              </div>
            </div>
          </Fragment>
        )}
    </div>
  )
})

export default Gallery;
