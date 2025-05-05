import React from 'react'
import Navbar from './assets/components/navbar/Navbar'
import Home from './assets/components/home/Home'
import About from './assets/components/About/About'
import Trends from './assets/components/trends/Trends'
import Metrics from './assets/components/metrics/Metrics'
import Parameters from './assets/components/Parameters/Parameters'
import Categories from './assets/components/Categories/Categories'
import Quality from './assets/components/Quality/Quality'
import Map from './assets/components/Map/Map'
import Footer from './assets/components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>/
      <Metrics/>
      <Trends/>
      <About/>
      <Parameters/>
      <Categories/>
      <Quality/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default App
