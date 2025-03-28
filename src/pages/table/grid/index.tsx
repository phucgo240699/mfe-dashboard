import { WeatherForecast } from '../types';

export interface TableGridProps {
  loading: boolean;
  weatherForecasts: WeatherForecast[];
}

const TableGrid: React.FC<TableGridProps> = ({ loading, weatherForecasts }) => {
  if (loading) {
    return (
      <div role="status" className="animate-pulse w-full m-5">
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
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
  );
};

export default TableGrid;
