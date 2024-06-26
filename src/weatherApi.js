// Ensure you have an API key from OpenWeatherMap
const API_KEY = '2f7f1cf1684c1142c0de798cffbbcd09';

// Function to fetch weather data for a city
async function fetchWeatherByCity(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('City not found');
  }
  return response.json();
}

// Function to fetch weather data for the current location
async function fetchWeatherByCoords(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Location not found');
  }
  return response.json();
}

// Function to fetch extended weather forecast for a city
async function fetchExtendedForecast(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('City not found');
  }
  return response.json();
}

// Function to update the current weather display
function updateCurrentWeather(data) {
  document.getElementById('cityName').textContent = `${data.name} (${new Date().toLocaleDateString()})`;
  document.querySelector('.weather-card .text-lg:nth-child(2)').textContent = `Temperature: ${data.main.temp}°C`;
  document.querySelector('.weather-card .text-lg:nth-child(3)').textContent = `Wind: ${data.wind.speed} M/S`;
  document.querySelector('.weather-card .text-lg:nth-child(4)').textContent = `Humidity: ${data.main.humidity}%`;
  document.querySelector('.weather-card img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.querySelector('.weather-card .text-lg:nth-child(6)').textContent = data.weather[0].description;
}

// Function to update the 5-day forecast display
function updateForecast(data) {
  const forecastContainer = document.getElementById('forecastContainer');
  forecastContainer.innerHTML = '';
  for (let i = 0; i < data.list.length; i += 8) {
    const forecast = data.list[i];
    const date = new Date(forecast.dt_txt).toLocaleDateString();
    const card = document.createElement('div');
    card.className = 'p-4 forecast-card rounded-lg text-center';
    card.innerHTML = `
      <div>${date}</div>
      <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="${forecast.weather[0].description}" class="mx-auto mb-2">
      <div class="text-gray-700">Temp: ${forecast.main.temp}°C</div>
      <div class="text-gray-700">Wind: ${forecast.wind.speed} M/S</div>
      <div class="text-gray-700">Humidity: ${forecast.main.humidity}%</div>
    `;
    forecastContainer.appendChild(card);
  }
}

// Function to handle search button click
async function handleSearch() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    alert('Please enter a city name');
    return;
  }
  try {
    const weatherData = await fetchWeatherByCity(city);
    updateCurrentWeather(weatherData);
    const forecastData = await fetchExtendedForecast(city);
    updateForecast(forecastData);
  } catch (error) {
    alert(error.message);
  }
}

// Function to handle current location button click
async function handleCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const weatherData = await fetchWeatherByCoords(latitude, longitude);
        updateCurrentWeather(weatherData);
        const forecastData = await fetchExtendedForecast(weatherData.name);
        updateForecast(forecastData);
      } catch (error) {
        alert(error.message);
      }
    }, () => {
      alert('Unable to retrieve your location');
    });
  } else {
    alert('Geolocation is not supported by your browser');
  }






  
}




// Adding event listeners
document.getElementById('searchBtn').addEventListener('click', handleSearch);
document.getElementById('currentLocationBtn').addEventListener('click', handleCurrentLocation);

