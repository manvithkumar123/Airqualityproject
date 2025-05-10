import React from 'react'
import "./Parameter.css"

const Parameters = () => {
  return (
    <div className='parameter_page'>
        <h1>Parameters</h1>
      <div className="parameter_card_container">
        <div className="parameter_card">
            <h3>PM2.5</h3>
            <div>Fine particulate matter with a diameter of 2.5 micrometers or smaller. These particles are small enough to penetrate deep into the lungs and even enter the bloodstream.
            <h5>Sources:</h5><br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Vehicle emissions<br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Power plants<br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Industrial processes<br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Wildfires<br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Cooking and heating with solid fuels
            </div>
        </div>
        <div className="parameter_card">
        <h3>PM10</h3>
            <div>Coarse particulate matter with a diameter between 2.5 and 10 micrometers. These particles can enter the respiratory system but are generally filtered out before reaching the lungs.
            <h5>Sources:</h5><br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Dust from roads and construction            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Agricultural operations            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Mining activities            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Wind-blown dust            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Pollen and mold spores
            </div>
        </div>
        <div className="parameter_card">
        <h3>CO2</h3>
            <div>   Carbon dioxide (CO₂) is a naturally occurring gas that is also a byproduct of various human activities. It is essential for the Earth's carbon cycle but contributes significantly to global warming when its concentration in the atmosphere rises due to human actions.
            <h5>Sources:</h5><br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Human and animal respiration            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Combustion of fossil fuels            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Industrial processes            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Deforestation<br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Indoor sources cooking and heating  
            </div>
        </div>
        <div className="parameter_card">
        <h3>NO</h3>
            <div>Nitric oxide is a reactive gas that quickly converts to nitrogen dioxide (NO2) in the atmosphere. Both are nitrogen oxides (NOx) and contribute to air pollution.
            <h5>Sources:</h5><br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Vehicle exhaust            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Power plants            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Industrial processes            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg> Gas stoves and heaters            <br />
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M400-280v-400l200 200-200 200Z"/></svg>Burning of fossil fuels

            </div>
        </div>
      </div>
    </div>
  )
}

export default Parameters
