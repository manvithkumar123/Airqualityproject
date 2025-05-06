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
import Vayuvbot from './assets/components/vayu/Vayuvbot'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div id="home"><Home/></div>
      <div id="metrics"><Metrics/></div>
      <div id="trends"><Trends/></div>
      <div id="about"><About/></div>
      <div id="parameters"><Parameters/></div>
      <div id="categories"><Categories/></div>
      <div id="quality"><Quality/></div>
      <div id="map1"><Map/></div>
      <div id="vayuvbot"><Vayuvbot/></div>
    </div>
  )
}

export default App
