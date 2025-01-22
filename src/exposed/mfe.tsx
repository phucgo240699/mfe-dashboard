import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { SuspenseLayer } from '@/components/SuspenseLayer';

const Dashboard = React.lazy(() => import('@/pages/dashboard'));
const Table = React.lazy(() => import('@/pages/table'));

const App = () => {
  return (
    <BrowserRouter basename="/dashboard">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/table"
          element={
            <SuspenseLayer>
              <Table />
            </SuspenseLayer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
