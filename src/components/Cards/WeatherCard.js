import React, { useState, useEffect } from 'react';
import { MainCardContainer } from './ProfileCards'; // Assuming you have a styled component for cards

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=1269843&appid=afddce78ee5ce9c1ca52a7a85f7cbac9&units=metric`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <MainCardContainer>Loading weather data...</MainCardContainer>;
  if (error) return <MainCardContainer>Error: {error}</MainCardContainer>;

  return (
    <MainCardContainer>
      <h2>Weather in {weather.name}</h2>
      <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
      <p><strong>Feels Like:</strong> {weather.main.feels_like}°C</p>
      <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
      <p><strong>Condition:</strong> {weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        style={{ width: '50px', height: '50px' }}
      />
    </MainCardContainer>
  );
}

export default WeatherCard;
