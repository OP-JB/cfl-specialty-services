import React, {Fragment} from 'react'
import '../css/content-box.css'

const ContentBox = ({title, iconSrc, children}) => (
  <div className="content-box">
    <div className='content-left text-center'>
      <h4>{title}</h4>
      <img src={iconSrc} />
    </div>
    <div className='content-right hz-center'>
      <div>{children}</div>
    </div>
  </div>
)

export default ContentBox
