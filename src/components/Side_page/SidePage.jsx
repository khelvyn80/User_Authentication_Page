import React from 'react'
import './side_page.css'

import Navigation from '../../components/Navigation/navigation'
import Body from '../../components/Body/body'
import logo from '../../assets/icons/Googlelogo.svg'
import Button from '../../components/Button/button'
import {Link } from "react-router-dom";

function SidePage() {
  return (
    <div>
        <div>
            <Navigation>
            <span><b>Step 1</b> of 4</span>
            <Link to='/register'><span>Exit</span></Link>
            </Navigation>
        </div>
        <div>
            <Body>
                <p className='form-head'><b>Create Account</b></p>
                <div className='sidePageDiv' >

                <form>
                <label>
                Name
                </label>
                <br />
                <input type="text" name="name" placeholder='John Doe'/>
                <br />
                <label>
                E-mail
                </label>
                <br />
                <input type="email" name="email" placeholder='johndoe@gmail.com' />
                <br />
                <label>
                Password
                </label>
                <br />
                <input type="password" name="email" placeholder='**************' />
                </form>
                <br />
                <Button content={'Create Account'} />
                <br />
                <button className='google-sign'>
                  <img src={logo} alt='dfd' />
                  <p className='signup-text'>Sign up with Google</p>
                </button>
                <p className='text-already'>Already have an account?<Link to="/login"><b className='btn-login'>Log In</b></Link></p>

                </div>
                
            </Body>
        </div>
    </div>
  )
}

export default SidePage