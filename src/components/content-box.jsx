import React, {Fragment} from 'react'
import '../css/content-box.css'

const ContentBox = ({title, iconSrc, children}) => (
  <div className="content-box-container">
    <div className='content-left text-center'>
      <h4>{title}</h4>
      <img src={iconSrc} />
    </div>
    <div className='content-right text-center'>
      <div>{children}</div>
    </div>
  </div>
)

export default ContentBox
