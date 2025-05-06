import React, { useEffect } from 'react';
import "./Vayuvbot.css"

const Vayuvbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div className='robo_page'>
      <h1 style={{textAlign:"center",paddingTop:"50px"}}>Creators</h1>
        <div className="robo_bg">
      < spline-viewer className="robo" url="https://prod.spline.design/D5cy91ojE5WhqwWr/scene.splinecode" />
      <div className="information_flex">
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
          </div>
        </div>



    </div>
  );
};

export default Vayuvbot;