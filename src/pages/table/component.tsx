import { Link } from 'react-router';
import { WeatherForecast } from './types';

interface Props {
  weatherForecasts: WeatherForecast[];
  loading: boolean;
  onRefetch: () => void;
}

export default function TableComponent({
  weatherForecasts,
  loading,
  onRefetch,
}: Props) {
  if (loading) {
    return (
      <div role="status" className="animate-pulse w-full">
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <main className="m-4">
      <section className="mt-3 rounded-lg">
        <h2 className="text-xl font-bold">Weather forecasts</h2>
        <div className="flex my-10 gap-3 justify-end">
          <Link
            to={'/'}
            className="px-8 py-2 text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 active:bg-gray-700 focus:ring-2 focus:ring-gray-300 transition flex items-center gap-2"
          >
            Back
          </Link>
          <button
            onClick={() => onRefetch()}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition"
          >
            🔄 Refresh
          </button>
        </div>

        {weatherForecasts?.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-5">
            {weatherForecasts.map(
              ({ id, date, temperatureC, temperatureF, summary }) => (
                <div
                  key={id}
                  className="flex flex-col items-start p-2 min-w-16 rounded-lg shadow-lg"
                >
                  <strong>{date.toLocaleString()}</strong>
                  <ul className="ml-6">
                    <li>{temperatureC} C degree</li>
                    <li>{temperatureF} F degree</li>
                  </ul>
                  {summary ? <p>{summary}</p> : <></>}
                </div>
              )
            )}
          </div>
        ) : (
          <></>
        )}
      </section>
    </main>
  );
}
