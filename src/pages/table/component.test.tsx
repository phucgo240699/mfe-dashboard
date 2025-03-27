import '@testing-library/jest-dom';
import { vi } from 'vitest';
import Table from './component';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { WeatherForecast } from './types';

describe('Table', () => {
  it('renders non-loading state', () => {
    render(
      <MemoryRouter>
        <Table weatherForecasts={[]} loading={false} onRefetch={() => {}} />
      </MemoryRouter>
    );
    const loadingElements = screen.queryAllByRole('status');
    expect(loadingElements?.length).toBe(0);
  });

  it('renders the loading state', () => {
    render(
      <MemoryRouter>
        <Table weatherForecasts={[]} loading={true} onRefetch={() => {}} />
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
        <Table
          weatherForecasts={mockData}
          loading={false}
          onRefetch={refetchMock}
        />
      </MemoryRouter>
    );
    const forecastItems = screen.getAllByText(/degree/i);
    expect(forecastItems.length).toBe(mockData.length * 2); // Two temperatures per forecast
  });

  it('calls refetch when refresh button is clicked', () => {
    const refetchMock = vi.fn();
    render(
      <MemoryRouter>
        <Table weatherForecasts={[]} loading={false} onRefetch={refetchMock} />
      </MemoryRouter>
    );
    const refreshButton = screen.getByText(/Refresh/i);
    refreshButton.click();
    expect(refetchMock).toHaveBeenCalledTimes(1);
  });
});
