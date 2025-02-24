import React, { useEffect } from 'react';
import { Link } from 'react-router';

interface WeatherForecast {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary?: string;
}

const weatherData: WeatherForecast[] = [
  { date: new Date("2025-02-25"), temperatureC: -9, temperatureF: 16, summary: "Bracing" },
  { date: new Date("2025-02-26"), temperatureC: 47, temperatureF: 116, summary: "Cool" },
  { date: new Date("2025-02-27"), temperatureC: 25, temperatureF: 76, summary: "Scorching" },
  { date: new Date("2025-02-28"), temperatureC: 42, temperatureF: 107, summary: "Freezing" },
  { date: new Date("2025-03-01"), temperatureC: 18, temperatureF: 64, summary: "Mild" },
  { date: new Date("2025-03-02"), temperatureC: -4, temperatureF: 25, summary: "Freezing" },
  { date: new Date("2025-03-03"), temperatureC: 49, temperatureF: 120, summary: "Freezing" },
  { date: new Date("2025-03-04"), temperatureC: 34, temperatureF: 93, summary: "Freezing" },
  { date: new Date("2025-03-05"), temperatureC: 3, temperatureF: 37, summary: "Freezing" },
  { date: new Date("2025-03-06"), temperatureC: -15, temperatureF: 6, summary: "Scorching" },
  { date: new Date("2025-03-07"), temperatureC: 28, temperatureF: 82, summary: "Chilly" },
  { date: new Date("2025-03-08"), temperatureC: 50, temperatureF: 121, summary: "Cool" },
  { date: new Date("2025-03-09"), temperatureC: 34, temperatureF: 93, summary: "Hot" },
  { date: new Date("2025-03-10"), temperatureC: 41, temperatureF: 105, summary: "Hot" },
  { date: new Date("2025-03-11"), temperatureC: 52, temperatureF: 125, summary: "Scorching" },
  { date: new Date("2025-03-12"), temperatureC: 40, temperatureF: 103, summary: "Sweltering" },
  { date: new Date("2025-03-13"), temperatureC: 39, temperatureF: 102, summary: "Scorching" },
  { date: new Date("2025-03-14"), temperatureC: 47, temperatureF: 116, summary: "Mild" },
  { date: new Date("2025-03-15"), temperatureC: 9, temperatureF: 48, summary: "Chilly" },
  { date: new Date("2025-03-16"), temperatureC: 42, temperatureF: 107, summary: "Hot" },
  { date: new Date("2025-03-17"), temperatureC: -2, temperatureF: 29, summary: "Balmy" },
  { date: new Date("2025-03-18"), temperatureC: -20, temperatureF: -3, summary: "Mild" },
  { date: new Date("2025-03-19"), temperatureC: 45, temperatureF: 112, summary: "Chilly" },
  { date: new Date("2025-03-20"), temperatureC: -6, temperatureF: 22, summary: "Bracing" },
  { date: new Date("2025-03-21"), temperatureC: 37, temperatureF: 98, summary: "Chilly" },
  { date: new Date("2025-03-22"), temperatureC: 6, temperatureF: 42, summary: "Balmy" }
];

const getWeatherForecastsRequest = () => new Promise((resolve) => {
  setTimeout(() => resolve(weatherData), 2000)
})

const useWeatherForecastRequest = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [weatherForecasts, setWeatherForecasts] = React.useState<WeatherForecast[]>([])

  const fetchWeatherForecasts = () => {
    setLoading(true)
    getWeatherForecastsRequest().then((result) => setWeatherForecasts(result as WeatherForecast[]))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchWeatherForecasts()
  }, [])

  return {
    loading,
    data: weatherForecasts,
    refetch: fetchWeatherForecasts
  }
}

const Table = () => {
  const { data : weatherForecasts, loading, refetch } = useWeatherForecastRequest()
  return (
    <main className="m-4">
      <section className="mt-3 rounded-lg">
        <h2 className="text-xl font-bold">Weather forecasts</h2>
        <div className='flex my-10 gap-3 justify-end'>
          <Link to={'/'} className='px-8 py-2 text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 active:bg-gray-700 focus:ring-2 focus:ring-gray-300 transition flex items-center gap-2'>Back</Link>
          <button onClick={refetch} className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition">
          🔄 Refresh
          </button>
        </div>
        
        {
          loading ? 
            <div role="status" className="animate-pulse w-full">
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
              <span className="sr-only">Loading...</span>
            </div>
          :
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5'>
              {
                weatherForecasts.map(({ date, temperatureC, temperatureF, summary }) => (
                  <div className='flex flex-col items-start p-2 min-w-16 rounded-lg shadow-lg'>
                    <strong>{date.toLocaleString()}</strong>
                    <ul className='ml-6'>
                      <li>{temperatureC} C degree</li>
                      <li>{temperatureF} F degree</li>
                    </ul>
                    {summary ? <p>{summary}</p>: <></>}
                  </div>
                ))
              }
            </div>
        }
      </section>
    </main>
  );
};

export default Table;
