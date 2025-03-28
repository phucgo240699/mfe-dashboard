import TableComponent from './component';
import { useWeatherForecastRequest } from './service';

const Table = () => {
  const {
    searchCritertia,
    changeSearchCriteria,
    data: weatherForecasts,
    loading,
    refetch,
  } = useWeatherForecastRequest();

  return (
    <TableComponent
      loading={loading}
      searchCriteria={searchCritertia}
      weatherForecasts={weatherForecasts}
      onRefetch={refetch}
      onChangeSearchCriteria={(_searchCriteria) => {
        changeSearchCriteria(_searchCriteria);
      }}
    />
  );
};

export default Table;
