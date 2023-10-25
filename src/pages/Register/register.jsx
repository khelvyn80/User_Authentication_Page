import React from 'react'
import './register.css'
import SideImage from '../../components/Side_image/SideImage'
import image from '../../assets/images/register.png'
import SidePage from '../../components/Side_page/SidePage'



function register() {
  return (
    <div className='main-register'>
        <div className='side-bg'>
            <SideImage image={image} />
        </div>
        <div>
          <SidePage />
        </div>
    </div>
  )
}

export default register