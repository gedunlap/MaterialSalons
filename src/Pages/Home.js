import React from 'react'
// import construction from '../Photos/UnderConstruction.png'
import Slideshow from '../Components/Slideshow/Slideshow'
import Slideshow2 from '../Components/Slideshow2/Slideshow2'
import { AiOutlinePhone } from "react-icons/ai";
import { NavBtnA } from '../Components/Navbar/NavbarElements'
import tm from '../Photos/TM-symbol.png'

import tpaLogo from '../Photos/Site Pics/tpa-logo.jpg'
import mspLogo from '../Photos/Site Pics/msp-logo.jpg'


// const Home = () => {
//   return (
//       <div className='home'>
//         <img className='homelogo' src="https://imgur.com/7ykZPJM.jpg" alt="logo" />
//         <img className='homelogotm' src={tm} alt="logotm" />
//         {/* <div classname='slideshowweb' style={{display:'flex', justifyContent:'center'}}>
//           <img className='underconstruction' style={{margin:'50px', width:'40%'}} src={construction} alt="under-construction"/>
//         </div> */}
        
//         <div className='slideshowweb'>
//           <Slideshow />
//         </div>
//         <div className='slideshowphone'>
//           <Slideshow2 />
//         </div>
//         <div className='homeText'>
//           <div className='brLine' />
//           <NavBtnA>
//             <a href="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking?menu=true" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}>APPOINTMENTS</a>
//           </NavBtnA>
//           <br />
//           <div><AiOutlinePhone size='35' style={{color:"white"}} /><br /><a href="tel:+1-813-280-1356" style={{color:"white", textDecoration:"none", fontSize:"25px"}}>(813) 280-1356</a></div>
//           <br />
//           <div className="t4"><p>2502 N. Howard Ave Suite A Tampa, FL 33607</p></div>
//           <div className='t5'>Tuesday - Saturday: 9am-5pm</div>
//         </div>
//       </div>
//   )
// }


const Home = () => {
  return (
    <div className='home'>
      Hello
      <img className='homelogotp' src={tpaLogo} alt="logo" />
      <img className='homelogosp' src={mspLogo} alt="logo" />
    </div>
  )
}

export default Home