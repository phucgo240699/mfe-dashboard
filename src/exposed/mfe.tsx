import { SuspenseLayer } from '@/components/SuspenseLayer';
import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

const DashboardPage = React.lazy(() => import('@/pages/dashboard'));
const TablePage = React.lazy(() => import('@/pages/table'));

const App = () => {
  return (
    <BrowserRouter basename="/dashboard">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route
          path="/table"
          element={
            <SuspenseLayer>
              <TablePage />
            </SuspenseLayer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
