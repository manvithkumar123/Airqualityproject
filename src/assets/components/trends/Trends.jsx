import React from 'react';
import AirQualityChart from './AirQualityChart';
import "./trends.css"

const Trends = () => {
  return (
    <div className='graph_pages'>
        <h1 style={{textAlign:"center",color:"white"}} id='trends'>Trends</h1>
        <div className="side_graphs">
        <div className="pm_graph">
        <AirQualityChart type="pm" />
      </div>
      <div className="co2graph">
        <AirQualityChart type="co2no" />
      </div>
        </div>

      <div className="aqigraph">
        <AirQualityChart type="aqi" id="chart"/>
      </div>
    </div>
  );
}

export default Trends;
