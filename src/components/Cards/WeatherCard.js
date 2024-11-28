import React, { useEffect, useRef } from 'react';
import { MainCardContainer } from './ProfileCards'; // Assuming this is your styled component

function WeatherCard() {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current) {
      // Dynamically inject the OpenWeatherMap widget script
      const script = document.createElement('script');
      script.async = true;
      script.charset = 'utf-8';
      script.src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
      widgetRef.current.appendChild(script);

      // Widget configuration
      window.myWidgetParam = [
        {
          id: 12,
          cityid: '1269843',
          appid: 'afddce78ee5ce9c1ca52a7a85f7cbac9',
          units: 'metric',
          containerid: 'openweathermap-widget-12',
        },
      ];

      return () => {
        // Cleanup script and widget parameters on unmount
        widgetRef.current?.removeChild(script);
        window.myWidgetParam = [];
      };
    }
  }, []);

  return (
    <MainCardContainer>
      <div id="openweathermap-widget-12" ref={widgetRef}></div>
    </MainCardContainer>
  );
}

export default WeatherCard;
