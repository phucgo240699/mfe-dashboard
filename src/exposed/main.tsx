import './index.css';
import React from 'react';
import { SuspenseLayer } from '@/components/SuspenseLayer';
import { BrowserRouter, Route, Routes } from 'react-router';

const Dashboard = React.lazy(() => import('@/pages/dashboard'));
const Table = React.lazy(() => import('@/pages/table'));

const App = () => {
  return (
    <SuspenseLayer>
      <BrowserRouter>
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
    </SuspenseLayer>
  );
};

export default App;
