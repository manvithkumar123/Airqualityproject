import React from 'react'
import "./about.css"
import images from '../../images/images'

const About = () => {
  return (
    <div className='aboutpage'>
        <h1>About</h1>
        <div className="image_text_container">
        <div className="about_img_background">
        <img src={images.about} alt="" id='about_image' />
        </div>
        <div className="about_text_container">
            <img src={images.logo} alt="" id='logo_about'/>
            <p>
  Vayuv is an intelligent air quality monitoring web application developed using React. It leverages powerful APIs to fetch and display real-time data related to air pollution levels across multiple cities. The platform presents detailed insights such as the Air Quality Index (AQI), pollutant concentrations, and health recommendations, making it easy for users to understand the quality of the air they breathe. With an intuitive and responsive design, Vayuv aims to raise awareness about environmental conditions and empower users to make informed decisions for their health and well-being. 
  </p>
  <p id='para_2'>Air quality monitoring is more critical now than ever before. Due to rapid urbanization, vehicular emissions, industrial activities, and deforestation, the concentration of harmful pollutants in the atmosphere has significantly increased. Poor air quality contributes to various health problems, including asthma, lung cancer, cardiovascular diseases, and developmental issues in children. It also has detrimental effects on the climate and ecosystem. By providing timely and accessible air quality information, Vayuv plays a key role in environmental education and encourages users to adopt eco-friendly practices. This project not only highlights the value of technology in solving real-world problems but also underscores the urgent need for sustainable living.
</p>
        </div>
        </div>
    </div>
  )
}

export default About
