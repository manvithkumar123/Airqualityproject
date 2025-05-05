import React from 'react'
import "./metrics.css"

const Metrics = () => {
  return (
    <div className='metrics_page'>
        <h1 style={{textAlign:"center"}} id='metrics'>Metrics</h1>
      <div className="metrics_cards_container">
        <div className="metrics_card">
        <i className="fa-solid fa-lungs" style={{ color: "#11caf0" }} id='metrics_logo'></i>
        <h3 style={{marginTop:"10px"}}>PM2.5</h3>
        <h2>12.5</h2>
        <h6>μg/m³</h6>
        <p>Fine Particulate Matter</p>
        </div>
        <div className="metrics_card">
        <i className="fa-solid fa-smog" style={{color: "#FFD43B" }} id='metrics_logo'></i>
        <h3 style={{marginTop:"10px"}}>PM10</h3>
        <h2>35.2</h2>
        <h6>μg/m³</h6>
        <p>Coarse Particulate Matter</p>
        </div>
        <div className="metrics_card">
        <i className="fa-solid fa-cloud" style={{color: "#f50505"}} id='metrics_logo'></i>
        <h3 style={{marginTop:"10px"}}>CO2</h3>
        <h2>412.5</h2>
        <h6>ppm</h6>
        <p>Carbon Dioxide</p>
        </div>
        <div className="metrics_card">
        <i className="fa-solid fa-industry" style={{color: "#018df9"}}  id='metrics_logo'></i>
        <h3 style={{marginTop:"10px"}}>NO</h3>
        <h2>24.8</h2>
        <h6>ppb</h6>
        <p>Nitric Oxide</p>
        </div>
      </div>
    </div>
  )
}

export default Metrics
