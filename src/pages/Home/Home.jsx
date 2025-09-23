import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../../public/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCards/TitleCard'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt='' className='banner-img'/>
        <div className='hero-caption'>
          <img src={hero_title} alt='' className='caption-img'/>
          <p>
            Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his daring plan.
          </p>
          <div className='hero-btns'>
            <button className='btn'><img src={play_icon} alt=''/>Play</button>
             <button className='btn dark-btn'><img src={info_icon} alt=''/>More Info</button>
          </div>
          <TitleCard/>
        </div>
      </div>
      <div className='more-cards'>
        <TitleCard title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCard title={"Only on Netflix"} category={"popular"}/>
        <TitleCard title={"Upcoming"} category={"upcoming"}/>
        <TitleCard title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
