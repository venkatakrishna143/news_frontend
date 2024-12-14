import React, { useEffect, useState, useRef } from 'react';
import { MainCardContainer, WeatherCardContainer } from './ProfileCards'; // Assuming this is your styled component

function WeatherCard() {
  const [cityId, setCityId] = useState(null); // State for dynamic city ID
  const [locationError, setLocationError] = useState(null); // State for error in getting location
  const widgetRef = useRef(null);

  // Function to fetch city ID based on a location (e.g., from coordinates)
  const fetchCityId = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=afddce78ee5ce9c1ca52a7a85f7cbac9`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setCityId(data.id); // Set dynamic cityId based on the API response
    } catch (err) {
      console.error('Error fetching city ID:', err);
    }
  };

  // Get user's location (latitude and longitude) using geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCityId(latitude, longitude); // Fetch city ID based on geolocation
        },
        (err) => {
          setLocationError('Error fetching location: ' + err.message);
          console.error('Failed to get location:', err);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);

  useEffect(() => {
    if (cityId && widgetRef.current) {
      // Dynamically inject the OpenWeatherMap widget script
      const script = document.createElement('script');
      script.async = true;
      script.charset = 'utf-8';
      script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
      widgetRef.current.appendChild(script);

      // Widget configuration with dynamic cityId
      window.myWidgetParam = [
        {
          id: 12,
          cityid: cityId, // Use the dynamic cityId here
          appid: 'afddce78ee5ce9c1ca52a7a85f7cbac9',
          units: 'metric',
          containerid: 'openweathermap-widget-12',
        },
      ];

      return () => {
        // Cleanup script on unmount
        widgetRef.current?.removeChild(script);
        window.myWidgetParam = [];
      };
    }
  }, [cityId]); // Re-run effect when cityId changes

  return (
    <WeatherCardContainer>
      {locationError ? (
        <p>{locationError}</p>
      ) : cityId ? (
        <div id="openweathermap-widget-12" ref={widgetRef}></div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </WeatherCardContainer>
  );
}

export default WeatherCard;
