import React from 'react'
import Navbar from '../components/Navbar'
import AnnouncementBanner from '../components/AnnouncementBanner'
import Slider from '../components/Slider'


const Home = () => {
    return (
        <div>
            <AnnouncementBanner/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Home
