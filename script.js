
let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDay = days[date.getDay()];
  
  let currentHours = date.getHours();
if (currentHours < 10) {
  currentHours = `0${currentHours}`;
}
let currentMinutes = date.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}


  let formattedDate = document.querySelector("#time");
formattedDate.innerHTML = `${currentDay} ${currentHours}:${currentMinutes}`;
  return formattedDate;
}
console.log(formatDate(currentTime));

//Weather
function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
        document.querySelector("#temperature").innerHTML = `${Math.round(response.data.main.temp)}˚C`;
    document.querySelector("#humidity").innerHTML = `Humidity: ${response.data.main.humidity}%`;
    document.querySelector("#wind-speed").innerHTML = `Wind speed: ${Math.round(response.data.wind.speed)}m/sec`;
    document.querySelector("#visibility").innerHTML = `Visibility: ${response.data.visibility}m`;
    document.querySelector("#feels-like").innerHTML = `Feels like: ${Math.round(response.data.main.feels_like)}˚C`;
    document.querySelector("#current-weather").innerHTML = response.data.weather[0].main;
    
  }
  
  function searchCity(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  searchCity("Odesa");

  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
  }

  let searchForm = document.querySelector("#city-form");
  searchForm.addEventListener("submit", handleSubmit);

  function searchLocation(position) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
      position.coords.latitude
    }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  

  

  

