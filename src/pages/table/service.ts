import React from 'react';
import { WeatherForecast } from './types';

const weatherData: WeatherForecast[] = [
  {
    id: '1',
    date: new Date('2025-02-25'),
    temperatureC: -9,
    temperatureF: 16,
    summary: 'Bracing',
  },
  {
    id: '2',
    date: new Date('2025-02-26'),
    temperatureC: 47,
    temperatureF: 116,
    summary: 'Cool',
  },
  {
    id: '3',
    date: new Date('2025-02-27'),
    temperatureC: 25,
    temperatureF: 76,
    summary: 'Scorching',
  },
  {
    id: '4',
    date: new Date('2025-02-28'),
    temperatureC: 42,
    temperatureF: 107,
    summary: 'Freezing',
  },
  {
    id: '5',
    date: new Date('2025-03-01'),
    temperatureC: 18,
    temperatureF: 64,
    summary: 'Mild',
  },
  {
    id: '6',
    date: new Date('2025-03-02'),
    temperatureC: -4,
    temperatureF: 25,
    summary: 'Freezing',
  },
  {
    id: '7',
    date: new Date('2025-03-03'),
    temperatureC: 49,
    temperatureF: 120,
    summary: 'Freezing',
  },
  {
    id: '8',
    date: new Date('2025-03-04'),
    temperatureC: 34,
    temperatureF: 93,
    summary: 'Freezing',
  },
  {
    id: '9',
    date: new Date('2025-03-05'),
    temperatureC: 3,
    temperatureF: 37,
    summary: 'Freezing',
  },
  {
    id: '10',
    date: new Date('2025-03-06'),
    temperatureC: -15,
    temperatureF: 6,
    summary: 'Scorching',
  },
  {
    id: '11',
    date: new Date('2025-03-07'),
    temperatureC: 28,
    temperatureF: 82,
    summary: 'Chilly',
  },
  {
    id: '12',
    date: new Date('2025-03-08'),
    temperatureC: 50,
    temperatureF: 121,
    summary: 'Cool',
  },
  {
    id: '13',
    date: new Date('2025-03-09'),
    temperatureC: 34,
    temperatureF: 93,
    summary: 'Hot',
  },
  {
    id: '14',
    date: new Date('2025-03-10'),
    temperatureC: 41,
    temperatureF: 105,
    summary: 'Hot',
  },
  {
    id: '15',
    date: new Date('2025-03-11'),
    temperatureC: 52,
    temperatureF: 125,
    summary: 'Scorching',
  },
  {
    id: '16',
    date: new Date('2025-03-12'),
    temperatureC: 40,
    temperatureF: 103,
    summary: 'Sweltering',
  },
  {
    id: '17',
    date: new Date('2025-03-13'),
    temperatureC: 39,
    temperatureF: 102,
    summary: 'Scorching',
  },
  {
    id: '18',
    date: new Date('2025-03-14'),
    temperatureC: 47,
    temperatureF: 116,
    summary: 'Mild',
  },
  {
    id: '19',
    date: new Date('2025-03-15'),
    temperatureC: 9,
    temperatureF: 48,
    summary: 'Chilly',
  },
  {
    id: '20',
    date: new Date('2025-03-16'),
    temperatureC: 42,
    temperatureF: 107,
    summary: 'Hot',
  },
  {
    id: '21',
    date: new Date('2025-03-17'),
    temperatureC: -2,
    temperatureF: 29,
    summary: 'Balmy',
  },
  {
    id: '22',
    date: new Date('2025-03-18'),
    temperatureC: -20,
    temperatureF: -3,
    summary: 'Mild',
  },
  {
    id: '23',
    date: new Date('2025-03-19'),
    temperatureC: 45,
    temperatureF: 112,
    summary: 'Chilly',
  },
  {
    id: '24',
    date: new Date('2025-03-20'),
    temperatureC: -6,
    temperatureF: 22,
    summary: 'Bracing',
  },
  {
    id: '25',
    date: new Date('2025-03-21'),
    temperatureC: 37,
    temperatureF: 98,
    summary: 'Chilly',
  },
  {
    id: '26',
    date: new Date('2025-03-22'),
    temperatureC: 6,
    temperatureF: 42,
    summary: 'Balmy',
  },
];

const getWeatherForecastsRequest = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(weatherData), 2000);
  });

export const useWeatherForecastRequest = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [weatherForecasts, setWeatherForecasts] = React.useState<
    WeatherForecast[]
  >([]);

  const fetchWeatherForecasts = () => {
    setLoading(true);
    getWeatherForecastsRequest()
      .then((result) => setWeatherForecasts(result as WeatherForecast[]))
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    fetchWeatherForecasts();
  }, []);

  return {
    loading,
    data: weatherForecasts,
    refetch: fetchWeatherForecasts,
  };
};
