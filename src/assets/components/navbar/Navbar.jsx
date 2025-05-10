import React, { useEffect, useState, useRef } from 'react'
import "./navbar.css"
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";  // Import auth from your firebase.js
import images from "../../images/images"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [hidelogin, sethidelogin] = useState(false);
  const loginRef = useRef(null);
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  // Sign in with Google (Popup)
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        alert(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        alert("Error during sign-in: " + error.message);
      });
  };

  // Sign in with Facebook (Popup)
  const signinwithgithub = () => {
    signInWithPopup(auth, githubProvider) // ✅ Correct
      .then((result) => {
        const user = result.user;
        alert(`Welcome ${user.displayName}`);
      })
      .catch((error) => {
        alert("Error during GitHub sign-in: " + error.message);
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);  // Update user state when login/logout occurs
    });

    return () => unsubscribe();  // Cleanup when the component unmounts
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Successfully logged out!");  // Show success alert
        setUser(null);  // Clear the user state
      })
      .catch((error) => {
        alert("Error logging out: " + error.message);  // Show error message
      });
  };

  return (
    <div className="navbarpage">
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={images.logo} alt="" id='logo'/>
    </a>
    <button id='menu_button'
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link " href="#home">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#about" id="aboutDropdown" role="button" data-bs-toggle="abtdropdown" aria-expanded="false">
    About
  </a>
  <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
    <ul id="dropdown1" >
    <li><a className="dropdown-item" href="#about">Why monitor Air Quality</a></li>
    <li><a className="dropdown-item" href="#about">points that affect air quality</a></li>
    <li><a className="dropdown-item" href="#about">Health effects</a></li>
    <li><a className="dropdown-item" href="#about">About Vayuv</a></li>
  </ul>
  <div className="line"></div>
  <div className="abt_text">
    Learn why monitoring air quality is essential. Understand what factors impact it, how it affects our health, and get to know more about our project—Vayuv.
  </div>
  </ul>
</li>
        <li className="nav-item  dropdown dropdown">
          <a className="nav-link dropdown-toggle" href="#metrics" id="MetricesDropdown" role="button" data-bs-toggle="metdropdown" aria-expanded="false">
            Metrics
          </a>
          <ul className="dropdown-menu" aria-labelledby="metricesDropdown">
            <ul id="dropdown1" >
            <li><a className="dropdown-item" href="#metrics">PM2.5</a></li>
            <li><a className="dropdown-item" href="#metrics">PM10</a></li>
            <li><a className="dropdown-item" href="#metrics">CO2</a></li>
            <li><a className="dropdown-item" href="#metrics">NO</a></li>
          </ul>
          <div className='line'></div>
          <div className="abt_text">
          In general, metrics are quantitative measures used to track and <br /> assess the status or performance of specific processes,<br /> conditions, or systems.
          <br />These are all air quality indicators — measurable values that help determine the pollution level in the air.
          </div>
          </ul>
        </li>
        <li className="nav-item  dropdown">
          <a className="nav-link dropdown-toggle" href="#trends" id="aboutDropdown" role="button" data-bs-toggle="tredropdown" aria-expanded="false">
            Trends
          </a>
          <ul className="dropdown-menu" aria-labelledby="trendsDropdown">
            <ul id="dropdown1" >
            <li><a className="dropdown-item" href="#trends">PM2.5,PM10</a></li>
            <li><a className="dropdown-item" href="#trends">CO2,NO</a></li>
            <li><a className="dropdown-item" href="#trends">AQI</a></li>
          </ul>
          <div className="line"></div>
          <div className="abt_text">
          It shows how air quality metrics <br />(like PM2.5, PM10, CO₂, NO, AQI) change over time <br />
          •Understand when pollution peaks (e.g-festivals) <br />
	•Track progress of air quality initiatives <br />
	•Make health or travel decisions based on data <br />
          </div>
          </ul>
        </li>
        <li className="nav-item  dropdown">
          <a className="nav-link dropdown-toggle" href="#parameters" id="aboutDropdown" role="button" data-bs-toggle="pardropdown" aria-expanded="false">
          Parameters
          </a>
          <ul className="dropdown-menu" aria-labelledby="parametersDropdown">
            <ul id="dropdown1" >
            <li><a className="dropdown-item" href="#parameters">PM2.5</a></li>
            <li><a className="dropdown-item" href="#parameters">PM10</a></li>
            <li><a className="dropdown-item" href="#parameters">CO2</a></li>
            <li><a className="dropdown-item" href="#parameters">NO</a></li>
          </ul>
          <div className="line"></div>
          <div className="abt_text">
          These are scientific components of the air <br />that are measured to calculate the Air Quality Index (AQI) or similar scores. <br /> Each parameter represents a different type of pollution.
          </div>
          </ul>
        </li>
        <li className="nav-item  dropdown">
          <a className="nav-link dropdown-toggle" href="#categories" id="aboutDropdown" role="button" data-bs-toggle="catdropdown" aria-expanded="false">
          Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
            <ul id="dropdown1" >
            <li><a className="dropdown-item" href="#categories">Good</a></li>
            <li><a className="dropdown-item" href="#categories">Moderate</a></li>
            <li><a className="dropdown-item" href="#categories">Unhealthy for senstive</a></li>
            <li><a className="dropdown-item" href="#categories">Unhealthy</a></li>
            <li><a className="dropdown-item" href="#categories">Very Unhealthy</a></li>
            <li><a className="dropdown-item" href="#categories">Hazardous</a></li>
          </ul>
          <div className="line"></div>
          <div className="abt_text">
          Air quality categories represent how clean or polluted the air is, based on AQI levels. Ranges like "Good," "Moderate," and "Hazardous" help people understand the health risks and decide whether it's safe to be outdoors.
          </div>
          </ul>
        </li>
        <li className="nav-item  dropdown" id="aboutDropdown" role="button" data-bs-toggle="finddropdown" aria-expanded="false">
          <a className="nav-link dropdown-toggle" href="#quality">
          Find Now
          </a>
          <ul className="dropdown-menu" aria-labelledby="findDropdown">
            <ul id="dropdown1" >
            <li><a className="dropdown-item" href="#quality">Air Quality</a></li>
            <li><a className="dropdown-item" href="#quality">AQI</a></li>
            <li><a className="dropdown-item" href="#quality">Find in map</a></li>
          </ul>
          <div className="line"></div>
          <div className="abt_text">
          Instantly check the air quality in your City. Get real-time AQI data to know if it's safe to be outdoors or take precautions.

          </div>
          </ul>
        </li>
        <li className="nav-item  dropdown" id="aboutDropdown" role="button" data-bs-toggle="mapdropdown" aria-expanded="false">
          <a className="nav-link dropdown-toggle" href="#map1">
            Maps
          </a>
          <ul className="dropdown-menu" aria-labelledby="mapDropdown">
          <ul id="dropdown1" >
            <li><a className="dropdown-item" href="#map1">Map</a></li>
            <li><a className="dropdown-item" href="#map1">Details</a></li>
            <li><a className="dropdown-item" href="#map1">Find your city</a></li>
          </ul>
          <div className="line"></div>
          <div className="abt_text">
          Explore real-time air quality data through interactive maps. Locate pollution hotspots, find your city, and visualize AQI levels across different regions instantly.
          </div>
          </ul>
        </li>
        <li className="nav-item  dropdown" id="aboutDropdown" role="button" data-bs-toggle="credropdown" aria-expanded="false">
          <a className="nav-link dropdown-toggle" href="#map">
            Creators
          </a>
          <ul className="dropdown-menu" aria-labelledby="creatorDropdown">
          <ul id="dropdown1" >
            <li><a className="dropdown-item" href="#robopage">Manvith</a></li>
            <li><a className="dropdown-item" href="#robopage">Mohan</a></li>
            <li><a className="dropdown-item" href="#robopage">Benny</a></li>
          </ul>
          <div className="line"></div>
          <div className="abt_text">
          This project was created with hard work, dedication, and passion by the team. We aimed to build something meaningful and informative for everyone.
          </div>
          </ul>
        </li>
        <li className="nav-item" style={{position:"relative"}} >
          <div className="nav-link">
            <button id='navbar_button' onClick={() => setShowLogin(!showLogin)}>Log in</button>
            {showLogin && (
              <div ref={loginRef} className="login_container1" style={{ position: "absolute" }}>
                <button onClick={() => setShowLogin(false)} id='cancel'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
                <button id="enter_button" onClick={signInWithGoogle}>Sign in with Google <i className="fa-brands fa-google"></i></button>
                <button id="enter_button" onClick={signinwithgithub}>Sign in with GitHub <i className="fa-brands fa-github"></i></button>
              </div>
            )}
          </div>
        </li>
        <li className="nav-item" style={{marginTop:'7px'}}>
          {user ? (
            <button id="navbar_button" onClick={handleLogout}>Log Out</button>
          ) : (
            null
          )}
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
