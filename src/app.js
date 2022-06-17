import React, {useRef, Fragment} from 'react'
import Carousel from './components/carousel'
import Navbar from './components/navbar'
import ContentBox from './components/content-box'
import Map from './components/map'
import './css/app.css'
import ContactInfo from './components/contact-info'
import Footer from './components/footer'


const App = () => {
  const services = [
    {
      title: 'On Site Crating/Uncrating',
      rows: ['Solid/slate', 'Art work', 'Electronics', 'Marble/glass']
    },
    {
      title: 'Specialty Services',
      rows: ['Pianos', 'Grandfather clocks', 'Pool tables', 'TV mounting', 'Artwork hanging', 'Light fixtures']
    },
    {
      title: 'Assembling/Disassembling',
      rows: ['Appliances services', 'Furniture', 'Exercise equipment']
    }
  ]
  
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const scrollRefs = [servicesRef, aboutRef, contactRef]
  const scrollToRef = (section) => scrollRefs[section].current.scrollIntoView({behavior: 'smooth'})

  return (
    <Fragment>
      <Navbar scrollToSection={scrollToRef} />
      <Carousel />
      <div className='content-boxes-container'>
        <div className='content-box-container' ref={servicesRef}>
          <ContentBox title="Services" iconSrc='img/box-icon.png'>
            <div className='services-container'>
              <ul>
                {services.length && services.map(({title, rows}, idx) => (
                  <Fragment key={title + String(idx)}>
                    <li className='service-title'>{title}</li>
                    <ul>
                      {rows.map((row, idx) => (
                        <li key={row + String(idx)}>{row}</li>
                      ))}
                    </ul>
                  </Fragment>
                ))}
              </ul>
            </div>
          </ContentBox>
        </div>
        <div className='content-box-container' ref={aboutRef}>
          <ContentBox title="About" iconSrc='img/about-icon.png'>
            <div className='about-container'>
              <p>Servicing Volusia, Orange, and St. John’s county, Central Florida Specialty Services offers quality workmanship in all of your relocation specialty needs.  We provide on-site crating for your most delicate possessions. </p>
              <br/>
              <p>CFL Specialty Services is licensed and insured. Our techs have each gone through a thorough background-check, and have the necessary tools and experience to ensure the highest level of professionalism.</p>
            </div>
          </ContentBox>
        </div>
        <div className='content-box-container' ref={contactRef}>
          <ContentBox title="Contact Us" iconSrc='img/location-icon.png'>
            <div className='contact-us-container'>
              <Map />
              <ContactInfo />
            </div>
          </ContentBox>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default App