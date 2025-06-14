import React, { useState, useEffect, useContext } from 'react';
import './quality.css';
import { Context } from '../context/Context';
import images from "../../images/images";

const Quality = () => {
  const [input, setinput] = useState("");
  const { onSent, resultData, Loading } = useContext(Context);
  const [city, setCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState(['beijing', 'hyderabad', 'delhi']); // Example cities
  const [altCity, setAltCity] = useState('');
  const [altSelectedCity, setAltSelectedCity] = useState('');
  const [geminiInput, setGeminiInput] = useState('');
  const [geminiResponse, setGeminiResponse] = useState('');

  useEffect(() => {
    // This will load AQI data for multiple cities after the component mounts
    cities.forEach((city, index) => {
      setTimeout(() => {
        let cityContainer = document.createElement('div');
        cityContainer.id = `aqi-${city}`;
        cityContainer.className = 'city-aqi';
        cityContainer.style.width = '150px';  // Fixed width for side-by-side layout
        cityContainer.style.textAlign = 'center';
        cityContainer.style.border = '1px solid #ddd';
        cityContainer.style.padding = '10px';

        document.getElementById('mutiple-city-aqi').appendChild(cityContainer);

        // Load the AQI feed for each city
        _aqiFeed({
          container: cityContainer.id,  // Unique container for each city
          city: city,
        });
      }, index * 150);  // 1-second delay per city
    });
  }, [cities]);

  useEffect(() => {
    if (!selectedCity) return;
    
    // Update AQI for selected city
    document.getElementById('city-aqi-container').innerHTML = 'Loading...';
    
    // Dynamically load the AQI feed script for the selected city
    (function (w, d, t, f) {
      w[f] = w[f] || function (c, k, n) {
        let s = w[f];
        k = s['k'] = (s['k'] || (k ? '&k=' + k : ''));
        s['c'] = c = (c instanceof Array) ? c : [c];
        s['n'] = n = n || 0;
        let L = d.createElement(t),
          e = d.getElementsByTagName(t)[0];
        L.async = 1;
        L.src = '//feed.aqicn.org/feed/' + encodeURIComponent(c[n].city) + '/feed.v1.js?n=' + n + k;
        e.parentNode.insertBefore(L, e);
      };
    })(window, document, 'script', '_aqiFeed');

    // Call the function to update AQI for the selected city
    _aqiFeed({
      display: '%details',
      container: 'city-aqi-container',
      city: selectedCity,
    });
  }, [selectedCity]);

  useEffect(() => {
    if (!altSelectedCity) return;

    const widget = document.getElementById('city-widget');
    widget.innerHTML = 'Loading...';

    (function (w, d, t, f) {
      w[f] = w[f] || function (c, k, n) {
        let s = w[f];
        k = s['k'] = (s['k'] || (k ? '&k=' + k : ''));
        s['c'] = c = (c instanceof Array) ? c : [c];
        s['n'] = n = n || 0;
        let L = d.createElement(t),
          e = d.getElementsByTagName(t)[0];
        L.async = 1;
        L.src = '//feed.aqicn.org/feed/' + encodeURIComponent(c[n].city) + '/feed.v1.js?n=' + n + k;
        e.parentNode.insertBefore(L, e);
      };
    })(window, document, 'script', '_aqiFeed');

    _aqiFeed({
      display: "<div style='%style;max-width:180px;text-align:center;'><small>%cityname AQI:</small> <div style='font-size:88px;margin-top:10px;height:130px;padding-top:0px;'>%aqiv</div> %impact</div>",
      container: 'city-widget',
      city: altSelectedCity,
    });

    setTimeout(() => {
      if (
        widget.innerHTML === 'Loading...' ||
        widget.innerHTML.trim() === ''
      ) {
        widget.innerHTML = '<p style="color:red;">City not found</p>';
      }
    }, 3000);
  }, [altSelectedCity]);

  const handleSubmit = () => {
    setSelectedCity(city);
  };

  const handleAltSubmit = () => {
    setAltSelectedCity(altCity);
  };
  return (
    <div className="qualitypage">
      <h1>Find your location Air Quality</h1>
      <div className="quality_container">
        <div className="login_container">
          <h2>Air Quality</h2>
          <div className="search_box">
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='Enter city'
            />
            <button onClick={handleSubmit} id='enter_button1'>Enter</button>
          </div>
          {/* AQI widget container for selected city */}
          <div id="city-aqi-container"></div>
        </div>
        <div className="login_container">
          <h2>AQI</h2>
          <div className="search_box">
            <input
              type="text"
              id="alt-city"
              value={altCity}
              onChange={(e) => setAltCity(e.target.value)}
              placeholder="Enter city for custom widget"
            />
            <button onClick={handleAltSubmit}  id='enter_button1'>Enter</button>
          </div>
          {/* Custom widget container */}
          <div id="city-widget" className="city-widget"></div>
        </div>
        <div className="robo_bg2">
        <spline-viewer className="robo_2"url="https://prod.spline.design/isiXzQiqmKJvEn0m/scene.splinecode"></spline-viewer>
        </div>
      </div>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js"></script>
      <div className="login_container1">
        <h4>ASK <img src={images.logo} alt="" id='logo' style={{marginLeft: '2px'}}/> </h4>
        <p>updated upto 2023</p>
        <div className="result_output">
          {Loading ? (
            <p>Loading...</p>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: geminiResponse || resultData }}></p>
          )}
        </div>
        <div className="input_send">
          <input
            onChange={(e) => setinput(e.target.value)}
            type="text"
            placeholder="Enter your message"
          />
          <button
            onClick={() => {
              const query = input.trim().toLowerCase();
              setGeminiResponse("");
              if (query === "manvith") {
                setGeminiResponse("Manvith is the member of this project well talented and hardworking web developer");
              } else if (query === "what is vayu") {
                setGeminiResponse("vayu is the project which is used to find the air quality of the city created by Manvith,Benny,Mohan");
              } else if (query === "benny") {
                setGeminiResponse("Benny is the member of this project well talented and hardworking app developer");
              } else if (query === "mohan") {
                setGeminiResponse("Mohan is the member of this project well talented and hardworking software developer");
              } else if (query === "who are you") {
                setGeminiResponse("I am Vayu, a virtual assistant created by Manvith, Benny, and Mohan to help you with your questions and tasks.");
              } else {
                onSent(input);
              }
            }}
          >
            Send
          </button>
          <div className="button_container">
          <button onClick={() => setGeminiResponse("Manvith is the member of this project well talented and hardworking web developer")}>About Manvith</button>
          <button onClick={() => setGeminiResponse("Benny is the member of this project well talented and hardworking app developer")}>About Benny</button>
          <button onClick={() => setGeminiResponse("Mohan is the member of this project well talented and hardworking software developer")}>About Mohan</button>
          <button onClick={() => setGeminiResponse("I am Vayu, a virtual assistant created by Manvith, Benny, and Mohan to help you with your questions and tasks.")}>Who am I</button>
          </div>
        </div>

        </div>
    </div>
  );
};

export default Quality;