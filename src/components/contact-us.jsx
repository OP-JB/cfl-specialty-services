import React, { forwardRef } from 'react'
import '../css/contact-us.css'
import ContentBox from './content-box'
import ContactInfo from './contact-info'
import Map from './map'

const ContactUs = forwardRef((props, ref) => {  
  return (
    <div className='contact-us-container content-box-container' ref={ref}>
      <ContentBox title="Contact Us" iconSrc='assets/img/location-icon.png'>
        <ContactInfo />
        <Map />
      </ContentBox>
    </div>
  )
})

export default ContactUs
