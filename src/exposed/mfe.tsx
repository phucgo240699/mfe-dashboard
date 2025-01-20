import Dashboard from '../pages/dashboard';
import Table from '../pages/table';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
