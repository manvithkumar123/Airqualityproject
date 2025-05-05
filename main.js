

var container = document.getElementById("mutiple-city-aqi");
container.style.display = "flex";
container.style.height="650px";
container.style.flexWrap = "wrap";
container.style.gap = "10px";
container.style.overflow = "scroll";
cities.forEach(function (city, index) {
    setTimeout(() => {  // Add a delay to prevent overwriting
        let cityContainer = document.createElement("div");
        cityContainer.id = `aqi-${city}`;
        cityContainer.className = "city-aqi";
        cityContainer.style.width = "150px";  // Ensuring fixed width for side-by-side layout
        cityContainer.style.textAlign = "center";
        cityContainer.style.border = "1px solid #ddd";
        cityContainer.style.padding = "10px";

        container.appendChild(cityContainer);

        _aqiFeed({
            container: cityContainer.id,  // Unique container for each city
            city: city
        });
        function displayCity(aqi) {  
            let cityData = `<center>${aqi.city}<br>${aqi.aqi}<br><small>${aqi.date}</small></center>`;  
            $("#mutiple-city-aqi").append(`<div class='city-aqi'>${cityData}</div>`);  
        }
    }, index * 150);  // 1-second delay per city
});
function updateAQI() {
    let selectedCity = document.getElementById("city").value.trim().toLowerCase();
    
    if (!selectedCity) {
        alert("Please enter a city name!");
        return;
    }

    document.getElementById("city-aqi-container").innerHTML = "Loading...";

    (function (w, d, t, f) {  
        w[f] = w[f] || function (c, k, n) {  
            let s = w[f];  
            k = s['k'] = (s['k'] || (k ? ('&k=' + k) : ''));  
            s['c'] = c = (c instanceof Array) ? c : [c];  
            s['n'] = n = n || 0;  
            let L = d.createElement(t), e = d.getElementsByTagName(t)[0];  
            L.async = 1;  
            L.src = '//feed.aqicn.org/feed/' + encodeURIComponent(c[n].city) + '/feed.v1.js?n=' + n + k;  
            e.parentNode.insertBefore(L, e);  
        };  
    })(window, document, 'script', '_aqiFeed');  

    _aqiFeed({    
        display: "%details",
        container: "city-aqi-container",
        city: selectedCity  
    });  
}

// Listen for "Enter" key press in the input field
document.getElementById("city").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        updateAQI();
    }
});