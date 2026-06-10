import React from 'react'
import clint from '../Photos/TPA/Clint Dunlap.jpg'
import maddison from '../Photos/TPA/Maddison Cave.jpg'
import kevin from '../Photos/TPA/Kevin Baker.jpg'
import sam from '../Photos/TPA/Samantha Reed.jpg'
import shea from '../Photos/TPA/Shea Galko.jpg'
import stephanie from '../Photos/TPA/stephanie suce.png'
import { IoLogoInstagram } from 'react-icons/io'

import gallery1 from '../Photos/Site Pics/IMG_0204.jpeg'
import gallery2 from '../Photos/Site Pics/IMG_2902.jpeg'
import gallery3 from '../Photos/Site Pics/IMG_3052.jpeg'
import gallery4 from '../Photos/Site Pics/IMG_4154.jpeg'
import gallery5 from '../Photos/Site Pics/IMG_4441.jpeg'
import gallery6 from '../Photos/Site Pics/IMG_6803.jpeg'
import gallery7 from '../Photos/Site Pics/IMG_7668.jpeg'
import gallery8 from '../Photos/Site Pics/IMG_7950.jpeg'


const imgArr = [

  {url:'https://i.imgur.com/KHKTS6j.jpg'},
  {url:'https://i.imgur.com/d1medHx.jpg'},
  {url:'https://i.imgur.com/bg73ePt.jpg'},
  {url:'https://i.imgur.com/uciMTmW.jpg'},
  {url:gallery1},{url:gallery5},{url:gallery6},{url:gallery2},
  {url:gallery3},{url:gallery4},{url:gallery7},{url:gallery8}
  
  
]

const Gallery = () => {
  return (
    <div className='gallerypage'>
      <h1 className='artistHeader'>ARTISTS</h1>
      <div className='brLine'></div>
      <div className='artists'>
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={clint} alt="clint" />
          </div>
          <a href="https://www.instagram.com/clint.color/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Clint Dunlap <IoLogoInstagram size='20' /></p></a>
        </div>
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={maddison} alt="maddison" />
          </div>
          <a href="https://www.instagram.com/maddisoncolors/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Maddison Cave <IoLogoInstagram size='20' /></p></a>
        </div>
        
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={kevin} alt="kevin" />
          </div>
          <a href="https://www.instagram.com/kevinandrewbaker/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Kevin Baker <IoLogoInstagram size='20' /></p></a>
        </div>
        
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={sam} alt="samantha" />
          </div>
          <a href="https://www.instagram.com/samanthahreed/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Samantha Reed <IoLogoInstagram size='20' /></p></a>
        </div>

        <div className='artistbox'>
          <div className='imgbox'>
            <img src={shea} alt="shea" />
          </div>
          <a href="https://www.instagram.com/hairbysheagalko_" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Shea Galko <IoLogoInstagram size='20' /></p></a>
        </div>

        <div className='artistbox'>
          <div className='imgbox'>
            <img src={stephanie} alt="stephanie" />
          </div>
          <a href="https://www.instagram.com/hairby_sauce/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Stephanie Suce <IoLogoInstagram size='20' /></p></a>
        </div>

      </div>
      <div className='brLine'></div>
      <h2>GALLERY</h2>
      <div className='brLine'></div>
      <div className='gallery'>
        <div className='imageWrap'>
          {imgArr.map((img, index) => (
            <div className='eachImage' key={index}>
              <img className='image' src={img.url} alt={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery