import React from 'react'
// import { FaBorderNone } from 'react-icons/fa'
import { SidebarContainer, Icon, CloseIcon} from './SidebarElements'
import { IoLogoInstagram } from 'react-icons/io'
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import mspLogo from '../../Photos/Site Pics/msp-logo.jpg'
import tpaLogo from '../../Photos/Site Pics/tpa-logo.jpg'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        {/* <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='/'>
              Home
            </SidebarLink>
            <SidebarLink to='/about'>
              About
            </SidebarLink>
            <SidebarLink to='/gallery'>
              Artists & Gallery
            </SidebarLink>
            <SidebarLink to='/services'>
              Services
            </SidebarLink>
            <ShopNav>
              <a href="https://www.fresha.com/store/material-tampa-qx5n1np4?pId=537575" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}>Shop</a>
            </ShopNav>
          </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>
          <SidebarBtn>
            <a className="sidebtn" href="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking?menu=true" target="_blank" rel='noreferrer' style={{textDecoration:"none", color:"black"}}>APPOINTMENTS</a>
          </SidebarBtn>
        </SideBtnWrap> */}
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"70vh"}}>
          <div>
            <p>SEE</p>
            <a href='/sp/home'><img className='sidebarlogo' src={mspLogo} alt="logo" /></a>
          </div>
          <div>
            <p>SEE</p>
            <a href='/tp/home'><img className='sidebarlogo' src={tpaLogo} alt="logo" /></a>
          </div>
        </div>
        <div className='landingsidebar'>
          <div>
            <a href="https://www.instagram.com/materialtampa/" target="_blank" rel="noreferrer"><IoLogoInstagram size='30' style={{color:"white"}} /></a>
            <p>TPA</p>
          </div>
          <div>
            <a href="http://www.instagram.com/materialstpete/" target="_blank" rel="noreferrer"><IoLogoInstagram size='30' style={{color:"white"}} /></a>
            <p>SPT</p>
          </div>
          <a href="http://tiktok.com/@materialsalons/" target="_blank" rel="noreferrer"><FaTiktok size='20' style={{color:"white"}} /></a>
          <a href="http://facebook.com/materialtampa/" target="_blank" rel="noreferrer"><FaFacebookF size='20' style={{color:"white"}} /></a>
        </div>
          
    </SidebarContainer>
  )
}

export default Sidebar