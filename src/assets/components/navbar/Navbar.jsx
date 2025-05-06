import React, { useEffect, useState } from 'react'
import "./navbar.css"
import images from "../../images/images"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#home">
            Home
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="10px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="10px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#metrics">
            Metrics
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="10px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#trends">
            Trends
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="10px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#parameters">
          Parameters
          <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="10px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#categories">
          Categories
          <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="10px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#quality">
          Find Now
          <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="10px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#map1">
            Maps
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="10px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#map">
            Creators
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="10px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#vayuvbot">
          <button id='navbar_button'>Log in</button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          <button id='navbar_button'>Get Started</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
