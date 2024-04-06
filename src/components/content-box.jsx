import React from 'react'
import '../css/content-box.css'

const ContentBox = ({title, iconSrc, children}) => (
  <div className="content-box">
    <div className='content-left text-center text-light'>
      {iconSrc && <img className='mobile-icon' src={iconSrc} />}
      {title && <h4>{title}</h4>}
      {iconSrc && <img className='desktop-icon' src={iconSrc} />}
    </div>
    <div className='content-right text-light'>
      <div>{children}</div>
    </div>
  </div>
)

export default ContentBox
