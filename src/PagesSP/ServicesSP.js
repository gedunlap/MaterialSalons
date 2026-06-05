import React from 'react'
import img9 from '../Photos/Site Pics/9.jpg'
import longhair from '../Photos/longhair.jpg'
// import { BiRightArrow } from "react-icons/bi";
// import { BsArrowRightShort } from "react-icons/bs";



const Services = () => {
  return (
    <div className='services'>
      <div className='servicesHeader'><h1>SERVICES</h1></div>
      <div className='brLine' />
      {/* <img className='servicesHeaderImg' src={img9} alt="salon" /> */}
      <h3 style={{textAlign:"center"}}>* The listings below indicate starting prices. Final prices will depend on service provider, timing, hair length, density and / or special treatment required.</h3>
      <div className='servicesColor'>
        <div className='colorTextBox'>
          <h2>COLOR</h2><br />
          <h4 className='colorLabel'>Color Consultation </h4>
          <p className='colorText'>An in depth conversation about your hair color needs and your future appointment. <br /> <span className='price'>Free</span></p><br />
          <h4 className='colorLabel'>New Guest Color Appointment </h4>
          <p className='colorText'>Includes a full consultation, custom color service, and nourishing treatment. <br /> <span className='price'>From $375</span></p><br />
          <h4 className='colorLabel'>Full Curated Color </h4>
          <p className='colorText'>Ideal for full highlights, balayage, or major color changes. Best for high-maintenance color. <br /> <span className='price'>From $350</span></p><br />
          <h4 className='colorLabel'>Curated Color Maintenance </h4>
          <p className='colorText'>Perfect for refreshing lived-in or dimensional color. Includes partial highlights or lowlights. <br /> <span className='price'>From $275</span></p><br />
          <h4 className='colorLabel'>Hairline Highlight </h4>
          <p className='colorText'>Face-framing highlights to refresh brightness around the hairline. <br /> <span className='price'>From $225</span></p><br />
          <h4 className='colorLabel'>Root Touch-Up </h4>
          <p className='colorText'>Single-process color for covering roots or grays. Includes toner. (No highlights included.) <br /> <span className='price'>From $165</span></p><br />
          <h4 className='colorLabel'>Gloss / Toner </h4>
          <p className='colorText'>Refresh tone, add shine, and condition. Great between color appointments.  <br /> <span className='price'>From $100</span></p><br />
        </div>
        <div className='colorImgBox'>
          <img className='servicesColorImg' src={longhair} alt="longhair" />
        </div>
      </div>
      <div className='servicesStyle'>
        <div className='stylingImgBox'>
          <img className='servicesStylingImg' src={img9} alt="salon" />
        </div>
        <div className='stylingTextBox'>
          <h2>STYLING</h2><br />
          <h4 className='stylingLabel'>Haircut + Style </h4>
          <p className='stylingText'>Custom haircut with shampoo, blow-dry, and styling. <br /> <span className='price'>From $115</span></p><br />
          <h4 className='stylingLabel'>Haircut Add-On (with Color) </h4>
          <p className='stylingText'>Trim or clean-up added to any color service. Includes blow-dry and style. (Only book with color.) <br /> <span className='price'>From $75</span></p><br />
          <h4 className='stylingLabel'>Men's Cut + Style </h4>
          <p className='stylingText'>Precision cut and tailored styling. <br /> <span className='price'>From $60</span></p><br />
          <h4 className='stylingLabel'>Blowout </h4>
          <p className='stylingText'>Shampoo, blow-dry, and style. <br /> <span className='price'>From $80</span></p><br />
          <h4 className='stylingLabel'>Event Styling / Updo </h4>
          <p className='stylingText'>Special occasion or formal styling, customized to your event. <br /> <span className='price'>From $120</span></p><br />
          <h4 className='stylingLabel'>Brazilian Blowout </h4>
          <p className='stylingText'>Smoothing treatment to reduce frizz and boost shine. <br /> <span className='price'>From $250</span></p><br />

          <h2>EXTENSIONS</h2>
          <h4 className='stylingLabel'>Extension Consultation</h4>
          <p className='stylingText'>In-depth in-person consultation to discuss your goals and options.<br /> <span className='price'>Free</span></p><br />
        </div>
      </div>
      <h4 style={{textAlign:"center", width:"70%", fontFamily:"Helvetica Now Bold"}}>Consultations for Color, Haircuts and Extensions are Complimentary</h4>
      <button><a href="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking?menu=true" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}>Book An Appointment</a></button>
      {/* <img className='servicesFooterImg' src="https://i.imgur.com/q9zryo0.jpg" alt="example" /> */}
    </div>
  )
}

export default Services