import React from 'react'
import "./categories.css"
const Categories = () => {
  return (
    <div className='air_quality_page'>
      <h1>Categories</h1>
      <div className="air_quality_container">
        <div className="category_card">
        <i className="fa-solid fa-thumbs-up" style={{color:"ffffff"}} id="category_logo"></i>
          <h3>Good(0-50)</h3>
          <h5>Air quality is considered satisfactory, and air pollution poses little or no risk.</h5>
          <h6>It's a great day to be active outside.</h6>
          <h5>AQI-range(0-50)</h5>
        </div>
        <div className="category_card">
        <i className="fa-solid fa-circle-check" style={{color: "#ffffff"}}  id="category_logo"></i>
          <h3>Moderate(51-100)</h3>
          <h5>Air quality is acceptable; however, some pollutants may be a moderate health concern for a very small number of people.</h5>
          <h6>Unusually sensitive individuals may consider limiting prolonged outdoor exertion.</h6>
          <h5>AQI-range(51-100)</h5>
        </div>
        <div className="category_card">
        <i className="fa-solid fa-mask" style={{color: "#ffffff"}}  id="category_logo"></i>
          <h3>Unhealthy for Sensitive Groups(101-150)</h3>
          <h5>Members of sensitive groups may experience health effects. The general public is not likely to be affected.</h5>
          <h6>Sensitive groups should reduce prolonged or heavy exertion outdoors.</h6>
          <h5>AQI-range(101-150)</h5>
        </div>
        <div className="category_card">
        <i className="fa-solid fa-thumbs-down" style={{color: "#ffffff"}}  id="category_logo"></i>
          <h4>Unhealthy(151-200)</h4>
          <h5>Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</h5>
          <h6>Limit outdoor activities and avoid prolonged exertion.</h6>
          <h5>AQI-range(151-200)</h5>
        </div>
        <div className="category_card">
        <i className="fa-solid fa-radiation" style={{color: "#ffffff"}}  id="category_logo"></i>
          <h3>Very Unhealthy(201-300)</h3>
          <h5>Health alert: everyone may experience more serious health effects.</h5>
          <h6>Avoid outdoor activities and remain indoors as much as possible.</h6>
          <h5>AQI-range(201-300)</h5>
        </div>
        <div className="category_card">
        <i className="fa-solid fa-skull" style={{color: "#ffffff"}}  id="category_logo"></i>
          <h3>Hazardous(301-500)</h3>
          <h5>Health warnings of emergency conditions. The entire population is more likely to be affected.</h5>
          <h6>Everyone should avoid all outdoor exertion.</h6>
          <h5>AQI-range(301-500)</h5>
        </div>
      </div>
    </div>
  )
}

export default Categories
