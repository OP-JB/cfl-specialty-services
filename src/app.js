import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import './css/app.css'

const App = () => (
  <Fragment>
    <nav>
      <img id="logo" src="img/CFL-logo_transparent.png" />
      <span id="slogan">Crating and third-party solutions</span>
      <div class="nav-links-container">
        <span>Services</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </nav>
  </Fragment>
)

export default App