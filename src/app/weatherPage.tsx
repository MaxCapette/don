import React, { useState } from 'react';
import Weather from '../components/component/uselessWeather';

const Home: React.FC = () => {
  const [location, setLocation] = useState('New York');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={location}
        onChange={handleChange}
        placeholder="Enter location"
      />
      <Weather location={location} />
    </div>
  );
};

export default Home;
