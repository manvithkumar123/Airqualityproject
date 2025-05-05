import React from 'react'
import "./home.css"
import images from '../../images/images'

const Home = () => {
  return (
    <div>
        <div className="text_container">
        <h1>Breathe Easy with <br />Real-Time Air Quality Monitoring</h1>
        <p>
        Track PM2.5, PM10, CO2, and NO levels <br />to stay informed about the air you breathe.
        </p>
        <div className="button_container">
            <button id='know_button'>Know In My Location</button>
        </div>
        <div className="frame">
            <video src={images.video} autoPlay loop muted playsInline id='videointromy'></video>
        </div>
        </div>
    </div>
  )
}

export default Home
