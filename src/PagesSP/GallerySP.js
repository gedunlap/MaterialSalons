import React from 'react'
import maddison from '../Photos/MaddisonCove.jpeg'
import sam from '../Photos/Sam.jpg'
// import jason from '../Photos/JasonJoseph.jpeg'
import clint from '../Photos/Clint.jpg'
import kevin from '../Photos/Kevin.jpg'
import { IoLogoInstagram } from 'react-icons/io'
import construction from '../Photos/UnderConstruction.png'


const imgArr = [

  {url:'https://i.imgur.com/KHKTS6j.jpg'},
  {url:'https://i.imgur.com/d1medHx.jpg'},
  {url:'https://i.imgur.com/bg73ePt.jpg'},
  {url:'https://i.imgur.com/uciMTmW.jpg'}
  
  
]

const Gallery = () => {
  return (
    <div className='gallerypage'>
      <h1 className='artistHeader'>ARTISTS</h1>
      <div className='brLine'></div>
      {/* <img src={construction} alt="construction" /> */}
      <div className='artists'>
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={clint} alt="clint" />
          </div>
          <a href="https://www.instagram.com/clint.color/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Clint Dunlap - Colorist / Salon Owner <IoLogoInstagram size='20' /></p></a>
        </div>
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={maddison} alt="maddison" />
          </div>
          <a href="https://www.instagram.com/maddisoncolors/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Maddison Cave - Colorist / Stylist <IoLogoInstagram size='20' /></p></a>
        </div>
        
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={kevin} alt="kevin" />
          </div>
          <a href="https://www.instagram.com/kevinandrewbaker/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Kevin Baker - Stylist <IoLogoInstagram size='20' /></p></a>
        </div>
        
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={sam} alt="samantha" />
          </div>
          <a href="https://www.instagram.com/samanthahreed/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Samantha Reed - Stylist / Colorist / Extension Specialist <IoLogoInstagram size='20' /></p></a>
        </div>

        {/* <div className='artistbox'>
          <div className='imgbox'>
            <img src={jason} alt="jason" />
          </div>
          <a href="https://www.instagram.com/jasonjosephhair/?hl=en" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Jason Joseph - Stylist / Colorist <IoLogoInstagram size='20' /></p></a>
        </div> */}
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