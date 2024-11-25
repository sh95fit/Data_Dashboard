import React from 'react';
import { getWeatherIcon } from '../config/WeatherIcon';

const WeatherDisplay = ({ weather }) => {
  return (
    <div className="flex items-center justify-center">
      {getWeatherIcon(weather)}
    </div>
  );
};

export default WeatherDisplay;