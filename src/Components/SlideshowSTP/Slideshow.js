import React from 'react';
import { Fade } from 'react-slideshow-image';
import img1 from '../../Photos/StPete/MS1 copy.jpg'
import img2 from '../../Photos/StPete/MS17 copy.jpg'
import img3 from '../../Photos/StPete/MS16 copy.jpg'
import img4 from '../../Photos/StPete/MS33 copy.jpg'
import img5 from '../../Photos/StPete/MS18 copy.jpg'
import img6 from '../../Photos/StPete/MS24 copy.jpg'
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url1: img1,
    url2: img2,
  },
  {
    url1: img3,
    url2: img4,
  },
  {
    url1: img5,
    url2: img6,
  },
];


const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade duration='3000'>
                {fadeImages.map((fadeImage, index) => (
                <div className="each-fade" key={index}>
                    <div className="image-container">
                      <img className='fadeimg' src={fadeImage.url1} alt='Salon Slideshow 1' />
                      <img className='fadeimg' src={fadeImage.url2} alt='Salon Slideshow 2' />
                    </div>
                </div>
                ))}
            </Fade>
        </div>
    )
}

export default Slideshow