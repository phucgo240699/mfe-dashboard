import { NavLink } from 'react-router';

const Dashboard = () => {
  return (
    <div>
      <div className="w-60 h-32 bg-red-300">Welcome to Dashboard</div>
      <NavLink to="/table">Go to Table</NavLink>
    </div>
  );
};

export default Dashboard;
