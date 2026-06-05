import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Landing from './Landing'

import Home from '../PagesTP/HomeTP'
import About from '../PagesTP/AboutTP'
import Gallery from '../PagesTP/GalleryTP'
import Services from '../PagesTP/ServicesTP'
import PriceUpdates from '../PagesTP/PriceUpdatesTP'

import HomeSP from '../PagesSP/HomeSP'
import AboutSP from '../PagesSP/AboutSP'
import GallerySP from '../PagesSP/GallerySP'
import ServicesSP from '../PagesSP/ServicesSP'

const Main = () => {
  return (
    <Routes>
        <Route path='/' exact element={<Landing/>} />

        <Route path='/tp/home' element={<Home/>} />
        <Route path='/tp/about' element={<About/>} />
        <Route path='/tp/gallery' element={<Gallery/>} />
        <Route path='/tp/services' element={<Services/>} />
        <Route path='/tp/priceupdates' element={<PriceUpdates/>} />

        <Route path='/sp/home' element={<HomeSP/>} />
        <Route path='/sp/about' element={<AboutSP/>} />
        <Route path='/sp/gallery' element={<GallerySP/>} />
        <Route path='/sp/services' element={<ServicesSP/>} />
    </Routes>
  )
}

export default Main