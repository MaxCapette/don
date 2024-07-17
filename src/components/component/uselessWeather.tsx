import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherData, WeatherProps } from '../../types/weather';

const Weather: React.FC<WeatherProps> = ({ location }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
        );
        setWeather(response.data);
      } catch (err: Error | any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!weather) return null;

  const { main, weather: weatherData } = weather;
  const { temp } = main;
  const { description, icon } = weatherData[0];

  return (
    <div>
      <h2>Weather in {location}</h2>
      <p>Temperature: {temp}°C</p>
      <p>Condition: {description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />
    </div>
  );
};

export default Weather;
