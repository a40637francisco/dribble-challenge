import React from 'react'

import './App.css'

function App() {
  return (
    <div className="polaroid">
      <div className='container'>
        <Hero />
      </div>
    </div>
  );
}

export default App


const Hero = () =>
  <div className='hero'>
    <NavBar />
    <RainbowTag />
    <HeroGalleryPages />
    <HeroGallery />
  </div>

const NavBar = () => (
  <div className='nav-bar'>
    <div className='nav-bar__item'>About</div>
    <div className='nav-bar__item'>Features</div>
    <div className='nav-bar__item'>Where to Buy</div>
    <div className='nav-bar__item nav-bar__item--active'>User Manual</div>
  </div>
)

const RainbowTag = () => ''

const HeroGalleryPages = () => ''

const HeroGallery = () =>
  <div className='hero-gallery'>
    <div className='hero-gallery__item'>
      <div className='hero-gallery__item-col-1'>
        <h1 className='hero-gallery__item-title'>snap,<br />print,<br />share</h1>
        <h2 className='hero-gallery__item-sub-title'>Polaroid Snap Touch<br/>Digital Camera</h2>
        <div>sliders</div>
      </div>
      <div className='hero-gallery__item-col-2'>
        <img className='hero-gallery__item-image' src='https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Yosemite_Sam.svg/1200px-Yosemite_Sam.svg.png' alt='' />
      </div>
      <div className='hero-gallery__item-col-3'>
        <p className='hero-gallery__item-description'>The <span className='hero-gallery__item-description--highlight'>Polaroid Snap</span> instant digital camera captures all the fun and spontaneity of the legacy polaroid instant camera in an ease, compact package</p>
        <CtaButton color='primary' text='Buy Now' />
      </div>
    </div>
  </div>

const CtaButton = ({ colorVar, text }) =>
  <div className='cta-btn' style={{"--color": `var(--primary)`}}>
    {text}
  </div>