const API_KEY = "165201fab6b176865a2215a94d157d9c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}, ${data.main.temp}`;

      const weathericon = document.createElement("img");
      weathericon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weathericon.classList.add("bigicon");
      document.querySelector("#weather").appendChild(weathericon);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
