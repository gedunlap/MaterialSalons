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
            <SidebarLink to='/sp/home'>
              Home
            </SidebarLink>
            <SidebarLink to='/sp/about'>
              About
            </SidebarLink>
            <SidebarLink to='/sp/gallery'>
              Artists & Gallery
            </SidebarLink>
            <SidebarLink to='/sp/services'>
              Services
            </SidebarLink>
            <ShopNav>
              <a href="https://www.fresha.com/store/material-tampa-qx5n1np4?pId=537575" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}>Shop</a>
            </ShopNav>
          </SidebarMenu>
        </SidebarWrapper>
        <SideBtnWrap>
          <SidebarBtn>
            <a className="sidebtn" href="https://www.fresha.com/a/material-st-pete-st-petersburg-1957-1st-avenue-south-jemgscy9?pId=537575" target="_blank" rel='noreferrer' style={{textDecoration:"none", color:"black"}}>APPOINTMENTS</a>
          </SidebarBtn>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar