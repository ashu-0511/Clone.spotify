import React from 'react'
import './Banner.css';
import Dil from './songs/dil-diyan-gallan.mp3'
import cheq from './images/cheques.jpeg'
import cheques from './songs/song.mp3'
import hawa from './images/hawayein.jpeg'
import nazar from './images/nazro.jpeg'
import tiger from './images/tiger.jpeg'
import { Link } from "react-router-dom"
// import Suraj from './images/suraj.jpeg'



export default function Banner() {
  return (
    <div className='main_banner'>
      <div className='spotiylist_div'>
        <ul className='spotiylist_showall'>
          <li className='spotify_li'>Spotify Playlists</li>
          <Link to="/Showall">  <li className='show_all_li'>show all</li></Link>
        </ul>
        <div className='main-songs'>
          <div className='songs'>
            <Link to="/Shubh"> <img src={cheq} alt='none' className='chq' /></Link>
            <audio src={cheques} controls="true" class="audio-1"></audio>
          </div>
          <div className='songs'>
            <img src={hawa} alt='none' className='chq' />
            <audio src={cheques} controls="true" class="audio-1"></audio>
          </div>
          <div className='songs'>
            <img src={nazar} alt='none' className='chq' />
            <audio src={cheques} controls="true" class="audio-1"></audio>
          </div>
          <div className='songs'>
            <img src={tiger} alt='none' className='chq' />
            <audio src={Dil} controls="true" class="audio-1"></audio>
          </div>
        </div>
      </div>
    </div>
  )
}
