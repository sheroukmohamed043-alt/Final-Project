import React from 'react'
import AllCompo from './Components/AllCompo'
import Footer from './Components/Footer'
import Banner from './Home/Banner'
import Features from './Home/Features'
import VideoSec from './Home/VideoSec'
import VideoContent from './Home/VideoContent'
import FunFacts from './Home/FunFacts'
import BestDeal from './Home/BestDeal'
import PropSec from './Home/PropSec'
import ContactSec from './Home/ContactSec'
import ContactContent from './Home/ContactContent'

function App() {
  return (
    <div>
      <AllCompo/>
      <Banner/>
      <Features/>
      <VideoSec/>
      <VideoContent/>
      <FunFacts/>
      <BestDeal/>
      <PropSec/>
      <ContactSec/>
      <ContactContent/>
      <Footer/>
      </div>
  )
}

export default App
