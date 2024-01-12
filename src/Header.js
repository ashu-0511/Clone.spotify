import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className='spotify_header'>
      <div className=' sign_up_div'>
        <div className='sign_login_div'>
          <div className='arrow_design'>
            <p><i class="arrow left"></i></p>
            <p><i class="arrow right"></i></p>
          </div>
          <ul className='sign_login'>
            <Link to="/signup"><li className='sign_btn'>Sign up</li></Link>
            <Link to="/Login"><li className='login_btn'><h3 className='login_h3'>Log in</h3></li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
