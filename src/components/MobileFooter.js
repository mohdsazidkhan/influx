import React from 'react'
import { MdArrowForward } from "react-icons/md";
function MobileFooter() {
  return (
    <div className='mobileFooter'>
    <button className='solidButton'><span className='d-flex'>Get Started</span><span className='d-flex'><MdArrowForward/></span></button>
    <p>Marcus MVP is only available for use in our Mobile App</p>
    </div>
  )
}

export default MobileFooter
