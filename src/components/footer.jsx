import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo-container'>
        <img id='footer-logo' src='img/CFL-logo_transparent.png' />
      </div>
      <div className='footer-links-container'>
        <span className='copyright-text'>&copy; Copyright 2022 CFL Specialty Services</span>
      </div>
    </footer>
  )
}

export default Footer
