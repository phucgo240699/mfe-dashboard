import '@testing-library/jest-dom';
import { vi } from 'vitest';
import TableComponent from './component';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { WeatherForecast } from './types';

describe('Table', () => {
  it('renders non-loading state', () => {
    render(
      <MemoryRouter>
        <TableComponent
          searchCriteria=""
          weatherForecasts={[]}
          loading={false}
          onRefetch={() => {}}
          onChangeSearchCriteria={() => {}}
        />
      </MemoryRouter>
    );
    const loadingElements = screen.queryAllByRole('status');
    expect(loadingElements?.length).toBe(0);
  });

  it('renders the loading state', () => {
    render(
      <MemoryRouter>
        <TableComponent
          searchCriteria=""
          weatherForecasts={[]}
          loading={true}
          onRefetch={() => {}}
          onChangeSearchCriteria={() => {}}
        />
      </MemoryRouter>
    );
    const loadingElements = screen.queryAllByRole('status');
    expect(loadingElements?.length).toBe(1);
  });

  it('renders weather forecasts correctly', () => {
    const refetchMock = vi.fn();
    const mockData: WeatherForecast[] = [
      {
        id: '1',
        date: new Date('2023-01-01'),
        temperatureC: 10,
        temperatureF: 50,
        summary: 'Sunny',
      },
      {
        id: '2',
        date: new Date('2023-01-02'),
        temperatureC: 15,
        temperatureF: 59,
        summary: 'Cloudy',
      },
    ];
    render(
      <MemoryRouter>
        <TableComponent
          searchCriteria=""
          weatherForecasts={mockData}
          loading={false}
          onRefetch={refetchMock}
          onChangeSearchCriteria={() => {}}
        />
      </MemoryRouter>
    );
    const sunnyForecast = screen.getByText(/Sunny/i);
    expect(sunnyForecast).toBeInTheDocument();
    const cloudyForecast = screen.queryByText(/Cloudy/i);
    expect(cloudyForecast).toBeInTheDocument();
  });

  it('calls refetch when refresh button is clicked', () => {
    const refetchMock = vi.fn();
    render(
      <MemoryRouter>
        <TableComponent
          searchCriteria=""
          weatherForecasts={[]}
          loading={false}
          onRefetch={refetchMock}
          onChangeSearchCriteria={() => {}}
        />
      </MemoryRouter>
    );
    const refreshButton = screen.getByText(/Refresh/i);
    refreshButton.click();
    expect(refetchMock).toHaveBeenCalledTimes(1);
  });

  it('renders the search input with the correct value', () => {
    render(
      <MemoryRouter>
        <TableComponent
          searchCriteria="Cloudy"
          weatherForecasts={[]}
          loading={false}
          onRefetch={() => {}}
          onChangeSearchCriteria={() => {}}
        />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(
      'Search by date, summary, or temperature'
    );
    expect(searchInput).toHaveValue('Cloudy');
  });

  it('updates search criteria when input changes', () => {
    const onChangeSearchCriteriaMock = vi.fn();
    render(
      <MemoryRouter>
        <TableComponent
          searchCriteria=""
          weatherForecasts={[]}
          loading={false}
          onRefetch={() => {}}
          onChangeSearchCriteria={onChangeSearchCriteriaMock}
        />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(
      'Search by date, summary, or temperature'
    );

    fireEvent.change(searchInput, { target: { value: 'Sunny' } });
    expect(onChangeSearchCriteriaMock).toHaveBeenCalledWith('Sunny');
  });
});
