import React from 'react'
import "./footer.css"
import images from '../../images/images'

const Footer = () => {
  return (
    <div className='footer_page'>
        <div className="footer_bg" style={{ backgroundImage: `url(${images.footer})` }}>
            <div className="footer_box">
                <div className="circle_img"></div>
                <h5>Medipelly Manvith kumar</h5>
                <p>A passionate web developer interested in development, design, and building meaningful digital experiences. Always eager to learn new technologies and contribute to impactful projects.</p>
                <div className="links_container">
                <i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i>
                <i className="fa-brands fa-github" style={{color: "#ffffff"}}></i>
                <i className="fa-brands fa-x-twitter" style={{color: "#ffffff"}}></i>
                <i className="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i>

                </div>
            </div>
            <div className="footer_box">
            <div className="circle_img"></div>
            <h5>Garlapati Mohan Krishna</h5>
            <p>A passionate UI/UX designer focused on creating intuitive and visually appealing user experiences. Dedicated to blending aesthetics with usability for impactful digital design.</p>
            <div className="links_container">
                <i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i>
                <i className="fa-brands fa-github" style={{color: "#ffffff"}}></i>
                <i className="fa-brands fa-x-twitter" style={{color: "#ffffff"}}></i>
                <i className="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i>

                </div>
            </div>
            <div className="footer_box">
            <div className="circle_img"></div>
            <h5>Vedipyappan Benny</h5>
            <p>A passionate app developer with a strong focus on crafting seamless mobile experiences. Skilled in turning ideas into robust and user-friendly applications.</p>
            <div className="links_container">
                <i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i>
                <i className="fa-brands fa-github" style={{color: "#ffffff"}}></i>
                <i className="fa-brands fa-x-twitter" style={{color: "#ffffff"}}></i>
                <i className="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i>

                </div>
            </div>
            <div className="footer_box">
            <div className="circle_img"></div>
              <h5>Vayuv</h5>
              <p>
                Our project, Vayuv, is an air quality monitoring application designed to measure and display air quality parameters such as AQI, PM2.5, and PM10 using data from the OpenWeather API. The website is user-friendly and features interactive graphs showing the air quality trends from the past 24 hours.
              </p>
            </div>
      </div>
    </div>
  )
}

export default Footer
