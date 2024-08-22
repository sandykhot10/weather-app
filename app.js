document.getElementById('searchBtn').addEventListener('click', function () {
    const city = document.getElementById('cityInput').value;
    const apiKey = '197fdfa996f7f02446c11fcab1ae149e'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Added &units=metric to get Celsius


    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherData = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weatherResult').innerHTML = weatherData;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherResult').innerHTML = `<p>Something went wrong. Please try again.</p>`;
        });
});
