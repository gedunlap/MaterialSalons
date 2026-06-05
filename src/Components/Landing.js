import React from 'react'
import tpaLogo from '../Photos/Site Pics/tpa-logo.jpg'
import mspLogo from '../Photos/Site Pics/msp-logo.jpg'

const Landing = () => {
    return (
      <div className='landing'>
        <div>
            <button className='landingButton'>Book St Pete</button>
            <img className='homelogosp' src={mspLogo} alt="logo" />
        </div>
        <div>
            <button className='landingButton'>Book Tampa</button>
            <img className='homelogotp' src={tpaLogo} alt="logo" />
        </div>        
      </div>
    )
  }
  
  export default Landing