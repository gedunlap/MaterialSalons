import React from 'react'
import tpaLogo from '../Photos/Site Pics/tpa-logo.jpg'
import mspLogo from '../Photos/Site Pics/msp-logo.jpg'

const Landing = () => {
    return (
      <div className='landing'>
        <div className='landingTop'>
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
        <div className='landingBottom'>
            <div>
                <h3>Hours</h3>
                <p>Tuesday — Saturday</p>
                <p>9am — 5pm</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p><a href='mailto:contact@materialsalons.com'>contact@materialsalons.com</a></p>
                <p>St Pete: <a href='tel:7275062236'>(727) 506-2236</a></p>
                <p>Tampa: <a href='tel:8132801356'>(813) 280-1356</a></p>
            </div>
        </div>
      </div>
    )
  }
  
  export default Landing