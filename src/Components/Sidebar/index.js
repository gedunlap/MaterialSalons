import React from 'react'
// import { FaBorderNone } from 'react-icons/fa'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarBtn, ShopNav } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
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
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar