import React from 'react'
import tpaLogo from '../Photos/Site Pics/tpa-logo.jpg'
import mspLogo from '../Photos/Site Pics/msp-logo.jpg'

const Landing = () => {
    return (
      <div className='landing'>
        <div>
            <a href='https://www.fresha.com/a/material-st-pete-st-petersburg-1957-1st-avenue-south-jemgscy9?pId=537575' target='_blank' rel='noreferrer'>
                <button className='landingButton'>
                    Book St Pete
                </button>
            </a>
            <a href='/sp/home'><img className='homelogosp' src={mspLogo} alt="logo" /></a>
        </div>
        <div>
            <a href='https://www.fresha.com/a/material-tampa-tampa-2502-north-howard-avenue-d9hvukdk?preview=e701202d-d15a-4769-9fa3-3bfaa7f11c85&share&pId=537575' target='_blank' rel='noreferrer'>
                <button className='landingButton'>
                    Book Tampa
                </button>
            </a>
            <a href='/tp/home'><img className='homelogotp' src={tpaLogo} alt="logo" /></a>
        </div>        
      </div>
    )
  }
  
  export default Landing