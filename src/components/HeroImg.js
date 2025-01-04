import React from 'react';
import './HeroImgStyles.css';
import IntroImg from '../assets/laptop.jpg'
import {Link} from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='IntoImg' />
        </div>
        <div className='content'>
            <p>Hi, I'm a Junior Web Developer.</p>
            <h1>React Developer</h1>
            <div> 
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg