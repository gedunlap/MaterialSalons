import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { IoMailOutline } from 'react-icons/io5'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnA, ShopNav } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
          <div className='navLeft'>
            <NavLink to="/">
                <img  style={{border:"solid white 2px"}} className='icon' src="https://i.imgur.com/hKIE2K1.jpg" alt="logo" />
            </NavLink>
            <NavMenu>
              <NavLink to="/about">
                About
              </NavLink>
              <NavLink to="/gallery">
                Artists & Gallery
              </NavLink>
              <NavLink to="/services">
                Services
              </NavLink>
              <ShopNav>
                <a href="https://www.fresha.com/store/material-tampa-qx5n1np4?pId=537575" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}>Shop</a>
              </ShopNav>
            </NavMenu>
          </div>
          <Bars onClick={toggle} />
          <NavBtn>
            <NavBtnA>
              <a href="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking?menu=true" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}>APPOINTMENTS</a>
            </NavBtnA>
            <a href="https://www.instagram.com/materialtampa/" target="_blank" rel="noreferrer"><IoLogoInstagram size='30' style={{color:"white"}} /></a>
            <a href="mailto: contact@materialtampa.com"><IoMailOutline size='30' style={{color:"white"}} /></a>
          </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar