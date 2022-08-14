const API_KEY = "165201fab6b176865a2215a94d157d9c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.getElementById("weather");
      const city = weatherContainer.querySelector("span:nth-child(1)");
      city.innerText = data.name;
      const degree = weatherContainer.querySelector("span:nth-child(2)");
      degree.innerText = `${data.main.temp}℃`;
      const weather = weatherContainer.querySelector("span:nth-child(3)");
      weather.innerText = `${data.weather[0].main}`;
      const weathericon = weatherContainer.querySelector("img");
      weathericon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      console.dir(data);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
