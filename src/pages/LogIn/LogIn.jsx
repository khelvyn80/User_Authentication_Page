import React from 'react'
import './LogIn.css'
import SideImage from '../../components/Side_image/SideImage'
import image from '../../assets/images/register.png'
import Navigation from '../../components/Navigation/navigation'
import Body from '../../components/Body/body'
import logo from '../../assets/icons/Googlelogo.svg'
import Button from '../../components/Button/button'
import {Link } from "react-router-dom";

function LogIn() {
  return (
    <div className='main-login'>
        <div className='side-bg'>
            <SideImage image={image} />
        </div>
        <div>
          <Navigation>
            <span><b>Step 1</b> of 4</span>
            <Link to='/register'><span>Exit</span></Link>
          </Navigation>
          <Body>
          <p className='form-head'><b>Log In</b></p>
          <div className='sidePageDiv' >
                <form>
                <label>
                E-mail
                </label>
                <br />
                <input type="email" name="email" placeholder='johndoe@gmail.com' />
                <br />
                {/* <br /> */}
                <label>
                Password
                </label>
                <br />
                <input type="email" name="email" placeholder='**************' />
                </form>
                </div>
                <br />
                <Button customStyle={'login-btn'} content={'Log In'} />
                <br />
                <button className='google-sign'>
                  <img src={logo} alt='dfd' />
                  <p className='signup-text'>Log In with Google</p>
                </button>
                <p className='text-already'>Don't have an account?<Link to="/register"><b className='btn-login'>Register</b></Link></p>
          </Body>
        </div>
    </div>
  )
}

export default LogIn