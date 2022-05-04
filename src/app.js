import React, {Fragment} from 'react'
import Carousel from './components/carousel'
import Navbar from './components/navbar'
import './css/app.css'

const App = () => (
  <Fragment>
    <Navbar />
    <Carousel />
  </Fragment>
)

export default App