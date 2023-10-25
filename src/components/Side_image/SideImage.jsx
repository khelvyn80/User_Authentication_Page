import React from 'react'
import './side_image.css'


function side_image({image}) {
  return (
    <div className='side-background'>
      <div className='border-radius1'></div>
      <div className='border-radius2'></div>
      <div className='border-radius3'></div>
      <img src={image} alt='#'/>

    </div>
  )
}

export default side_image