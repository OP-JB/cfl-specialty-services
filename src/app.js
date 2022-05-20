import React, {Fragment} from 'react'
import Carousel from './components/carousel'
import Navbar from './components/navbar'
import ContentBox from './components/content-box'
import './css/app.css'

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

const App = () => (
  <Fragment>
    <Navbar />
    <Carousel />
    <div className='content-boxes-container'>
      <ContentBox title="Services" iconSrc='img/box-icon.png'>
        <div className='services-container'>
          <ul>
            {services.length && services.map(({title, rows}) => (
              <Fragment>
                <li className='service-title'>{title}</li>
                <ul>
                  {rows.map(row => (
                    <li>{row}</li>
                  ))}
                </ul>
              </Fragment>
            ))}
          </ul>
        </div>
      </ContentBox>
      <ContentBox title="About" iconSrc='img/about-us-icon.png'>
        <div className='about-us-container'>
          <p>Servicing the Central Florida Area for over a decade, Central Florida Specialty Services provides quality workmanship in all of your relocation needs.  Our techs have received the highest level of training, allowing us to guarantee the safety of your most delicate posessions.</p>
          <br/>
          <p>CFL Specialty Services is licensed and insured</p>
        </div>
      </ContentBox>
      {/* <ContentBox title="Contact Us">
        <div className='contact-us-container'>
          <img src='img/location-icon.png' />
          <p>Servicing the Central Florida Area for over a decade, Central Florida Specialty Services provides quality workmanship in all of your relocation needs.  Our techs have received the highest level of training, allowing us to guarantee the safety of your most delicate posessions.</p>
          <br/>
          <p>CFL Specialty Services is licensed and insured</p>
        </div>
      </ContentBox> */}
    </div>
  </Fragment>
)

export default App