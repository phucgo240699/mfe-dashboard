import TableComponent from './component';
import { useWeatherForecastRequest } from './service';

const Table = () => {
  const {
    data: weatherForecasts,
    loading,
    refetch,
  } = useWeatherForecastRequest();

  return (
    <TableComponent
      weatherForecasts={weatherForecasts}
      loading={loading}
      onRefetch={refetch}
    />
  );
};

export default Table;
