import React from 'react'
import Header from './Header'
import HomeIcon from '../assets/images/Home.svg';

function Banner() {
  return (
    <section className='banner'>
        <Header />
        <span className='mobileHome'><img src={HomeIcon} alt='HomeIcon' /></span>
        <div className='d-flex flex-column text-center bannerContent'> 
        <h1 className='text-white'>MVP SUBSCRIPTION</h1>
        <p className='text-white'>Your go-to Movie Membership Program</p>
        </div>
    </section>
  )
}

export default Banner
