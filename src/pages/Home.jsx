import React from 'react'
import Navbar from '../components/Navbar'
import AnnouncementBanner from '../components/AnnouncementBanner'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'


const Home = () => {
    return (
        <div>
            <AnnouncementBanner/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
        </div>
    )
}

export default Home
