import React from 'react'
import './Header_left_btm.css';


export default function Header_left_btm() {
  return (
  <div className='your_library_main'>
        <div className='your_library'>
          <p className='your_text' data-title='Collapase Your Library'>

          <i class="fa-solid fa-list-ul fa-lg"></i>
          Your Library
          </p>
        </div>
        <div className='scrol_div_left'>
        <div className='creare_your_first_div'>
          <p className='inner_text'><strong> Create Your First Playlist</strong> </p>
                                   {/* <br className='br-tag'/> */}
          <p>It's is we'll help you</p> 
          <div className='Create_Playlist_link_main'>
          <h3 class="Create_Playlist_link">Create Playlist</h3>
          </div>
          </div>  
          <br/> 
          <div className='lets_find_div_main'>
            <div className='lets_find_div'>
            <p className='p_tag_lets'>Let's find some podcasts to flow</p>
            <p>We'll Keep you Updated on new episodes</p>
            <h3 class="browse_prodcasts_link">Browse Podcasts</h3>
            </div>

          </div>
          </div>
          <div className='header_left_btm_text'>
            <div className='btm_last_i'>
                <p>Legal</p>
                <p>Privacy center</p>
                <p>Privacy Policy</p>
            </div>
            <div className='btm_last_ii'>
                <p>Cookies</p>
                <p>About Ads</p>
                <p>Accessibility</p>
            </div>
            <p className='last_left_btm'>Cookies</p>
          </div>

          <div className='english_icon_div'>
            <h3 className='earth_h_tag'><i class="fa-solid fa-globe fa-lg" id='earth_icon'></i>English</h3>
          </div>
          
  </div>
  )
}



















// /* width */
// ::-webkit-scrollbar {
//   width: 10px;
// }

// /* Track */
// ::-webkit-scrollbar-track {
//   background: #f1f1f1; 
// }
 
// /* Handle */
// ::-webkit-scrollbar-thumb {
//   background: #888; 
// }

// /* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   background: #555; 
// }