/* filename: complexWeatherApp.js */

// This is a complex weather application that uses a combination of data from various APIs to provide detailed weather information

// API Keys for various services
const openWeatherMapApiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const geolocationApiKey = "YOUR_GEOLOCATION_API_KEY";
const newsApiApiKey = "YOUR_NEWS_API_KEY";

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}`
    );
    
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
  }
}

// Function to get location coordinates using Geolocation API
async function getLocationCoordinates() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

// Function to fetch news articles related to weather
async function fetchNewsArticles() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=weather&apiKey=${newsApiApiKey}`
    );
    
    const newsData = await response.json();
    return newsData;
  } catch (error) {
    console.error("Error fetching news articles: ", error);
  }
}

// Main function to display weather information
async function displayWeatherInfo() {
  try {
    const city = prompt("Please enter a city:");
    const weatherData = await fetchWeatherData(city);
    
    console.log("Current Weather Information:");
    console.log("City:", weatherData.name);
    console.log("Temperature:", weatherData.main.temp);
    console.log("Humidity:", weatherData.main.humidity);
    
    const coordinates = await getLocationCoordinates();
    console.log("Current Location Coordinates:");
    console.log("Latitude:", coordinates.latitude);
    console.log("Longitude:", coordinates.longitude);
    
    const newsData = await fetchNewsArticles();
    
    console.log("Weather News Articles:");
    newsData.articles.forEach((article, index) => {
      console.log(`[${index + 1}] ${article.title}: ${article.url}`);
    });
  } catch (error) {
    console.error("Error displaying weather information: ", error);
  }
}

// Start the application
displayWeatherInfo();