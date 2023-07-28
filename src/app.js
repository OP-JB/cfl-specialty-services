import React, {useRef, Fragment} from 'react'
import './css/app.css'
import { carouselImages } from './constants'
import Navbar from './components/navbar'
import Carousel from './components/carousel'
import Services from './components/services'
import About from './components/about'
import Gallery from './components/gallery'
import ContactUs from './components/contact-us'
import Footer from './components/footer'

const App = () => {
  const topRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const galleryRef = useRef(null)
  
  const scrollRefs = [servicesRef, aboutRef, contactRef, galleryRef]
  const scrollToRef = (section) => scrollRefs[section].current.scrollIntoView({behavior: 'smooth'})

  return (
    <div ref={topRef}>
      <Navbar scrollToSection={scrollToRef} />
      <Carousel images={carouselImages} />
      <div className='content-boxes-container'>
        <Services ref={servicesRef} />
        <About ref={aboutRef} />
        <ContactUs ref={contactRef} />
        <Gallery scrollToTop={() => topRef.current.scrollIntoView()} ref={galleryRef} />
      </div>
      <Footer />
    </div>
  )
}

export default App