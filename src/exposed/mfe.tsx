import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

const Dashboard = React.lazy(() => import('../pages/dashboard'));
const Table = React.lazy(() => import('../pages/table'));

const App = () => {
  return (
    <BrowserRouter basename="/dashboard">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
