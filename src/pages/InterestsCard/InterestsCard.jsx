import React from 'react'
import SideImage from '../../components/Side_image/SideImage'
import image from '../../assets/images/interests_page2.png'
import Navigation from '../../components/Navigation/navigation'
import Body from '../../components/Body/body'
import logo from '../../assets/icons/Googlelogo.svg'
import Button from '../../components/Button/button'
import {Link } from "react-router-dom";


function InterestsCard() {
  return (
    <div>
       <div className='side-bg'>
            <SideImage image={image} />
        </div>
        {/* <div>
        <Navigation style={{ border: '1px solid black' }}>
          <Link to='/register'><span>Back</span></Link>
          <span><b>Step 1</b> of 4</span>
          <Link to='/register'><span>Exit</span></Link>
          </Navigation>
          </div> */}

          <Body>
          <p className='form-head1'><b>Let's get started by picking some interests </b></p>
          <p>Alright,let's pick something</p>   


                


                <Button content={'Continue'} />
        
               
          </Body>    
    </div>
  )
}

export default InterestsCard