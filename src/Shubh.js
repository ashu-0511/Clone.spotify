import React from "react";
import './Shubh.css'
import cheq from './images/cheques.jpeg'
import cheques from './songs/song.mp3'
import dil from './songs/dil-diyan-gallan.mp3'
import olove from './images/one-love.jpeg'
import baller from './images/baller.jpeg'


export default function Shubh() {
    return (
        <>
            <div className="text">
                <h2>
                    Shubh's Playlist
                </h2>
            </div>
            <div className='main-songs'>
                <div className='songs'>
                    <img src={cheq} alt='none' className='chqs' /><span><audio src={cheques} controls="true" class="audio-1"></audio></span>
                </div>
                <div className='songs'>
                    <img src={baller} alt='none' className='chqs' />
                    <audio src={cheques} controls="true" class="audio-1"></audio>
                </div>
                <div className='songs'>
                    <img src={olove} alt='none' className='chqs' />
                    <audio src={cheques} controls="true" class="audio-1"></audio>
                </div>
                <div className='songs'>
                    <img src={cheq} alt='none' className='chqs' />
                    <audio src={dil} controls="true" class="audio-1"></audio>
                </div>
            </div>
        </>
    )
}