import React from 'react'
import Navbar from '../components/Navbar'
import AnnouncementBanner from '../components/AnnouncementBanner'
import Slider from '../components/Slider'
import Categories from '../components/Categories'


const Home = () => {
    return (
        <div>
            <AnnouncementBanner/>
            <Navbar/>
            <Slider/>
            <Categories/>
        </div>
    )
}

export default Home
