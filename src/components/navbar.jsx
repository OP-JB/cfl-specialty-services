import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import '../css/navbar.css'

const Navbar = ({scrollToSection}) => (
  <div className="nav-container">
    <nav>
      <img id="logo" src="img/CFL-logo_transparent.png" />
      <span id="slogan">Crating and third-party solutions</span>
      <div className="nav-links-container">
        <span onClick={() => scrollToSection(0)}>Services</span>
        <span onClick={() => scrollToSection(1)}>About</span>
        <span onClick={() => scrollToSection(2)}>Contact</span>
      </div>
    </nav>
  </div>
)

export default Navbar
