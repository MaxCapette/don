export interface WeatherData {
    main: {
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }
  
  export interface WeatherProps {
    location: string;
  }
  