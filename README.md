Weather Forecast Application
Project Overview
This project is a Weather Forecast Application developed using JavaScript, HTML, and CSS with Tailwind CSS for styling. The application integrates with a weather API to fetch and display weather forecasts based on user input. It supports location-based forecasts, current weather conditions, and extended forecasts.

Features
Current Weather Conditions: Display temperature, humidity, wind speed, and weather description.
Location-Based Search: Search weather forecasts by city name or current location.
Recently Searched Cities: Access previous searches through a dropdown menu using local or session storage.
Extended Forecast: Display a 5-day weather forecast with detailed information.
Responsive Design: Optimized for desktop, iPad Mini, and iPhone SE.
Technologies Used
Frontend: HTML, CSS, JavaScript, Tailwind CSS
API: OpenWeatherMap
Version Control: Git
Setup Instructions
Prerequisites
Node.js and npm installed
A text editor (e.g., VS Code)
Git installed
Installation Steps
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/weather-forecast-app.git
cd weather-forecast-app
Install Dependencies

bash
Copy code
npm install
Start the Development Server

bash
Copy code
npm start
Open the Application

Navigate to http://localhost:3000 in your browser to view the application.

Usage
Search by City Name: Enter a city name in the search bar and click the search button.
Use Current Location: Click the button to fetch the weather forecast for your current location.
View Recently Searched Cities: Click on any city in the dropdown menu to see its weather data.
Features Detail

1. Set Up Project Structure
Files Created: index.html, styles.css, app.js
Tailwind CSS is used for styling.
2. Integration with Weather API
API Used: OpenWeatherMap API
API Key: Replace 'YOUR_API_KEY' in app.js with your actual API key.
3. User Interface Design
Simple, intuitive UI using Tailwind CSS.
Responsive Design: Tested on desktop, iPad Mini, and iPhone SE.
4. Location-Based Forecast
Search by City: Implemented with an input field and button.
Fetch Weather by Location: Using Geolocation API.
5. Extended Forecast Display
Displays a 5-day weather forecast with date, icon, temperature, wind speed, and humidity.
6. Error Handling and Validation
Gracefully handles API errors and user input validation.
7. Documentation
Code comments and detailed README.md file for setup and usage instructions.
Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Tailwind CSS: Tailwind CSS
OpenWeatherMap: OpenWeatherMap API
