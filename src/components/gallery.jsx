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
  
  return (
    <div className='gallery-container' ref={ref}>
      <h4 onClick={openModal}>View Gallery</h4>
      <img className='placeholder-img' src="assets/img/gallery/1.jpg" />
        {modalIsOpen && (
          <Fragment>
            <div className='modal-overlay'></div>
            <div className='modal-container'>
              <div className='modal-wrapper'>
                <div className="modal-close-btn" onClick={closeModal}>&#x2715;</div>
                <Carousel images={galleryCarouselImages} />
              </div>
            </div>
          </Fragment>
        )}
    </div>
  )
})

export default Gallery;
