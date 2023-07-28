import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo-container'>
        <div id='footer-logo'>
          <img src='assets/img/CFL-logo.png' />
          <span>Crating and third-party solutions</span>
        </div>
        <img id='mobile-footer-logo' src='assets/img/CFL-logo_mobile.png' />
      </div>
      <div className='footer-links-container'>
        <span className='copyright-text'>&copy; 2022 CFL Specialty Services</span>
      </div>
    </footer>
  )
}

export default Footer
