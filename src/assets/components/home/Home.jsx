import React from 'react'
import "./home.css"
import images from '../../images/images'

const Home = () => {
  return (
    <div className='homepage'>
        <div className="text_container">
        <h1>Breathe Easy with <br />Real-Time Air Quality Monitoring</h1>
        <p>
        Track PM2.5, PM10, CO2, and NO levels <br />to stay informed about the air you breathe.
        </p>
        <div className="button_container">
            <button id='know_button'><a href="#map1" style={{textDecoration:"none",color:"black"}}>Know In My Location</a></button>
        </div>
        <div className="frame">
          <h3 style={{fontWeight:"600",fontSize:"30px",textAlign:"center",marginTop:"10px",color:"white"}}>Loading 3D view...</h3>
          <spline-viewer url="https://prod.spline.design/LyllTwoID7y5r9KO/scene.splinecode" id="earth_view"></spline-viewer>
        </div>
        </div>
    </div>
  )
}

export default Home
