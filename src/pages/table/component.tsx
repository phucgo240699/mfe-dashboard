import { Link } from 'react-router';
import { WeatherForecast } from './types';
import TableGrid from './grid';

interface Props {
  searchCriteria: string;
  weatherForecasts: WeatherForecast[];
  loading: boolean;
  onRefetch: () => void;
  onChangeSearchCriteria: (value: string) => void;
}

export default function TableComponent({
  searchCriteria,
  weatherForecasts,
  loading,
  onRefetch,
  onChangeSearchCriteria,
}: Props) {
  return (
    <>
      <header className="flex flex-col m-10 gap-y-3">
        <h2 className="text-xl font-bold">Weather forecasts</h2>
        <section className="flex gap-3 justify-end">
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
        </section>

        <section>
          <input
            type="text"
            value={searchCriteria}
            onChange={(e) => onChangeSearchCriteria(e.target.value)}
            className="p-2 border rounded-lg w-full"
            placeholder="Search by date, summary, or temperature"
          />
        </section>
      </header>
      <main className="m-4">
        <TableGrid loading={loading} weatherForecasts={weatherForecasts} />
      </main>
    </>
  );
}
