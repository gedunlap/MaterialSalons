import React from 'react'
import clint from '../Photos/TPA/Clint Dunlap.jpg'
import sam from '../Photos/TPA/Samantha Reed.jpg'
import kevin from '../Photos/TPA/Kevin Baker.jpg'
import alisa from '../Photos/StPete/Alisa Fox.jpg'
import rachel from '../Photos/StPete/Rachel Entwistle.jpg'
import { IoLogoInstagram } from 'react-icons/io'
// import construction from '../Photos/UnderConstruction.png'


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
          <a href="https://www.instagram.com/clint.color/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Clint Dunlap <IoLogoInstagram size='20' /></p></a>
        </div>

        <div className='artistbox'>
          <div className='imgbox'>
            <img src={sam} alt="samantha" />
          </div>
          <a href="https://www.instagram.com/samanthahreed/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Samantha Reed <IoLogoInstagram size='20' /></p></a>
        </div>
        
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={kevin} alt="kevin" />
          </div>
          <a href="https://www.instagram.com/kevinandrewbaker/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Kevin Baker <IoLogoInstagram size='20' /></p></a>
        </div>

        <div className='artistbox'>
          <div className='imgbox'>
            <img src={alisa} alt="alisa" />
          </div>
          <a href="https://www.instagram.com/alisafox1112/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Alisa Fox <IoLogoInstagram size='20' /></p></a>
        </div>

        <div className='artistbox'>
          <div className='imgbox'>
            <img src={rachel} alt="rachel" />
          </div>
          <a href="https://www.instagram.com/lightenedbyrach/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Rachel Entwistle <IoLogoInstagram size='20' /></p></a>
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