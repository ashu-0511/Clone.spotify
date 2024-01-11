import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <div className='main_footer_div'>
        <div className='Footer'>

            <div className='footer_sec_i'>
             <ul className="list_i">
                <li><strong>Company</strong></li>
                <li className='use_ful_link_child'>About</li>
                <li className='use_ful_link_child'>Jobs</li>
                <li className='use_ful_link_child'>For the Record</li>
             </ul>
            </div>
            <div className='footer_sec_ii'>
            <ul className="list_ii">
                <li><strong>Communities</strong></li>
                <li  className='use_ful_link_child'>For Artists</li>
                <li className='use_ful_link_child'>Developers</li>
                <li className='use_ful_link_child'>Advertising</li>
                <li className='use_ful_link_child'>Investors</li>
                <li className='use_ful_link_child'>Vendors</li>
             </ul>
            </div>
            <div className='footer_sec_iii'>
            <ul className="list_iii">
                <li><strong>Useful links</strong></li>
                <li className='use_ful_link_child'>Support</li>
                <li className='use_ful_link_child'>Free Mobile App</li>
             </ul>
            </div>
            <div className='footer_sec_iv'>
            <ul className="list_iv">
                <li className='use_ful_link_child_icon'><i class="fa-brands fa-instagram fa-lg"></i></li>
                <li className='use_ful_link_child_icon'><i class="fa-brands fa-twitter fa-lg"></i></li>
                <li className='use_ful_link_child_icon'><i class="fa-brands fa-facebook fa-lg"></i></li>
                <li className='use_ful_link_child_icon'><i class="fa-brands fa-youtube fa-lg"></i></li>
             </ul>
            </div>
 
        </div>


    </div>
  )
}
