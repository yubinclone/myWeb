const API_KEY = "228ca13b4812a6e736691aa1a5ea3f12"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
          const weather = document.querySelector("#weather span:first-child");
          const city = document.querySelector("#weather span:last-child");
          city.innerText = data.name;
          weather.innerText = data.weather[0].main;
      });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

