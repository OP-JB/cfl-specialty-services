import React, { forwardRef } from 'react'
import '../css/about.css'
import ContentBox from './content-box'

const About = forwardRef((props, ref) => {  
  return (
    <div className='about-container content-box-container' ref={ref}>
      <ContentBox title="About" iconSrc='assets/img/about-icon.png'>
        <p>Servicing Volusia, Orange, and St. John`s county, Central Florida Specialty Services offers quality workmanship in all of your relocation specialty needs.  We provide on-site crating for your most delicate possessions. </p>
        <br/>
        <p>CFL Specialty Services is licensed and insured. Our techs have each gone through a thorough background-check, and have the necessary tools and experience to ensure the highest level of professionalism.</p>
      </ContentBox>
    </div>
  )
})

export default About
