import React from 'react';
import './Header_left.css';
import { Link } from 'react-router-dom';

export default function Header_left() {
  return (
    <div>
      <div className='home_search_div'>
        <h1 className='spotify_text'>
          <i class="fa fa-spotify" aria-hidden="true" id='spoti_icon'></i><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c-5.5 0-10 4.5-10 10s4.5 10 10 10s10-4.5 10-10s-4.45-10-10-10Zm3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85c-.2.3-.55.4-.85.2Zm1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1s-.7.5-1.05.25ZM6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75Z" /></svg>Spotify
        </h1>
        <br />
        <ul className="home__search_ul">
          <Link to="/"  > <li className='home_li'><i class="fa-solid fa-house fa-xl"></i>Home</li></Link>
          <li className='seacrh_li'><i class="fa-solid fa-magnifying-glass fa-xl"></i >search</li>
        </ul>
      </div>


    </div>
  )
}
