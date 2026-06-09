import React from 'react';
import { Fade } from 'react-slideshow-image';
import img1 from '../../Photos/Site Pics/1.jpg'
import img2 from '../../Photos/Site Pics/2.jpg'
import img3 from '../../Photos/Site Pics/3.jpg'
import img4 from '../../Photos/Site Pics/4.jpg'
import img5 from '../../Photos/Site Pics/5.jpg'
import img6 from '../../Photos/Site Pics/6.jpg'
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
  {
    url: img4,
  },
  {
    url: img5,
  },
  {
    url: img6,
  },
];


const Slideshow = () => {
    return (
        <div className="slide-container2">
            <Fade duration='3000'>
                {fadeImages.map((fadeImage, index) => (
                <div className="each-fade" key={index}>
                    <div className="image-container">
                      <img className='fadeimg' src={fadeImage.url} alt='Salon Slideshow'/>
                    </div>
                </div>
                ))}
            </Fade>
        </div>
    )
}

export default Slideshow