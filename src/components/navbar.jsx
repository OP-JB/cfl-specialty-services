import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import '../css/navbar.css'

const Navbar = () => (
  <Fragment>
    <nav>
      <img id="logo" src="img/CFL-logo_transparent.png" />
      <span id="slogan">Crating and third-party solutions</span>
      <div className="nav-links-container">
        <span>Services</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </nav>
  </Fragment>
)

export default Navbar
